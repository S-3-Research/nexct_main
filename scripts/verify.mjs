import { execFileSync } from "node:child_process";
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
execFileSync("python3", [
  new URL("./extract-reference.py", import.meta.url).pathname,
]);
const browser = await chromium.launch({ headless: true });
const output = "/tmp/nexct-qa";
await mkdir(output, { recursive: true });
const report = [];
for (const [width, height] of [
  [1440, 900],
  [768, 1024],
  [390, 844],
  [320, 740],
]) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto(process.env.PREVIEW_URL || "http://127.0.0.1:3001", {
    waitUntil: "networkidle",
  });
  await page.screenshot({
    path: `${output}/actual-${width}.png`,
    fullPage: true,
  });
  const measure = () =>
    [...document.querySelectorAll("main > section")].map((el) => {
      const r = el.getBoundingClientRect();
      return {
        name: el.className,
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height,
      };
    });
  const actual = await page.evaluate(measure);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  if (overflow) throw new Error(`Horizontal overflow at ${width}`);
  if (width <= 900) {
    const button = page.locator(".menu-toggle");
    await button.click();
    if ((await button.getAttribute("aria-expanded")) !== "true")
      throw new Error("Menu failed to open");
    await page.keyboard.press("Escape");
    if ((await button.getAttribute("aria-expanded")) !== "false")
      throw new Error("Menu failed to close on Escape");
    await button.click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Collaboration products" })
      .click();
    await page.waitForTimeout(800);
    if ((await button.getAttribute("aria-expanded")) !== "false")
      throw new Error("Menu failed to close after navigation");
  } else {
    await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "Collaboration products" })
      .click();
    await page.waitForTimeout(800);
  }
  await page.waitForFunction(
    () =>
      Math.abs(
        document.querySelector("#products").getBoundingClientRect().top - 78,
      ) < 2,
  );
  const anchor = await page
    .locator("#products")
    .evaluate((el) => el.getBoundingClientRect().top);
  if (Math.abs(anchor - 78) > 2)
    throw new Error(`Anchor offset incorrect: ${anchor}`);
  if (
    !(await page
      .locator("header")
      .evaluate((el) => el.classList.contains("scrolled")))
  )
    throw new Error("Header did not update on scroll");
  await page.goto("file:///tmp/nexct-reference/index.html");
  await page.screenshot({
    path: `${output}/reference-${width}.png`,
    fullPage: true,
  });
  const reference = await page.evaluate(measure);
  if (errors.length) throw new Error(errors.join("\n"));
  for (let i = 0; i < actual.length; i++) {
    if (
      Math.abs(actual[i].y - reference[i].y) > 1 ||
      Math.abs(actual[i].height - reference[i].height) > 1
    )
      throw new Error(
        `Reference layout mismatch at ${width}px: ${actual[i].name}`,
      );
  }
  report.push({
    width,
    height,
    overflow,
    errors,
    actual,
    reference,
    deltas: actual.map((a, i) => ({
      name: a.name,
      y: a.y - reference[i].y,
      height: a.height - reference[i].height,
    })),
  });
  await context.close();
}
await writeFile(`${output}/report.json`, JSON.stringify(report, null, 2));
console.log(
  JSON.stringify(
    report.map(({ width, errors, deltas }) => ({ width, errors, deltas })),
    null,
    2,
  ),
);
await browser.close();

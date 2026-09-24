import type { ComponentProps, ReactNode } from "react";

export function Brand({
  withMark = false,
  large = false,
}: {
  withMark?: boolean;
  large?: boolean;
}) {
  return (
    <>
      {withMark && (
        <span className="brand-mark" aria-hidden="true">
          N
        </span>
      )}
      <span className={large ? "nexct-word" : "brand-name"}>
        NEX<span>C</span>t
      </span>
    </>
  );
}

export function ButtonLink({
  size,
  tone,
  className = "",
  ...props
}: ComponentProps<"a"> & { size?: "small"; tone?: "coral" }) {
  return (
    <a
      className={`button${size === "small" ? " button-small" : ""}${tone === "coral" ? " button-coral" : ""} ${className}`}
      {...props}
    />
  );
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label${light ? " light" : ""}`}>{children}</div>
  );
}

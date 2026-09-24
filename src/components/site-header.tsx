"use client";

import { useEffect, useRef, useState } from "react";
import { Brand, ButtonLink } from "./ui";
import { navigation } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (header.current?.contains(document.activeElement))
          toggle.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <header
      ref={header}
      className={`site-header${scrolled || open ? " scrolled" : ""}`}
    >
      <a
        className="brand"
        href="#top"
        aria-label="NEXCt home"
        onClick={() => setOpen(false)}
      >
        <Brand withMark />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <ButtonLink
        size="small"
        href="mailto:christine@achieveexpertise.com?subject=NEXCt%20collaboration"
      >
        Explore a collaboration
      </ButtonLink>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
        onClick={() => setOpen(false)}
        onBlur={(event) => {
          if (!header.current?.contains(event.relatedTarget as Node))
            setOpen(false);
        }}
      >
        {navigation.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="mailto:christine@achieveexpertise.com?subject=NEXCt%20collaboration">
          Explore a collaboration
        </a>
      </nav>
    </header>
  );
}

"use client";

import { useEffect } from "react";

function getScrollOffset() {
  const compactHeader = document.querySelector<HTMLElement>(
    "[data-scroll-header='compact']",
  );
  const compactHeaderRect = compactHeader?.getBoundingClientRect();

  if (
    compactHeaderRect &&
    compactHeaderRect.bottom > 0 &&
    compactHeaderRect.top < window.innerHeight
  ) {
    return Math.ceil(compactHeaderRect.bottom + 12);
  }

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const compactHeaderHeight = isDesktop
    ? Math.min(Math.max(window.innerHeight * 0.12, 68), 112)
    : 58;

  return compactHeaderHeight + 12;
}

function clampScrollPosition(position: number) {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  return Math.min(Math.max(position, 0), maxScroll);
}

function getTargetScrollTop(target: Element) {
  if (target === document.body) {
    return 0;
  }

  const rect = target.getBoundingClientRect();
  const sectionTop = rect.top + window.scrollY;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return clampScrollPosition(sectionTop - getScrollOffset());
  }

  const sectionBottom = rect.bottom + window.scrollY;
  const topAligned = sectionTop - getScrollOffset();
  const bottomAligned = sectionBottom - window.innerHeight + 24;

  return clampScrollPosition(Math.max(topAligned, bottomAligned));
}

function scrollToHash(hash: string) {
  const target = hash === "#" ? document.body : document.querySelector(hash);

  if (!target) {
    return;
  }

  window.scrollTo({
    top: getTargetScrollTop(target),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function handleAnchorClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest("a[href^='#']");

  if (!(link instanceof HTMLAnchorElement)) {
    return;
  }

  const hash = link.getAttribute("href");

  if (!hash) {
    return;
  }

  event.preventDefault();
  scrollToHash(hash);

  if (hash !== "#") {
    window.history.pushState(null, "", hash);
  }
}

export function SmoothAnchorScroll() {
  useEffect(() => {
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, {
        capture: true,
      });
    };
  }, []);

  return null;
}

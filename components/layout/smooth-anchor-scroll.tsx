"use client";

import { useEffect } from "react";

let activeAnimationFrame: number | null = null;

function easeOutQuad(progress: number) {
  return 1 - (1 - progress) * (1 - progress);
}

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

  if (activeAnimationFrame !== null) {
    window.cancelAnimationFrame(activeAnimationFrame);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.scrollIntoView();
    return;
  }

  const start = window.scrollY;
  const targetTop = getTargetScrollTop(target);
  const distance = targetTop - start;
  const duration = Math.min(980, Math.max(520, Math.abs(distance) * 0.42));
  const startedAt = performance.now();

  const animate = (now: number) => {
    const elapsed = now - startedAt;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + distance * easeOutQuad(progress));

    if (progress < 1) {
      activeAnimationFrame = window.requestAnimationFrame(animate);
      return;
    }

    window.scrollTo(0, targetTop);
    activeAnimationFrame = null;
  };

  activeAnimationFrame = window.requestAnimationFrame(animate);
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

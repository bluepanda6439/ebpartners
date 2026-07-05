"use client";

import { useEffect } from "react";

let activeAnimationFrame: number | null = null;

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
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
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return clampScrollPosition(sectionTop - getScrollOffset());
  }

  const sectionBottom = rect.bottom + window.scrollY;
  const topAligned = sectionTop - getScrollOffset();
  const bottomAligned = sectionBottom - window.innerHeight + 24;

  return clampScrollPosition(Math.max(topAligned, bottomAligned));
}

function cancelActiveScroll() {
  if (activeAnimationFrame !== null) {
    window.cancelAnimationFrame(activeAnimationFrame);
    activeAnimationFrame = null;
  }
}

function animateScrollTo(targetTop: number) {
  cancelActiveScroll();

  const start = window.scrollY;
  const distance = targetTop - start;

  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetTop);
    return;
  }

  const duration = Math.min(1450, Math.max(900, Math.abs(distance) * 0.48));
  let animatedElapsed = 0;
  let previousFrameTime = performance.now();

  const animate = (now: number) => {
    const frameDelta = Math.min(now - previousFrameTime, 34);
    previousFrameTime = now;
    animatedElapsed += frameDelta;

    const progress = Math.min(animatedElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (progress < 1) {
      activeAnimationFrame = window.requestAnimationFrame(animate);
      return;
    }

    window.scrollTo(0, targetTop);
    activeAnimationFrame = null;
  };

  activeAnimationFrame = window.requestAnimationFrame(animate);
}

function scrollToHash(hash: string) {
  const target = hash === "#" ? document.body : document.querySelector(hash);

  if (!target) {
    return;
  }

  const targetTop = getTargetScrollTop(target);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetTop);
    return;
  }

  animateScrollTo(targetTop);
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
      cancelActiveScroll();
      document.removeEventListener("click", handleAnchorClick, {
        capture: true,
      });
    };
  }, []);

  return null;
}

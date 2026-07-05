"use client";

import { useEffect } from "react";

let anchorScrollTimeout: number | null = null;
let anchorScrollAnimation: number | null = null;
const stableAnchorTargets = new Set<Element>();

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

  const scrollOffset = getScrollOffset();
  const availableHeight = window.innerHeight - scrollOffset;
  const centeredInViewport =
    sectionTop - scrollOffset - (availableHeight - rect.height) / 2;

  return clampScrollPosition(centeredInViewport);
}

function clearAnchorScrollState() {
  document.body.classList.remove("is-anchor-scrolling");

  if (anchorScrollTimeout !== null) {
    window.clearTimeout(anchorScrollTimeout);
    anchorScrollTimeout = null;
  }
}

function setAnchorScrollState(duration = 900) {
  clearAnchorScrollState();
  document.body.classList.add("is-anchor-scrolling");
  anchorScrollTimeout = window.setTimeout(clearAnchorScrollState, duration);
}

function cancelAnchorScrollAnimation() {
  if (anchorScrollAnimation !== null) {
    window.cancelAnimationFrame(anchorScrollAnimation);
    anchorScrollAnimation = null;
  }
}

function easeOutQuad(progress: number) {
  return 1 - (1 - progress) * (1 - progress);
}

function animateScrollTo(targetTop: number) {
  cancelAnchorScrollAnimation();

  const startTop = window.scrollY;
  const distance = targetTop - startTop;

  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetTop);
    return;
  }

  const duration = Math.min(760, Math.max(360, Math.abs(distance) * 0.18));
  const startedAt = window.performance.now();

  setAnchorScrollState(duration + 180);

  function step(now: number) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const easedProgress = easeOutQuad(progress);

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      anchorScrollAnimation = window.requestAnimationFrame(step);
      return;
    }

    window.scrollTo(0, targetTop);
    anchorScrollAnimation = null;
  }

  anchorScrollAnimation = window.requestAnimationFrame(step);
}

function stabilizeAnchorTarget(target: Element) {
  if (target === document.body) {
    return;
  }

  target.setAttribute("data-anchor-scroll-stable", "true");
  stableAnchorTargets.add(target);
}

function scrollToHash(hash: string) {
  const target = hash === "#" ? document.body : document.querySelector(hash);

  if (!target) {
    return;
  }

  const targetTop = getTargetScrollTop(target);
  stabilizeAnchorTarget(target);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cancelAnchorScrollAnimation();
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
      cancelAnchorScrollAnimation();
      clearAnchorScrollState();
      stableAnchorTargets.forEach((target) => {
        target.removeAttribute("data-anchor-scroll-stable");
      });
      stableAnchorTargets.clear();
      document.removeEventListener("click", handleAnchorClick, {
        capture: true,
      });
    };
  }, []);

  return null;
}

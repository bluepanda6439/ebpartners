"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href="#"
      aria-label="Wróć na górę strony"
      className={`fixed bottom-5 right-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-gold/35 bg-gold text-lg font-semibold text-black shadow-[0_18px_55px_-28px_rgba(0,0,0,0.7)] backdrop-blur transition duration-300 hover:bg-forest hover:text-white md:bottom-7 md:right-7 md:size-12 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}

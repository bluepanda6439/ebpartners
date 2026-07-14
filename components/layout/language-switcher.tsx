"use client";

import { useEffect, useRef, useState } from "react";

import { languageOptions, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  onLocaleChange: (locale: Locale) => void;
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  label,
  onLocaleChange,
  compact = false,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentLocale =
    languageOptions.find((option) => option.code === locale) ??
    languageOptions[0];

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={wrapperRef} className="relative shrink-0">
      <button
        type="button"
        aria-label={label}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className={`inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/18 bg-white/8 font-semibold text-white transition hover:border-gold/60 hover:text-gold md:min-h-10 ${
          compact
            ? "px-2 py-1.5 text-xs md:px-3 md:text-sm"
            : "px-2.5 py-2 text-xs md:px-3 md:text-sm"
        }`}
      >
        <span className="text-[0.68rem] tracking-[0.16em]">
          {currentLocale.flag}
        </span>
        <span>{currentLocale.shortLabel}</span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.65rem)] z-50 w-44 origin-top-right translate-y-0 rounded-2xl border border-white/10 bg-forest-deep/96 p-1.5 text-sm opacity-100 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.75)] backdrop-blur transition duration-200">
          {languageOptions.map((option) => {
            const isActive = option.code === locale;

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  onLocaleChange(option.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition ${
                  isActive
                    ? "bg-gold text-black"
                    : "text-white/78 hover:bg-white/8 hover:text-gold"
                }`}
              >
                <span>{option.label}</span>
                <span className="text-xs font-semibold tracking-[0.14em]">
                  {option.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

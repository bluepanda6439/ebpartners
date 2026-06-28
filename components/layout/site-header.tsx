"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { assetPath } from "@/lib/asset-path";
import type { AudienceKey } from "@/lib/site-data";

const clientNavItems: Array<{
  audience: AudienceKey;
  label: string;
}> = [
  { audience: "individual", label: "Klient Indywidualny" },
  { audience: "business", label: "Klient Biznesowy" },
];

const dropdownLinks = [
  { href: "#faq", label: "FAQ" },
  { href: "#uslugi", label: "Zakres usług" },
];

function selectAudience(audience: AudienceKey) {
  if (typeof window.CustomEvent === "function") {
    window.dispatchEvent(
      new CustomEvent<AudienceKey>("eb:setAudience", { detail: audience }),
    );
    return;
  }

  const event = new Event("eb:setAudience") as Event & {
    detail: AudienceKey;
  };
  event.detail = audience;
  window.dispatchEvent(event);
}

function ClientDropdown({
  audience,
  label,
  compact = false,
}: {
  audience: AudienceKey;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className="group relative flex items-center">
      <a
        href="#proces"
        onClick={() => selectAudience(audience)}
        className={`inline-flex min-h-10 items-center rounded-full leading-none transition hover:text-gold ${
          compact ? "px-2 py-2" : "px-1 py-2"
        }`}
      >
        {label}
      </a>
      <div className="absolute left-1/2 top-full h-3 w-44 -translate-x-1/2" />
      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.65rem)] z-50 w-44 -translate-x-1/2 translate-y-1 rounded-2xl border border-white/10 bg-forest-deep/94 p-1.5 text-base opacity-0 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.75)] backdrop-blur transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {dropdownLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => selectAudience(audience)}
            className="block rounded-xl px-3 py-2 text-white/78 transition hover:bg-white/8 hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function HeaderNav({ compact = false }: { compact?: boolean }) {
  return (
    <nav
      className={`flex flex-wrap items-center text-white/[0.84] ${
        compact ? "justify-center gap-x-4 text-base md:text-lg" : "gap-x-5 text-lg lg:text-xl"
      }`}
    >
      {clientNavItems.map((item) => (
        <ClientDropdown
          key={item.audience}
          audience={item.audience}
          label={item.label}
          compact={compact}
        />
      ))}
      <a
        href="#o-firmie"
        className={`inline-flex min-h-10 items-center rounded-full leading-none transition hover:text-gold ${
          compact ? "px-2 py-2" : "px-1 py-2"
        }`}
      >
        O nas
      </a>
      <a
        href="#kontakt"
        className={`inline-flex min-h-10 items-center rounded-full leading-none transition hover:text-gold ${
          compact ? "px-2 py-2" : "px-1 py-2"
        }`}
      >
        Kontakt
      </a>
    </nav>
  );
}

export function SiteHeader() {
  const largeHeaderRef = useRef<HTMLElement>(null);
  const [showCompact, setShowCompact] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const threshold = largeHeaderRef.current?.offsetHeight ?? 180;
      setShowCompact(window.scrollY > threshold - 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <>
      <header
        ref={largeHeaderRef}
        className="border-b border-white/10 bg-forest text-white shadow-[0_18px_45px_-34px_rgba(0,0,0,0.65)]"
      >
        <div className="mx-auto flex min-h-[24vh] w-full max-w-6xl flex-col justify-center gap-5 px-6 py-[1vh] md:flex-row md:items-center md:justify-between md:px-10">
          <a href="#" className="w-full shrink-0 md:w-[47%]" aria-label="EB Partners">
            <span className="relative block h-[23vh] w-full max-w-[660px] overflow-hidden">
              <Image
                src={assetPath("/loga/logo-na-strone.png")}
                alt="EB Partners"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 92vw"
                className="object-contain"
                style={{ objectPosition: "center 50%" }}
              />
            </span>
          </a>
          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-4">
            <HeaderNav />
          </div>
        </div>
      </header>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/96 text-white shadow-[0_18px_45px_-34px_rgba(0,0,0,0.65)] backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showCompact
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-[12vh] w-full max-w-6xl flex-row items-center justify-center gap-7 px-6 py-2 md:px-10">
          <a
            href="#"
            className="w-[90px] shrink-0 md:w-[118px]"
            aria-label="EB Partners"
          >
            <span className="relative block h-[9.6vh] min-h-[68px] w-[90px] max-h-[92px] overflow-hidden md:w-[118px]">
              <Image
                src={assetPath("/loga/logo-green-transparent.png")}
                alt="EB Partners"
                fill
                priority
                sizes="112px"
                className="object-cover"
                style={{ objectPosition: "center 50%" }}
              />
            </span>
          </a>
          <HeaderNav compact />
        </div>
      </header>
    </>
  );
}

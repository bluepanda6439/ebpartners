"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { assetPath } from "@/lib/asset-path";
import type { AudienceKey } from "@/lib/site-data";

const clientNavItems: Array<{
  audience: AudienceKey;
  label: string;
  shortLabel: string;
}> = [
  {
    audience: "individual",
    label: "Klient Indywidualny",
    shortLabel: "Indywidualny",
  },
  {
    audience: "business",
    label: "Klient Biznesowy",
    shortLabel: "Biznesowy",
  },
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
  shortLabel,
  compact = false,
}: {
  audience: AudienceKey;
  label: string;
  shortLabel: string;
  compact?: boolean;
}) {
  return (
    <div className="group relative flex items-center">
      <a
        href="#proces"
        onClick={() => selectAudience(audience)}
        className={`inline-flex min-h-8 items-center rounded-full leading-none transition hover:text-gold md:min-h-10 ${
          compact ? "px-1.5 py-1.5 md:px-2 md:py-2" : "px-1.5 py-1.5 md:px-1 md:py-2"
        }`}
      >
        <span className="md:hidden">{shortLabel}</span>
        <span className="hidden md:inline">{label}</span>
      </a>
      <div className="absolute left-1/2 top-full hidden h-3 w-44 -translate-x-1/2 md:block" />
      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.65rem)] z-50 hidden w-44 -translate-x-1/2 translate-y-1 rounded-2xl border border-white/10 bg-forest-deep/94 p-1.5 text-base opacity-0 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.75)] backdrop-blur transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 md:block">
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

function ContactCta({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#kontakt"
      className={`inline-flex min-h-8 shrink-0 items-center rounded-full bg-gold font-semibold leading-none text-black transition hover:bg-white md:min-h-10 ${
        compact
          ? "px-3 py-1.5 text-[0.68rem] md:px-4 md:py-2 md:text-lg"
          : "px-3 py-2 text-xs md:px-4 md:py-2 md:text-base lg:text-lg"
      }`}
    >
      Skontaktuj się
    </a>
  );
}

function HeaderNav({
  compact = false,
  showContact = true,
}: {
  compact?: boolean;
  showContact?: boolean;
}) {
  return (
    <nav
      className={`flex items-center text-white/[0.84] ${
        compact
          ? "flex-nowrap justify-center gap-x-1.5 text-[0.68rem] md:gap-x-4 md:text-lg"
          : "flex-wrap justify-center gap-x-2 gap-y-2 text-xs md:flex-nowrap md:justify-start md:gap-x-4 md:text-base lg:text-lg"
      }`}
    >
      {clientNavItems.map((item) => (
        <ClientDropdown
          key={item.audience}
          audience={item.audience}
          label={item.label}
          shortLabel={item.shortLabel}
          compact={compact}
        />
      ))}
      <a
        href="#o-firmie"
        className={`inline-flex min-h-8 items-center rounded-full leading-none transition hover:text-gold md:min-h-10 ${
          compact ? "px-1.5 py-1.5 md:px-2 md:py-2" : "px-1.5 py-1.5 md:px-1 md:py-2"
        }`}
      >
        O nas
      </a>
      {showContact ? <ContactCta compact={compact} /> : null}
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
        <div className="mx-auto flex min-h-[20vh] w-full max-w-6xl flex-col justify-center gap-2 px-4 py-3 md:min-h-[24vh] md:flex-row md:items-center md:justify-between md:gap-4 md:px-10 md:py-[1vh]">
          <a
            href="#"
            className="mx-auto w-full max-w-[360px] shrink-0 md:mx-0 md:w-[43%] md:max-w-none"
            aria-label="EB Partners"
          >
            <span className="relative block h-[13vh] min-h-[92px] w-full overflow-hidden md:h-[23vh] md:max-w-[660px]">
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
          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-2 md:flex-nowrap md:justify-end md:gap-x-4 md:gap-y-0">
            <HeaderNav showContact={false} />
            <ContactCta />
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
        <div className="mx-auto flex min-h-[58px] w-full max-w-6xl flex-row items-center justify-center gap-2 px-3 py-1 md:min-h-[12vh] md:gap-7 md:px-10 md:py-2">
          <a
            href="#"
            className="w-[44px] shrink-0 md:w-[118px]"
            aria-label="EB Partners"
          >
            <span className="relative block size-[44px] overflow-hidden md:h-[9.6vh] md:min-h-[68px] md:w-[118px] md:max-h-[92px]">
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

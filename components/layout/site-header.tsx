import Image from "next/image";

import { Container } from "@/components/layout/container";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-forest text-white shadow-[0_18px_45px_-34px_rgba(0,0,0,0.65)]">
      <Container className="flex min-h-[30vh] flex-col justify-center gap-6 py-[1.5vh] md:flex-row md:items-center md:justify-between">
        <a
          href="#"
          className="w-full shrink-0 md:w-[45%]"
          aria-label="EB Partners"
        >
          <span className="relative block h-[27vh] w-full max-w-[620px] overflow-hidden">
            <Image
              src="/loga/logo-na-strone.png"
              alt="EB Partners"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 92vw"
              className="object-contain"
              style={{ objectPosition: "center 50%" }}
            />
          </span>
        </a>
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-4 md:justify-end">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-base text-white/[0.84] md:justify-end lg:text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

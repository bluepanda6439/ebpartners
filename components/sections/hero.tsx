import Image from "next/image";

import { Container } from "@/components/layout/container";
import { assetPath } from "@/lib/asset-path";
import type { SiteCopy } from "@/lib/i18n";

type HeroSectionProps = {
  copy: SiteCopy["hero"];
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="section-fade relative isolate overflow-hidden border-b border-border bg-surface pb-14 pt-6 md:pb-28 md:pt-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/hero-justice-balance-bg.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-95"
          style={{
            objectPosition: "34% 18%",
            maskImage:
              "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.58) 44%, rgba(0,0,0,0.22) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.58) 44%, rgba(0,0,0,0.22) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,241,0.16)_0%,rgba(248,246,241,0.42)_42%,rgba(248,246,241,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,241,0.04)_0%,rgba(207,178,125,0.06)_68%,rgba(242,239,232,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_20%,rgba(185,147,79,0.14),transparent_34%)]" />
      </div>
      <Container className="relative z-10 flex min-h-[540px] flex-col justify-center gap-9 md:translate-x-8 lg:translate-x-12">
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
          <div className="hidden md:absolute md:bottom-0 md:left-1/2 md:top-0 md:block md:w-px md:-translate-x-1/2 md:bg-gradient-to-b md:from-transparent md:via-black/60 md:to-transparent" />

          <div className="md:pr-10">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground md:ml-auto md:text-right md:text-6xl">
              {copy.title}
            </h1>
          </div>

          <div className="md:pl-10">
            <p className="max-w-xl text-[1.25rem] leading-9 text-foreground [text-shadow:0_1px_18px_rgba(248,246,241,0.9)] md:text-[1.375rem] md:leading-10">
              {copy.body}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#proces"
            className="rounded-full bg-forest px-10 py-4 text-base font-semibold text-white shadow-[0_18px_45px_-30px_rgba(12,52,39,0.8)] transition hover:bg-gold hover:text-black md:px-12"
          >
            {copy.selectPath}
          </a>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { assetPath } from "@/lib/asset-path";
import type { SiteCopy } from "@/lib/i18n";

type HeroSectionProps = {
  copy: SiteCopy["hero"];
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="section-fade relative isolate overflow-hidden border-b border-border bg-surface pb-14 pt-8 md:pb-28 md:pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/hero-justice-bg.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100"
          style={{
            objectPosition: "0% 50%",
            maskImage:
              "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,1) 82%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,1) 82%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,241,0.12)_0%,rgba(248,246,241,0.34)_34%,rgba(248,246,241,0.72)_68%,rgba(248,246,241,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,241,0.3)_0%,rgba(207,178,125,0.1)_62%,rgba(242,239,232,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(185,147,79,0.16),transparent_30%)]" />
      </div>
      <Container className="relative z-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="text-base font-semibold uppercase tracking-[0.24em] text-gold md:text-xl">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
            {copy.title}
          </h1>
          <div className="max-w-2xl rounded-[2rem] border border-gold/22 bg-[linear-gradient(180deg,#fffdf8_0%,#f5f0e6_100%)] p-5 text-foreground shadow-[0_30px_95px_-62px_rgba(0,0,0,0.62)] md:p-7">
            <p className="text-base leading-8 text-muted md:text-lg">
              {copy.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#proces"
                className="rounded-full bg-forest px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_-30px_rgba(12,52,39,0.8)] transition hover:bg-gold hover:text-black md:px-10"
              >
                {copy.selectPath}
              </a>
              <a
                href="#o-firmie"
                className="rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-foreground transition hover:border-gold/50 hover:text-forest md:px-10"
              >
                {copy.meetTeam}
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-forest p-8 text-white shadow-[0_28px_90px_-58px_rgba(12,52,39,0.92)]">
          <div className="absolute -right-16 top-10 size-56 rounded-full bg-gold/12 blur-3xl" />
          <div className="absolute -bottom-20 left-10 size-64 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-gold-soft/80 to-transparent" />
          <p className="relative mb-5 text-sm uppercase tracking-[0.2em] text-gold-soft">
            {copy.teamEyebrow}
          </p>
          <div className="relative grid gap-4 sm:grid-cols-2">
            {["Ewelina Bojczuk", "Chido Bennadette Hanyani"].map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-white/12 bg-white/[0.08] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">
                  {copy.coFounder}
                </p>
                <p className="mt-4 font-serif text-2xl leading-tight text-white">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

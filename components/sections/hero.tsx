import Image from "next/image";

import { Container } from "@/components/layout/container";
import { assetPath } from "@/lib/asset-path";

export function HeroSection() {
  return (
    <section className="section-shell section-fade border-b border-border bg-surface py-14 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.22em] text-gold">
            Legalizacja pobytu i doradztwo prawne
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Bridging the gap between foreign nationals and the Polish legal
            system.
          </h1>
          <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
            We help foreigners and companies navigate legal issues efficiently
            and in compliance with the law. We explain the law coherently, act
            as a bridge between you and the local authorities, and most
            importantly, we keep your mind at ease.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#proces"
              className="rounded-full bg-forest px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_-30px_rgba(12,52,39,0.8)] transition hover:bg-gold hover:text-black md:px-10"
            >
              Select your path
            </a>
            <a
              href="#o-firmie"
              className="rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-foreground transition hover:border-gold/50 hover:text-forest md:px-10"
            >
              Poznaj nasz zespół
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl border border-border bg-forest p-8 text-white">
          <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-gold-soft/80 to-transparent" />
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gold-soft">
            Zespół EB Partners
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08]">
              <Image
                src={assetPath("/loga/ewe.jpeg")}
                alt="Ewa z zespołu EB Partners"
                fill
                unoptimized
                sizes="(min-width: 768px) 18vw, 45vw"
                className="z-0 object-cover"
                style={{ objectPosition: "52% 44%" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/55 to-transparent p-5 text-sm text-white">
                Ewa
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08]">
              <Image
                src={assetPath("/loga/benna.png")}
                alt="Benna z zespołu EB Partners"
                fill
                unoptimized
                sizes="(min-width: 768px) 18vw, 45vw"
                className="z-0 object-cover"
                style={{ objectPosition: "52% 42%" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/55 to-transparent p-5 text-sm text-white">
                Benna
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

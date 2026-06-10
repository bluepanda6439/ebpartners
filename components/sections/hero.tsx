import Image from "next/image";

import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section className="section-shell section-fade border-b border-border bg-surface py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Legalizacja pobytu i doradztwo prawne
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Prawo, które stawia klienta w centrum.
          </h1>
          <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
            Prowadzimy sprawy legalizacji pobytu i pracy z uważnością,
            przejrzystością i pełnym poszanowaniem zasad etyki oraz zgodności z
            prawem.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-black"
            >
              Umów konsultację
            </a>
            <a
              href="#uslugi"
              className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold/50"
            >
              Zobacz usługi
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl border border-border bg-forest p-8 text-white">
          <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-gold-soft/80 to-transparent" />
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-soft">
            Zespół EB Partners
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08]">
              <Image
                src="/loga/ewe.jpeg"
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
                src="/loga/benna.png"
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

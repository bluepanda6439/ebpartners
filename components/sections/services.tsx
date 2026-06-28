"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import reviewDocsImage from "@/images/review-docs-together.jpg";
import { serviceGroups, type AudienceKey } from "@/lib/site-data";

type ServicesSectionProps = {
  audience: AudienceKey;
};

export function ServicesSection({ audience }: ServicesSectionProps) {
  const activeServices = serviceGroups[audience];

  return (
    <section
      id="uslugi"
      className="section-fade relative isolate overflow-hidden border-b border-border bg-background py-24"
    >
      <Image
        src={reviewDocsImage}
        alt="Reviewing documents together during a legal consultation"
        fill
        sizes="100vw"
        className="object-cover opacity-75 motion-safe:animate-[imageDrift_18s_ease-in-out_infinite_alternate]"
        style={{ objectPosition: "56% 50%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,rgba(248,246,241,0.94)_36%,rgba(248,246,241,0.46)_66%,rgba(12,52,39,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,rgba(248,246,241,0.28)_18%,rgba(248,246,241,0.52)_78%,var(--background)_100%)]" />
      <Container className="relative z-10">
        <div className="reveal-on-scroll mb-10 max-w-3xl">
          <p className="text-base font-semibold uppercase tracking-[0.32em] text-gold md:text-xl">
            Oferta
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
            Zakres usług
          </h2>
          <p className="mt-5 max-w-2xl text-base font-semibold uppercase leading-8 tracking-[0.18em] text-gold md:text-lg">
            {activeServices.intro}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {activeServices.items.map((item, index) => (
            <article
              key={item.title}
              className="reveal-on-scroll rounded-2xl border border-white/70 bg-white/86 p-6 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/94 hover:shadow-[0_18px_52px_-36px_rgba(12,52,39,0.5)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-forest" />
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import contactBackground from "@/images/wroclaw-contact-bg.jpg";
import {
  contactEmail,
  contactLocation,
  contactPhones,
} from "@/lib/contact-data";

export function FinalCtaSection() {
  return (
    <section
      id="kontakt"
      className="section-fade relative isolate overflow-hidden border-b border-border bg-forest pb-12 pt-0 text-white md:pb-16 md:pt-0"
    >
      <div className="absolute inset-x-0 top-0 z-0 h-[82%] min-h-[820px] overflow-hidden">
        <Image
          src={contactBackground}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-72"
          style={{ objectPosition: "center 34%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,37,29,0.22)_0%,rgba(8,37,29,0.38)_34%,rgba(12,52,39,0.72)_72%,#0c3427_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(185,147,79,0.2),transparent_30%)]" />
      </div>
      <div className="absolute -left-24 top-16 z-0 size-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative z-10 pt-6 md:pt-8">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="space-y-4">
            <p className="text-base font-semibold uppercase tracking-[0.24em] text-gold-soft md:text-xl">
              Contact
            </p>
            <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
              Tell us what you need to solve.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/70 md:justify-self-end">
            Send the essential facts, deadline and documents you already have.
            We will help you identify the safest next step.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-forest/94 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.9)]">
            <div className="p-5 md:p-6">
              <a
                href={`mailto:${contactEmail}`}
                className="group block border-b border-white/10 pb-5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
                  E-mail
                </span>
                <span className="mt-2 block text-lg font-semibold text-white transition group-hover:text-gold-soft">
                  {contactEmail}
                </span>
              </a>

              <div className="divide-y divide-white/10">
                {contactPhones.map((contact) => (
                  <a
                    key={contact.phone}
                    href={contact.href}
                    className="group grid gap-2 py-5 first:pt-5 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
                        {contact.label}
                      </p>
                      <p className="mt-2 font-serif text-xl text-white">
                        {contact.name}
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-gold-soft transition group-hover:text-white md:text-xl">
                      {contact.phone}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative h-[300px] border-t border-white/10 bg-forest-deep md:h-[360px] lg:h-[calc(100%-330px)] lg:min-h-[300px]">
              <iframe
                title="MONO LEGALIZATION location map"
                src={contactLocation.embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-105 saturate-[0.95]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,52,39,0.08),rgba(12,52,39,0)_42%,rgba(12,52,39,0.2))]" />
              <a
                href={contactLocation.href}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 rounded-full border border-gold/35 bg-forest/90 px-4 py-2 text-xs font-semibold text-gold-soft shadow-[0_18px_50px_-32px_rgba(0,0,0,0.9)] backdrop-blur transition hover:bg-gold hover:text-black"
              >
                Open map
              </a>
            </div>
          </div>

          <div className="flex rounded-[2rem] border border-gold/22 bg-[linear-gradient(180deg,#fffdf8_0%,#f5f0e6_100%)] p-5 text-foreground shadow-[0_30px_95px_-52px_rgba(0,0,0,0.98)] md:p-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

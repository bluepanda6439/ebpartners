import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import {
  contactEmail,
  contactLocation,
  contactPhones,
} from "@/lib/contact-data";

export function FinalCtaSection() {
  return (
    <section
      id="kontakt"
      className="section-shell section-fade relative isolate overflow-visible border-b border-border bg-forest pb-16 pt-0 text-white md:pb-24"
    >
      <div className="absolute -left-24 top-16 size-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative z-10 -mt-10 grid gap-8 md:-mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] shadow-[0_24px_70px_-54px_rgba(0,0,0,0.9)]">
          <div className="p-5 md:p-6">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-gold-soft">
              Contact
            </p>
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
                  <p className="text-sm font-semibold text-white/82 transition group-hover:text-gold-soft">
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
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/layout/container";
import { faqGroups, type AudienceKey } from "@/lib/site-data";
import { useEffect, useRef, useState } from "react";

type FaqSectionProps = {
  audience: AudienceKey;
};

export function FaqSection({ audience }: FaqSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasEntered, setHasEntered] = useState(true);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const activeFaq = faqGroups[audience];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px -18% 0px", threshold: 0.18 },
    );

    const frame = window.requestAnimationFrame(() => {
      setShouldAnimate(true);
      setHasEntered(false);
      observer.observe(section);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-shell section-fade border-b border-border bg-background py-14 md:py-20"
    >
      <Container>
        <div className="mb-6 md:mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h2 className="mt-4 font-serif text-2xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="overflow-hidden rounded-3xl border border-forest/14 bg-surface shadow-[0_24px_80px_-60px_rgba(12,52,39,0.58)]">
          {activeFaq.items.map((item, index) => {
            const isOpen = openKey === item.question;

            return (
              <article
                key={item.question}
                className={`faq-item group relative grid gap-4 border-b border-border bg-[linear-gradient(90deg,rgba(225,235,230,0.62),#ffffff_42%)] p-5 outline-none transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] last:border-b-0 hover:bg-[linear-gradient(90deg,rgba(12,52,39,0.12),#ffffff_48%)] focus-within:bg-[linear-gradient(90deg,rgba(12,52,39,0.12),#ffffff_48%)] md:grid-cols-[110px_1fr] md:p-6 ${
                  !shouldAnimate || hasEntered
                    ? "translate-x-0 opacity-100 blur-0"
                    : "-translate-x-16 opacity-0 blur-sm"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white transition duration-500 group-hover:bg-gold group-hover:text-black group-focus-within:bg-gold group-focus-within:text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenKey((currentKey) =>
                        currentKey === item.question ? null : item.question,
                      )
                    }
                    aria-expanded={isOpen}
                    className="w-full text-left"
                  >
                    <h3 className="max-w-4xl text-base font-semibold leading-snug text-forest transition duration-500 group-hover:text-foreground group-focus-within:text-foreground md:text-lg">
                      {item.question}
                    </h3>
                  </button>
                  <p
                    className={`faq-answer overflow-hidden text-sm leading-7 text-muted transition-all duration-500 ease-out md:text-base ${
                      isOpen
                        ? "mt-4 max-h-[34rem] opacity-100"
                        : "max-h-0 opacity-0"
                    } md:group-hover:mt-4 md:group-hover:max-h-[34rem] md:group-hover:opacity-100 md:group-focus-within:mt-4 md:group-focus-within:max-h-[34rem] md:group-focus-within:opacity-100`}
                  >
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        {"disclaimer" in activeFaq ? (
          <p className="mt-5 rounded-2xl border border-forest/12 bg-forest/5 px-5 py-4 text-sm leading-7 text-muted">
            {activeFaq.disclaimer}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

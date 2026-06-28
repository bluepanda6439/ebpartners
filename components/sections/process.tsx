"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import agreementImage from "@/images/agreement.jpg";
import { processGroups, type AudienceKey } from "@/lib/site-data";

type ProcessSectionProps = {
  audience: AudienceKey;
  onAudienceChange: (audience: AudienceKey) => void;
};

export function ProcessSection({
  audience,
  onAudienceChange,
}: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasEntered, setHasEntered] = useState(true);
  const activeGroup =
    processGroups.find((group) => group.key === audience) ?? processGroups[0];

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
      { rootMargin: "-8% 0px -28% 0px", threshold: 0.36 },
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
      id="proces"
      className="section-fade relative isolate overflow-hidden border-b border-forest-deep bg-forest text-white"
    >
      <div className="absolute inset-x-0 top-0 h-[76vh] min-h-[640px]">
        <Image
          src={agreementImage}
          alt="Handshake symbolizing agreement and trusted cooperation"
          fill
          sizes="100vw"
          className="object-cover motion-safe:animate-[imageDrift_16s_ease-in-out_infinite_alternate]"
          style={{ objectPosition: "50% 56%" }}
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,37,29,0.3)_0%,rgba(8,37,29,0.6)_42%,rgba(12,52,39,0.96)_74%,rgba(12,52,39,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(185,147,79,0.18),transparent_34%)]" />
      </div>
      <div className="absolute inset-x-0 top-[54vh] h-[34vh] bg-[linear-gradient(180deg,rgba(12,52,39,0),#0c3427_44%,#0c3427_100%)]" />
      <div className="glow-orb left-[10%] top-36 bg-gold/18" />
      <div className="glow-orb right-[12%] top-64 bg-forest-soft/16 delay-300" />
      <Container className="relative z-10">
        <div className="flex min-h-[58vh] flex-col items-center justify-center space-y-5 py-20 text-center md:min-h-[60vh]">
          <p
            className={`text-base font-semibold uppercase tracking-[0.32em] text-gold-soft transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-xl ${
              !shouldAnimate || hasEntered
                ? "translate-y-0 scale-100 opacity-100 blur-0"
                : "translate-y-10 scale-95 opacity-0 blur-sm"
            }`}
          >
            Choose your path
          </p>
          <h2
            className={`max-w-3xl font-serif text-3xl leading-tight text-white transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-5xl ${
              !shouldAnimate || hasEntered
                ? "translate-y-0 scale-100 opacity-100 blur-0 delay-150"
                : "translate-y-12 scale-95 opacity-0 blur-sm"
            }`}
          >
            Support tailored to your situation
          </h2>
          <div
            className={`inline-flex rounded-full border border-white/25 bg-white/12 p-1 shadow-[0_18px_70px_-45px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              !shouldAnimate || hasEntered
                ? "translate-y-0 scale-100 opacity-100 blur-0 delay-300"
                : "translate-y-12 scale-90 opacity-0 blur-sm"
            }`}
          >
            {processGroups.map((group) => {
              const isActive = group.key === audience;

              return (
                <button
                  key={group.key}
                  type="button"
                  onClick={() => onAudienceChange(group.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 md:px-5 ${
                    isActive
                      ? "bg-white text-forest"
                      : "text-white/78 hover:text-white"
                  }`}
                  aria-pressed={isActive}
                >
                  {group.title}
                </button>
              );
            })}
          </div>
        </div>
        <article
          className={`mx-auto mb-20 -mt-20 max-w-5xl overflow-hidden rounded-3xl border border-white/12 bg-surface text-foreground shadow-[0_26px_90px_-52px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:-mt-44 ${
            !shouldAnimate || hasEntered
              ? "translate-y-0 scale-100 opacity-100 blur-0 delay-500"
              : "translate-y-16 scale-[0.97] opacity-0 blur-sm"
          }`}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden bg-forest-deep p-6 text-white md:p-8">
              <div className="absolute -left-20 top-12 size-48 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative z-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">
                  Selected path
                </p>
                <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                  {activeGroup.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-white/86">
                  {activeGroup.headline}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {activeGroup.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#uslugi"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:bg-gold hover:text-black"
                  >
                    Zakres usług
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold-soft hover:text-gold-soft"
                  >
                    View FAQ
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="divide-y divide-border">
                {activeGroup.points.map((point) => (
                  <div
                    key={point.title}
                    className="reveal-on-scroll py-5 first:pt-0 last:pb-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted md:text-base">
                      <span className="font-semibold text-foreground">
                        {point.lead}
                      </span>{" "}
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

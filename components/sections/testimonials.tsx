"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { assetPath } from "@/lib/asset-path";
import type { Locale } from "@/lib/i18n";
import { testimonialCopy, testimonials } from "@/lib/testimonials";

type TestimonialsCopy = (typeof testimonialCopy)[Locale];

function ArrowIcon({ backwards = false }: { backwards?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={`size-5 ${backwards ? "rotate-180" : ""}`}>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReviewDialog({ index, copy, onClose, onNavigate }: {
  index: number;
  copy: TestimonialsCopy;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const review = testimonials[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="review-dialog-title"
      onClose={(event) => {
        // Ignore a queued close event after the development effect reopens it.
        if (!event.currentTarget.open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).closest('[role="region"]')) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          onNavigate(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-border bg-surface p-0 text-foreground shadow-2xl backdrop:bg-forest-deep/85 backdrop:backdrop-blur-sm"
    >
      <div>
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 md:px-6">
          <h3 id="review-dialog-title" className="flex items-center gap-2 text-sm font-semibold text-forest">
            <WhatsAppIcon className="size-5 shrink-0" />
            {copy.conversation}
          </h3>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label={copy.close} className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-forest transition hover:bg-forest-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto bg-[#f3efe7] p-2 md:p-6" tabIndex={0} role="region" aria-label={copy.conversation}>
          <Image src={assetPath(`/images/testimonials/${review.file}`)} alt={review.alt} lang="en" width={review.width} height={review.height} className="mx-auto h-auto w-full min-w-[740px] rounded-lg md:min-w-0" />
        </div>
        <p className="px-4 pt-3 text-center text-xs text-muted md:hidden">{copy.swipe}</p>
        <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 md:px-6">
          <button type="button" onClick={() => onNavigate(-1)} aria-label={copy.previous} className="flex size-11 items-center justify-center rounded-full border border-border text-forest transition hover:bg-forest-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">
            <ArrowIcon backwards />
          </button>
          <p aria-live="polite" aria-atomic="true" className="text-sm tabular-nums text-muted">
            <span className="font-semibold text-forest">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-gold">/</span>
            {String(testimonials.length).padStart(2, "0")}
          </p>
          <button type="button" onClick={() => onNavigate(1)} aria-label={copy.next} className="flex size-11 items-center justify-center rounded-full border border-border text-forest transition hover:bg-forest-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">
            <ArrowIcon />
          </button>
        </div>
      </div>
    </dialog>
  );
}

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const copy = testimonialCopy[locale];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function navigateReview(direction: number) {
    setSelectedIndex((current) =>
      current === null ? null : (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <>
    <section id="opinie" aria-labelledby="testimonials-title" className="section-shell border-b border-border bg-background py-16 md:py-24">
      <Container>
        <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gold">{copy.eyebrow}</p>
            <h2 id="testimonials-title" className="font-serif text-3xl leading-tight text-forest md:text-5xl">
              {copy.title}
              <span className="mt-1 block italic">{copy.titleAccent}</span>
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-8 text-muted">{copy.description}</p>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-forest/10 bg-forest-soft/60 px-4 py-2 text-sm font-medium text-forest">
              <WhatsAppIcon className="size-5 shrink-0" />
              {copy.source}
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {testimonials.map((review, index) => (
            <button key={review.file} type="button" onClick={() => setSelectedIndex(index)} aria-label={`${copy.open}: ${index + 1}`} aria-haspopup="dialog" className="group overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-[0_14px_40px_-30px_rgba(12,52,39,0.25)] transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-30px_rgba(12,52,39,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
              <div className="relative aspect-[2.2/1] overflow-hidden border-b border-border bg-[#f3efe7]">
                <Image src={assetPath(`/images/testimonials/${review.file}`)} alt={review.alt} lang="en" fill sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1152px) calc((100vw - 104px) / 2), 524px" className="object-contain" />
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="flex items-center gap-3 text-xs font-medium tabular-nums text-muted">
                  <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-3 w-px bg-border" />
                  WhatsApp
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-forest transition group-hover:text-gold">
                  {copy.open}
                  <span className="-rotate-45"><ArrowIcon /></span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-muted">{copy.note}</p>
          <a href="#kontakt" className="inline-flex min-h-11 items-center gap-3 self-start border-b border-gold/60 text-sm font-semibold text-forest transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
            {copy.contact}
            <ArrowIcon />
          </a>
        </div>
      </Container>
    </section>
      {selectedIndex !== null && <ReviewDialog index={selectedIndex} copy={copy} onClose={() => setSelectedIndex(null)} onNavigate={navigateReview} />}
    </>
  );
}

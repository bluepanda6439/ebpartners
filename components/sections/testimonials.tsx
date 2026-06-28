import { Container } from "@/components/layout/container";

const testimonials = [
  "Placeholder opinii klienta indywidualnego.",
  "Placeholder opinii klienta firmowego.",
  "Placeholder opinii klienta premium.",
];

export function TestimonialsSection() {
  return (
    <section
      id="opinie"
      className="section-shell section-fade border-b border-border bg-surface py-14 md:py-20"
    >
      <Container>
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">
            Social proof
          </p>
          <h2 className="font-serif text-2xl md:text-4xl">Opinie klientów</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((quote) => (
            <blockquote
              key={quote}
              className="rounded-2xl border border-border bg-surface-soft p-6 text-sm leading-7 text-muted"
            >
              “{quote}”
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

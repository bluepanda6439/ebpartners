import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";

export function FinalCtaSection() {
  return (
    <section
      id="kontakt"
      className="section-shell section-fade border-b border-border bg-surface py-20"
    >
      <Container className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl md:text-5xl">
            Końcowe wezwanie do działania
          </h2>
          <p className="text-muted">
            To miejsce na finalny komunikat sprzedażowy i dane kontaktowe.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface-soft p-6">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

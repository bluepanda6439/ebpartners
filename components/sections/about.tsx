import { Container } from "@/components/layout/container";

export function AboutSection() {
  return (
    <section
      id="o-firmie"
      className="section-shell section-fade border-b border-border bg-surface py-20"
    >
      <Container className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            O firmie
          </p>
          <h2 className="font-serif text-3xl md:text-5xl">
            Sekcja budująca zaufanie
          </h2>
          <p className="text-muted">
            Tu umieścimy finalną historię marki, doświadczenie i specjalizację.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface-soft p-6">
          <h3 className="mb-3 text-lg font-semibold">Obsługiwane języki</h3>
          <p className="text-sm text-muted">PL / ENG / UA / RU (placeholder)</p>
        </div>
      </Container>
    </section>
  );
}

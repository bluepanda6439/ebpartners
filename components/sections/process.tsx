import { Container } from "@/components/layout/container";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section
      id="proces"
      className="section-shell section-fade border-b border-border bg-background py-20"
    >
      <Container>
        <div className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Proces</p>
          <h2 className="font-serif text-3xl md:text-5xl">Jak współpracujemy</h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
                Krok {index + 1}
              </p>
              <p className="text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

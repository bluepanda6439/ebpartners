import { Container } from "@/components/layout/container";
import { processGroups } from "@/lib/site-data";

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
        <div className="grid gap-5 md:grid-cols-2">
          {processGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-forest" />
              <h3 className="mb-3 text-2xl font-semibold">{group.title}</h3>
              <p className="mb-6 text-sm leading-7 text-muted">
                {group.description}
              </p>
              <ol className="space-y-3">
                {group.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-7">
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

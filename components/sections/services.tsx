import { Container } from "@/components/layout/container";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section
      id="uslugi"
      className="section-shell section-fade border-b border-border bg-background py-20"
    >
      <Container>
        <div className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Oferta</p>
          <h2 className="font-serif text-3xl md:text-5xl">Zakres usług</h2>
          <p className="max-w-2xl text-muted">
            Placeholdery sekcji usług. W kolejnym kroku wpiszemy finalne opisy i
            konkretne korzyści.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.35)]"
            >
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

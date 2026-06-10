import { Container } from "@/components/layout/container";
import { faqItems } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="section-shell section-fade border-b border-border bg-background py-20"
    >
      <Container>
        <div className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h2 className="font-serif text-3xl md:text-5xl">Najczęstsze pytania</h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-forest/12 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8f4_100%)] p-5"
            >
              <summary className="cursor-pointer text-base font-medium">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

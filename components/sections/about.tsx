import { Container } from "@/components/layout/container";
import type { SiteCopy } from "@/lib/i18n";

type AboutSectionProps = {
  copy: SiteCopy["about"];
};

export function AboutSection({ copy }: AboutSectionProps) {
  return (
    <section
      id="o-firmie"
      className="section-shell section-fade overflow-hidden border-b border-border bg-surface pb-4 pt-16 md:pb-6 md:pt-24"
    >
      <Container>
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
              {copy.eyebrow}
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted md:justify-self-end">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {copy.members.map((member) => (
            <article
              key={member.name}
              className="relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f5f8f4_100%)] p-6 shadow-[0_24px_80px_-62px_rgba(12,52,39,0.72)] md:p-8"
            >
              <div className="absolute -right-20 top-10 size-56 rounded-full bg-forest/8 blur-3xl" />
              <div className="absolute -bottom-24 left-8 size-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative z-10 flex flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-forest font-serif text-2xl text-gold-soft">
                    {member.shortName.slice(0, 1)}
                  </div>
                  <div className="h-1.5 w-16 rounded-full bg-forest" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  {copy.coFounder}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground md:text-3xl">
                  {member.name}
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

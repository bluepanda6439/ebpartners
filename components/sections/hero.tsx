import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section className="section-shell section-fade border-b border-border bg-surface py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            Legalizacja pobytu i doradztwo prawne
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Miejsce na główną obietnicę wartości dla klienta.
          </h1>
          <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
            Tu uzupełnimy finalny tekst hero, dopasowany do grupy docelowej i
            Twojej oferty.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-black"
            >
              Umów konsultację
            </a>
            <a
              href="#uslugi"
              className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold/50"
            >
              Zobacz usługi
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl border border-border bg-foreground p-8 text-white">
          <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-gold-soft/80 to-transparent" />
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-soft">
            Blok wizualny
          </p>
          <div className="space-y-4 text-sm text-white/70">
            <p>Element na docelową grafikę / zdjęcie / motyw brandowy.</p>
            <p>
              Na tym etapie zostawiamy celowo neutralny placeholder do
              dopracowania.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

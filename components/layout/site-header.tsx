import { Container } from "@/components/layout/container";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/90 bg-surface/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-serif text-lg tracking-wide text-foreground">
          EB Partners
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full border border-foreground/20 bg-foreground px-4 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-gold hover:text-black"
        >
          Umów konsultację
        </a>
      </Container>
    </header>
  );
}

import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="bg-[linear-gradient(135deg,#0e2d22_0%,#164231_100%)] py-10 text-white">
      <Container className="flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">EB Partners</p>
          <p>ul. [adres], [kod] [miasto]</p>
          <p>+48 [telefon] | [email]</p>
        </div>
        <p>© {new Date().getFullYear()} EB Partners</p>
      </Container>
    </footer>
  );
}

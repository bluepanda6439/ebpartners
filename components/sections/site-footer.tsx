import { Container } from "@/components/layout/container";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { contactEmail, contactPhones } from "@/lib/contact-data";

export function SiteFooter() {
  return (
    <footer className="bg-[linear-gradient(135deg,#0e2d22_0%,#164231_100%)] py-10 text-white">
      <Container className="flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">EB Partners</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {contactPhones.map((contact) => (
              <span key={contact.phone} className="flex flex-col items-start gap-1">
                <a href={contact.href} className="transition hover:text-white">
                  {contact.phone}
                </a>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`WhatsApp — ${contact.name}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition hover:text-white"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
              </span>
            ))}
          </div>
          <p>{contactEmail}</p>
        </div>
        <p>© {new Date().getFullYear()} EB Partners</p>
      </Container>
    </footer>
  );
}

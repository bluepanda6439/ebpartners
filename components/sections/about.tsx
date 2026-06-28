import Image from "next/image";

import { Container } from "@/components/layout/container";

const teamMembers = [
  {
    name: "Chido Bennadette Hanyani",
    shortName: "Benna",
    role: "Co-Founder",
    image: "/loga/benna.png",
    imageAlt: "Chido Bennadette Hanyani, Co-Founder of E&B Partners",
    imagePosition: "52% 42%",
    paragraphs: [
      "Chido Bennadette Hanyani, known to her clients as Benna, is a legal practitioner with over 8 years of international experience across immigration, corporate, compliance, labour, administrative, contract, human rights, and EU law.",
      "Having worked across Malaysia, South Africa, and Poland, she brings a truly international perspective to supporting foreign nationals and businesses navigating the Polish legal system. At E&B Partners, Chido helps clients approach complex legal procedures with clarity, confidence, and practical guidance grounded in both professional expertise and lived international experience.",
      "She holds an LLB Laws degree from the University of London and an LLM in International and European Law from the University of Wroclaw.",
    ],
  },
  {
    name: "Ewelina Bojczuk",
    shortName: "Ewelina",
    role: "Co-Founder",
    image: "/loga/ewe.jpeg",
    imageAlt: "Ewelina Bojczuk, Co-Founder of E&B Partners",
    imagePosition: "52% 44%",
    paragraphs: [
      "Ewelina Bojczuk is a law graduate and legal consultant with over 8 years of experience supporting individuals, entrepreneurs, and businesses in administrative, employment, corporate, and migration-related matters.",
      "Her legal education and practical experience give her a strong understanding of the Polish legal and administrative system - an important advantage in a field where clients often need more than procedural assistance. At E&B Partners, Ewelina helps foreign nationals and companies approach formal procedures, employment matters, business obligations, and migration processes with clarity, accuracy, and legal awareness.",
      "She holds a Master's degree in Law from the University of Silesia in Katowice. Her approach is structured, precise, and focused on making complex legal and administrative procedures easier to understand and manage.",
    ],
  },
];

export function AboutSection() {
  return (
    <section
      id="o-firmie"
      className="section-shell section-fade overflow-hidden border-b border-border bg-surface py-24"
    >
      <Container>
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
              About us
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Meet the team behind E&B Partners
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted md:justify-self-end">
            We combine legal education, international perspective and practical
            experience to help foreign nationals and businesses move through
            Polish legal and administrative procedures with confidence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f5f8f4_100%)] shadow-[0_24px_80px_-62px_rgba(12,52,39,0.72)] md:min-h-[640px]"
            >
              <figure className="relative z-10 h-[360px] w-full overflow-hidden bg-forest transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-[38%] md:group-hover:w-full md:group-focus-within:w-full">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover transition duration-700 group-hover:scale-110 group-focus-within:scale-110"
                  style={{ objectPosition: member.imagePosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,52,39,0.04)_28%,rgba(12,52,39,0.72)_100%)] transition duration-700 md:group-hover:bg-[linear-gradient(180deg,rgba(12,52,39,0.04)_24%,rgba(12,52,39,0.36)_100%)] md:group-focus-within:bg-[linear-gradient(180deg,rgba(12,52,39,0.04)_24%,rgba(12,52,39,0.36)_100%)]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold-soft">
                    {member.shortName}
                  </p>
                </figcaption>
              </figure>

              <div className="relative z-0 flex flex-col p-6 transition duration-500 md:ml-[38%] md:min-h-[640px] md:p-8 md:group-hover:opacity-0 md:group-focus-within:opacity-0">
                <div className="mb-6 h-1.5 w-16 rounded-full bg-forest" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  {member.role}
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

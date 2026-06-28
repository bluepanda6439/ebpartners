export const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-firmie", label: "O Nas" },
  { href: "#opinie", label: "Opinie klientów" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export const processGroups = [
  {
    key: "individual",
    title: "Individual Client",
    headline: "For foreigners who need clear legal guidance in Poland.",
    description:
      "We review your situation, explain your options and help you move through Polish procedures with confidence.",
    cta: "Let us talk about your case",
    points: [
      {
        title: "Work rights",
        lead: "Contracts, unfair treatment and workplace disputes.",
        description: "Know your rights at work and how to protect them.",
      },
      {
        title: "Immigration",
        lead: "From first arrival to long-term stay.",
        description: "We guide you through every stage of living legally in Poland.",
      },
      {
        title: "Residence",
        lead: "Short-term and long-term stay support.",
        description: "We help you secure and maintain your legal stay.",
      },
      {
        title: "Administration",
        lead: "We help you deal with Polish offices.",
        description: "From paperwork to follow-up, we make the process clearer.",
      },
    ],
  },
  {
    key: "business",
    title: "Business Client",
    headline: "For companies hiring or relocating foreign workers.",
    description:
      "We help teams handle immigration cases in a repeatable, efficient and compliant way.",
    cta: "Ask about B2B cooperation",
    points: [
      {
        title: "Foreign employees",
        lead: "Support for candidates and employees.",
        description: "Repeatable support for international talent.",
      },
      {
        title: "Document review",
        lead: "Employer-side documents checked early.",
        description: "We flag missing or risky elements before delays happen.",
      },
      {
        title: "Ongoing cases",
        lead: "For regular monthly case volume.",
        description: "Predictable cooperation for recurring immigration cases.",
      },
      {
        title: "Compliance",
        lead: "Organized process, lower risk.",
        description: "GDPR, EU data protection and documentation quality.",
      },
    ],
  },
] as const;

export type AudienceKey = (typeof processGroups)[number]["key"];

export const serviceGroups = {
  individual: {
    intro:
      "Focused legal support for foreigners who need clarity, safety and practical next steps.",
    items: [
      {
        title: "Know Your Rights at Work",
        description:
          "Labour disputes, unfair treatment, and contract violations - we advise and assist in protecting your labor rights in Poland.",
      },
      {
        title: "Immigration Consulting",
        description:
          "From first arrival to permanent residency, we guide you through every step of legally living in Poland.",
      },
      {
        title: "Residence Legalisation",
        description:
          "We help you secure and maintain your legal right to stay in Poland, whether short-term or long-term.",
      },
      {
        title: "Administrative Procedures Made Simple",
        description:
          "Are you facing a wall of Polish bureaucracy? We navigate it with you, from filing to follow-up.",
      },
      {
        title: "Employer Document Analysis",
        description:
          "Before you sign anything, we read it. We review employment documents to ensure what your employer is asking of you is fully lawful.",
      },
      {
        title: "Representation Before Authorities",
        description:
          "When you need someone to stand in your corner before administrative bodies, we speak on your behalf.",
      },
      {
        title: "Contract Drafting and Reviewing",
        description:
          "Whether it is an employment agreement, a lease, a service contract, or an agreement as buyer or seller, we help draft and review contracts so you understand exactly what you are committing to.",
      },
      {
        title: "Human Rights Protection",
        description:
          "Your rights do not stop at the border. Where institutions or individuals overstep, we know how to push back.",
      },
    ],
  },
  business: {
    intro:
      "Whether you regularly hire foreigners, refer multiple cases per month or need legal advice with your business, we can define a cooperation model tailored to your case volume and your organization's workflow.",
    items: [
      {
        title: "Per-Client Fee",
        description:
          "A good option for companies and agencies that refer cases irregularly or want to settle each case separately.",
      },
      {
        title: "Subscription / Retainer",
        description:
          "For partners who refer a stable number of cases each month and need a predictable process and priority communication.",
      },
      {
        title: "Consultations and Document Audit",
        description:
          "For companies that want to verify processes, documents, or risks before hiring foreigners.",
      },
    ],
  },
} satisfies Record<
  AudienceKey,
  {
    intro: string;
    items: Array<{ title: string; description: string }>;
  }
>;

export const faqGroups = {
  individual: {
    label: "Individual Client",
    intro:
      "Clear answers for foreigners who need to understand their legal options in Poland.",
    items: [
      {
        question: "I do not know where to start with residence legalization. What should I do?",
        answer:
          "Start with a clear review of your current status, deadlines, purpose of stay and documents. We help you understand which path fits your situation and what should be prepared first.",
      },
      {
        question: "My legal stay in Poland is about to expire. Can I still do something?",
        answer:
          "Timing is important, but there may still be legal options depending on your situation. We can assess the risk, explain urgent next steps and help you act before the deadline passes.",
      },
      {
        question: "My employer wants to hire me. What documents should they prepare?",
        answer:
          "We can review employer-side documents, identify missing information and explain what is usually needed for legal work and residence processes.",
      },
      {
        question: "I received a letter from the office. Can you help me understand it?",
        answer:
          "Yes. We can explain what the letter means, what deadline applies and what response or documents may be required.",
      },
      {
        question: "I signed my employment contract only in Polish language - is that valid?",
        answer:
          "Generally, no - not on its own. Employers hiring foreign nationals are required to conclude contracts in writing and in a language the foreign worker understands. If the contract is drafted only in a foreign language, the employer must have it translated into Polish by a sworn translator. A bilingual Polish-foreign language contract does not require a separate sworn translation, but a foreign-language-only contract does.",
      },
      {
        question: "Do you help with refusals or appeals?",
        answer:
          "Yes. We can analyze the decision, explain the reason for refusal and help prepare the next legal step, including an appeal when available.",
      },
      {
        question: "I have an umowa o pracę, but my employer will not let me take paid vacation. Is that legal?",
        answer:
          "No. Under the Polish Labour Code, employees are entitled to 20 days of paid annual leave, or 26 days if employed for at least 10 years. This leave is guaranteed by law, cannot be shortened, and an employee cannot waive their right to it. Importantly, this includes 4 leave on demand days that an employee can use without prior employer approval.",
      },
      {
        question: "What is the notice period if I am fired or want to resign?",
        answer:
          "For an employment contract of indefinite or fixed duration, the statutory notice period depends on length of service: two weeks if you have worked less than 6 months, one month if you have worked between 6 months and 3 years, and three months if you have worked 3 years or more. A notice period counted in months always starts on the first day of the following calendar month and ends on the last day of the final month - so a 1-month notice given on any date in June would run from July 1 to July 31.",
      },
      {
        question: "What types of employment contracts exist in Poland, and how do they affect my rights?",
        answer:
          "There are three main types of employment contracts in Poland: trial period contract (umowa na okres próbny), concluded for a maximum of 3 months and used to assess suitability for the role; fixed-term contract (umowa na czas określony), concluded for a predetermined period such as 6 months or a year, with Polish law limiting fixed-term contracts between the same employer and employee to 33 months or a maximum of 3 contracts in a row; and indefinite contract (umowa na czas nieokreślony), the most stable form, giving the strongest job security, where termination by the employer requires a valid justification and statutory notice periods.",
      },
    ],
    disclaimer:
      "This information is general in nature and does not constitute legal advice. Every employment situation is different - contact E&B Partners for a consultation specific to your circumstances.",
  },
  business: {
    label: "Business Client",
    intro:
      "Practical answers for companies, agencies and teams working with foreign employees.",
    items: [
      {
        question: "Can EB Partners support recurring monthly cases?",
        answer:
          "Yes. For companies with regular case volume, we can define an ongoing cooperation model tailored to the number of cases and the pace of your organization.",
      },
      {
        question: "What cooperation models are available for companies?",
        answer:
          "We can work on a per-client fee, subscription or retainer model. The right option depends on whether cases are occasional or recurring every month.",
      },
      {
        question: "Do you review employer-side documents before submission?",
        answer:
          "Yes. We review documents required for legal work and residence, flag missing elements and help reduce delays before the process moves forward.",
      },
      {
        question: "Can you audit our current hiring or legalization process?",
        answer:
          "Yes. We can review processes, documents and potential risks before hiring or while improving the workflow for foreign employees.",
      },
      {
        question: "Can you support candidates and current employees?",
        answer:
          "Yes. We can support foreign candidates, onboarding processes and ongoing work or residence legalization matters for current employees.",
      },
      {
        question: "How do you handle GDPR and EU data protection?",
        answer:
          "We organize document workflows with attention to compliance, GDPR and EU data protection principles, especially when handling sensitive personal data.",
      },
    ],
  },
};

import {
  faqGroups,
  processGroups,
  serviceGroups,
  type AudienceKey,
} from "@/lib/site-data";

export type Locale = "en" | "pl" | "uk" | "ru" | "es" | "sn" | "tr";

export const defaultLocale: Locale = "en";

export const languageOptions: Array<{
  code: Locale;
  label: string;
  shortLabel: string;
  flag: string;
}> = [
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "pl", label: "Polski", shortLabel: "PL", flag: "🇵🇱" },
  { code: "uk", label: "Українська", shortLabel: "UA", flag: "🇺🇦" },
  { code: "ru", label: "Русский", shortLabel: "RU", flag: "🇷🇺" },
  { code: "es", label: "Español", shortLabel: "ES", flag: "🇪🇸" },
  { code: "sn", label: "Shona", shortLabel: "SH", flag: "🇿🇼" },
  { code: "tr", label: "Türkçe", shortLabel: "TR", flag: "🇹🇷" },
];

export type SiteCopy = {
  header: {
    individual: string;
    individualShort: string;
    business: string;
    businessShort: string;
    about: string;
    contact: string;
    faq: string;
    services: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    selectPath: string;
    meetTeam: string;
    teamEyebrow: string;
    coFounder: string;
  };
  process: {
    eyebrow: string;
    title: string;
    selectedPath: string;
    servicesCta: string;
    faqCta: string;
    audienceTitles: Record<AudienceKey, string>;
    groups: Record<
      AudienceKey,
      {
        key: AudienceKey;
        title: string;
        headline: string;
        description: string;
        points: ReadonlyArray<{
          title: string;
          lead: string;
          description: string;
        }>;
      }
    >;
  };
  faq: {
    eyebrow: string;
    title: string;
    groups: Record<
      AudienceKey,
      {
        items: Array<{ question: string; answer: string }>;
        disclaimer?: string;
      }
    >;
  };
  services: {
    eyebrow: string;
    title: string;
    groups: Record<
      AudienceKey,
      {
        intro: string;
        items: ReadonlyArray<{ title: string; description: string }>;
      }
    >;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    coFounder: string;
    members: ReadonlyArray<{
      name: string;
      shortName: string;
      paragraphs: ReadonlyArray<string>;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    openMap: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      placeholder: string;
      requiredError: string;
      success: string;
      send: string;
      subject: string;
      bodyName: string;
      bodyEmail: string;
      bodyPhone: string;
      bodyPhoneEmpty: string;
      bodyMessage: string;
    };
  };
};

const englishProcessGroups = {
  individual: processGroups[0],
  business: processGroups[1],
};

const englishTeamMembers = [
  {
    name: "Chido Bennadette Hanyani",
    shortName: "Benna",
    paragraphs: [
      "Chido Bennadette Hanyani, known to her clients as Benna, is a legal practitioner with over 8 years of international experience across immigration, corporate, compliance, labour, administrative, contract, human rights, and EU law.",
      "Having worked across Malaysia, South Africa, and Poland, she brings a truly international perspective to supporting foreign nationals and businesses navigating the Polish legal system. At E&B Partners, Chido helps clients approach complex legal procedures with clarity, confidence, and practical guidance grounded in both professional expertise and lived international experience.",
      "She holds an LLB Laws degree from the University of London and an LLM in International and European Law from the University of Wroclaw.",
    ],
  },
  {
    name: "Ewelina Bojczuk",
    shortName: "Ewelina",
    paragraphs: [
      "Ewelina Bojczuk is a law graduate and legal consultant with over 8 years of experience supporting individuals, entrepreneurs, and businesses in administrative, employment, corporate, and migration-related matters.",
      "Her legal education and practical experience give her a strong understanding of the Polish legal and administrative system - an important advantage in a field where clients often need more than procedural assistance. At E&B Partners, Ewelina helps foreign nationals and companies approach formal procedures, employment matters, business obligations, and migration processes with clarity, accuracy, and legal awareness.",
      "She holds a Master's degree in Law from the University of Silesia in Katowice. Her approach is structured, precise, and focused on making complex legal and administrative procedures easier to understand and manage.",
    ],
  },
];

const en: SiteCopy = {
  header: {
    individual: "Individual Client",
    individualShort: "Individual",
    business: "Business Client",
    businessShort: "Business",
    about: "About us",
    contact: "Contact us",
    faq: "FAQ",
    services: "Scope of services",
    language: "Choose language",
  },
  hero: {
    eyebrow: "Residence legalization and legal consulting",
    title: "Bridging the gap between foreign nationals and the Polish legal system.",
    body:
      "We help foreigners and companies navigate legal issues efficiently and in compliance with the law. We explain the law coherently, act as a bridge between you and the local authorities, and most importantly, we keep your mind at ease.",
    selectPath: "Select your path",
    meetTeam: "Meet our team",
    teamEyebrow: "E&B Partners team",
    coFounder: "Co-Founder",
  },
  process: {
    eyebrow: "Choose your path",
    title: "Support tailored to your situation",
    selectedPath: "Selected path",
    servicesCta: "Scope of services",
    faqCta: "View FAQ",
    audienceTitles: {
      individual: "Individual Client",
      business: "Business Client",
    },
    groups: englishProcessGroups,
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    groups: faqGroups,
  },
  services: {
    eyebrow: "Offer",
    title: "Scope of services",
    groups: serviceGroups,
  },
  about: {
    eyebrow: "About us",
    title: "Meet the team behind E&B Partners",
    description:
      "We combine legal education, international perspective and practical experience to help foreign nationals and businesses move through Polish legal and administrative procedures with confidence.",
    coFounder: "Co-Founder",
    members: englishTeamMembers,
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us what you need to solve.",
    description:
      "Send the essential facts, deadline and documents you already have. We will help you identify the safest next step.",
    emailLabel: "E-mail",
    openMap: "Open map",
    form: {
      name: "Name and surname *",
      phone: "Phone",
      email: "E-mail *",
      message: "Message *",
      placeholder:
        "Tell us briefly what happened, what deadline applies, and what kind of support you need.",
      requiredError: "Please complete the required fields: name, e-mail and message.",
      success: "Your e-mail app should open with a prepared message.",
      send: "Send",
      subject: "E&B Partners consultation request",
      bodyName: "Name",
      bodyEmail: "Email",
      bodyPhone: "Phone",
      bodyPhoneEmpty: "Not provided",
      bodyMessage: "Message",
    },
  },
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en,
  pl: {
    header: {
      individual: "Klient indywidualny",
      individualShort: "Indywidualny",
      business: "Klient biznesowy",
      businessShort: "Biznesowy",
      about: "O nas",
      contact: "Skontaktuj się",
      faq: "FAQ",
      services: "Zakres usług",
      language: "Wybierz język",
    },
    hero: {
      eyebrow: "Legalizacja pobytu i doradztwo prawne",
      title: "Łączymy cudzoziemców z polskim systemem prawnym.",
      body:
        "Pomagamy cudzoziemcom i firmom sprawnie oraz zgodnie z prawem przejść przez kwestie prawne. Wyjaśniamy przepisy w zrozumiały sposób, wspieramy kontakt z urzędami i przede wszystkim dajemy Ci spokój w procesie.",
      selectPath: "Wybierz swoją ścieżkę",
      meetTeam: "Poznaj nasz zespół",
      teamEyebrow: "Zespół E&B Partners",
      coFounder: "Co-Founder",
    },
    process: {
      eyebrow: "Wybierz ścieżkę",
      title: "Wsparcie dopasowane do Twojej sytuacji",
      selectedPath: "Wybrana ścieżka",
      servicesCta: "Zakres usług",
      faqCta: "Zobacz FAQ",
      audienceTitles: {
        individual: "Klient indywidualny",
        business: "Klient biznesowy",
      },
      groups: {
        individual: {
          key: "individual",
          title: "Klient indywidualny",
          headline: "Dla cudzoziemców, którzy potrzebują jasnego wsparcia prawnego w Polsce.",
          description:
            "Analizujemy Twoją sytuację, wyjaśniamy dostępne możliwości i pomagamy przejść przez polskie procedury z większą pewnością.",
          points: [
            {
              title: "Prawa pracownicze",
              lead: "Umowy, nierówne traktowanie i spory w pracy.",
              description: "Pomagamy zrozumieć Twoje prawa i sposoby ich ochrony.",
            },
            {
              title: "Imigracja",
              lead: "Od pierwszego przyjazdu po długoterminowy pobyt.",
              description: "Prowadzimy Cię przez kolejne etapy legalnego życia w Polsce.",
            },
            {
              title: "Pobyt",
              lead: "Wsparcie przy pobycie krótko- i długoterminowym.",
              description: "Pomagamy uzyskać i utrzymać legalne prawo pobytu.",
            },
            {
              title: "Administracja",
              lead: "Pomagamy w kontakcie z instytucją publiczną.",
              description: "Od dokumentów po follow-up - upraszczamy cały proces.",
            },
          ],
        },
        business: {
          key: "business",
          title: "Klient biznesowy",
          headline: "Dla firm zatrudniających lub relokujących cudzoziemców.",
          description:
            "Pomagamy zespołom prowadzić sprawy migracyjne w powtarzalny, sprawny i zgodny z przepisami sposób.",
          points: [
            {
              title: "Pracownicy zagraniczni",
              lead: "Wsparcie kandydatów i pracowników.",
              description: "Powtarzalna obsługa międzynarodowych talentów.",
            },
            {
              title: "Analiza dokumentów",
              lead: "Wczesne sprawdzenie dokumentów pracodawcy.",
              description: "Wskazujemy braki i ryzyka, zanim spowodują opóźnienia.",
            },
            {
              title: "Stałe sprawy",
              lead: "Dla regularnej miesięcznej liczby spraw.",
              description: "Przewidywalna współpraca przy cyklicznych procesach migracyjnych.",
            },
            {
              title: "Compliance",
              lead: "Uporządkowany proces i niższe ryzyko.",
              description: "RODO, ochrona danych w UE i jakość dokumentacji.",
            },
          ],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Najczęściej zadawane pytania",
      groups: {
        individual: {
          items: [
            {
              question:
                "Nie wiem, od czego zacząć legalizację pobytu. Co powinnam/powinienem zrobić?",
              answer:
                "Najlepiej zacząć od jasnej analizy obecnego statusu, terminów, celu pobytu i dokumentów. Pomagamy ustalić, która ścieżka pasuje do Twojej sytuacji i co trzeba przygotować w pierwszej kolejności.",
            },
            {
              question:
                "Mój legalny pobyt w Polsce zaraz się kończy. Czy mogę jeszcze coś zrobić?",
              answer:
                "Czas ma duże znaczenie, ale w zależności od sytuacji mogą nadal istnieć rozwiązania prawne. Możemy ocenić ryzyko, wyjaśnić pilne kroki i pomóc zadziałać przed upływem terminu.",
            },
            {
              question:
                "Pracodawca chce mnie zatrudnić. Jakie dokumenty powinien przygotować?",
              answer:
                "Możemy przeanalizować dokumenty po stronie pracodawcy, wskazać braki i wyjaśnić, co zwykle jest potrzebne w procesach legalizacji pracy i pobytu.",
            },
            {
              question:
                "Dostałam/dostałem pismo z urzędu. Czy możecie pomóc mi je zrozumieć?",
              answer:
                "Tak. Wyjaśniamy, czego dotyczy pismo, jaki termin obowiązuje oraz jaka odpowiedź albo jakie dokumenty mogą być wymagane.",
            },
            {
              question:
                "Podpisałam/podpisałem umowę o pracę tylko po polsku - czy jest ważna?",
              answer:
                "Co do zasady nie powinna funkcjonować samodzielnie w takiej formie. Pracodawcy zatrudniający cudzoziemców powinni zawierać umowy na piśmie i w języku zrozumiałym dla pracownika. Jeżeli umowa jest tylko w języku obcym, konieczne może być tłumaczenie przysięgłe na język polski. Umowa dwujęzyczna polsko-obcojęzyczna zwykle nie wymaga osobnego tłumaczenia przysięgłego.",
            },
            {
              question: "Czy pomagacie przy odmowach albo odwołaniach?",
              answer:
                "Tak. Możemy przeanalizować decyzję, wyjaśnić przyczynę odmowy i pomóc przygotować kolejny krok prawny, w tym odwołanie, jeżeli jest dostępne.",
            },
            {
              question:
                "Mam umowę o pracę, ale pracodawca nie pozwala mi wziąć płatnego urlopu. Czy to legalne?",
              answer:
                "Nie. Zgodnie z polskim Kodeksem pracy pracownikowi przysługuje 20 dni płatnego urlopu rocznie albo 26 dni, jeśli staż pracy wynosi co najmniej 10 lat. Prawo do urlopu jest gwarantowane ustawowo, nie może zostać skrócone i pracownik nie może się go zrzec. Obejmuje to także 4 dni urlopu na żądanie.",
            },
            {
              question:
                "Jaki jest okres wypowiedzenia, jeśli zostanę zwolniona/zwolniony albo chcę zrezygnować?",
              answer:
                "Przy umowie o pracę na czas określony lub nieokreślony okres wypowiedzenia zależy od stażu pracy u danego pracodawcy: 2 tygodnie przy zatrudnieniu krótszym niż 6 miesięcy, 1 miesiąc przy zatrudnieniu od 6 miesięcy do 3 lat oraz 3 miesiące przy zatrudnieniu co najmniej 3 lata. Okres wypowiedzenia liczony w miesiącach zaczyna się pierwszego dnia następnego miesiąca i kończy ostatniego dnia miesiąca końcowego.",
            },
            {
              question:
                "Jakie typy umów o pracę istnieją w Polsce i jak wpływają na moje prawa?",
              answer:
                "W Polsce funkcjonują trzy główne typy umów o pracę: umowa na okres próbny, zwykle zawierana maksymalnie na 3 miesiące; umowa na czas określony, zawierana na ustalony okres, np. 6 miesięcy lub rok, przy czym polskie prawo ogranicza łączny czas takich umów do 33 miesięcy albo maksymalnie 3 umów z rzędu; oraz umowa na czas nieokreślony, która daje najsilniejszą stabilność zatrudnienia i przy wypowiedzeniu przez pracodawcę wymaga uzasadnienia oraz zachowania ustawowych okresów wypowiedzenia.",
            },
          ],
          disclaimer:
            "Te informacje mają charakter ogólny i nie stanowią porady prawnej. Każda sytuacja pracownicza jest inna - skontaktuj się z E&B Partners, aby omówić swoje konkretne okoliczności.",
        },
        business: {
          items: [
            {
              question:
                "Czy E&B Partners może obsługiwać regularne miesięczne sprawy?",
              answer:
                "Tak. Dla firm z regularną liczbą spraw możemy ustalić stały model współpracy dopasowany do wolumenu spraw i tempa działania organizacji.",
            },
            {
              question: "Jakie modele współpracy są dostępne dla firm?",
              answer:
                "Możemy pracować w modelu stawki za klienta, subskrypcji albo retaineru. Właściwy model zależy od tego, czy sprawy pojawiają się okazjonalnie, czy cyklicznie co miesiąc.",
            },
            {
              question:
                "Czy sprawdzacie dokumenty po stronie pracodawcy przed złożeniem?",
              answer:
                "Tak. Analizujemy dokumenty wymagane do legalizacji pracy i pobytu, wskazujemy braki i pomagamy ograniczyć opóźnienia, zanim proces ruszy dalej.",
            },
            {
              question:
                "Czy możecie przeprowadzić audyt naszego procesu zatrudniania lub legalizacji?",
              answer:
                "Tak. Możemy sprawdzić procesy, dokumenty i potencjalne ryzyka przed zatrudnieniem cudzoziemców albo podczas usprawniania obecnego workflow.",
            },
            {
              question:
                "Czy wspieracie kandydatów i obecnych pracowników?",
              answer:
                "Tak. Możemy wspierać zagranicznych kandydatów, proces onboardingowy oraz bieżące sprawy związane z legalizacją pracy lub pobytu obecnych pracowników.",
            },
            {
              question: "Jak podchodzicie do RODO i ochrony danych w UE?",
              answer:
                "Organizujemy obieg dokumentów z uwzględnieniem zasad compliance, RODO i ochrony danych w UE, szczególnie przy pracy z wrażliwymi danymi osobowymi.",
            },
          ],
        },
      },
    },
    services: {
      eyebrow: "Oferta",
      title: "Zakres usług",
      groups: {
        individual: {
          intro:
            "Skoncentrowane wsparcie prawne dla cudzoziemców, którzy potrzebują jasności, bezpieczeństwa i praktycznych kolejnych kroków.",
          items: [
            {
              title: "Poznaj swoje prawa w pracy",
              description:
                "Spory pracownicze, nierówne traktowanie i naruszenia umów - doradzamy i pomagamy chronić prawa pracownicze w Polsce.",
            },
            {
              title: "Doradztwo migracyjne",
              description:
                "Od pierwszego przyjazdu po pobyt stały - prowadzimy Cię przez każdy etap legalnego życia w Polsce.",
            },
            {
              title: "Legalizacja pobytu",
              description:
                "Pomagamy uzyskać i utrzymać legalne prawo pobytu w Polsce, zarówno krótko-, jak i długoterminowo.",
            },
            {
              title: "Prostsze procedury administracyjne",
              description:
                "Jeśli trafiasz na ścianę polskiej biurokracji, przechodzimy przez nią razem z Tobą - od dokumentów po follow-up.",
            },
            {
              title: "Analiza dokumentów od pracodawcy",
              description:
                "Zanim coś podpiszesz, czytamy dokumenty. Sprawdzamy, czy wymagania pracodawcy są zgodne z prawem.",
            },
            {
              title: "Reprezentacja przed organami",
              description:
                "Gdy potrzebujesz kogoś, kto będzie mówił w Twoim imieniu przed organami administracji, reprezentujemy Twoje stanowisko.",
            },
            {
              title: "Sporządzanie i analiza umów",
              description:
                "Przy umowie o pracę, najmie, usługach albo innej współpracy pomagamy przygotować i przeanalizować umowę tak, aby chroniła Twoje interesy.",
            },
            {
              title: "Ochrona praw człowieka",
              description:
                "Twoje prawa nie kończą się na granicy. Gdy instytucje lub osoby przekraczają granice, wiemy, jak reagować.",
            },
          ],
        },
        business: {
          intro:
            "Jeśli regularnie zatrudniasz cudzoziemców, kierujesz kilka spraw miesięcznie albo potrzebujesz doradztwa prawnego dla biznesu, możemy ustalić model współpracy dopasowany do liczby spraw i organizacji pracy.",
          items: [
            {
              title: "Stawka za klienta",
              description:
                "Dobre rozwiązanie dla firm i agencji, które kierują sprawy nieregularnie albo chcą rozliczać każdą sprawę osobno.",
            },
            {
              title: "Subskrypcja / retainer",
              description:
                "Dla partnerów z regularną liczbą spraw miesięcznie, którzy potrzebują przewidywalnego procesu i priorytetowej komunikacji.",
            },
            {
              title: "Konsultacje i audyt dokumentów",
              description:
                "Dla firm, które chcą zweryfikować procesy, dokumenty lub ryzyka przed zatrudnianiem cudzoziemców.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "O nas",
      title: "Poznaj zespół E&B Partners",
      description:
        "Łączymy wykształcenie prawnicze, międzynarodową perspektywę i praktyczne doświadczenie, aby pomagać cudzoziemcom oraz firmom przechodzić przez polskie procedury prawne i administracyjne z większą pewnością.",
      coFounder: "Co-Founder",
      members: [
        {
          name: "Chido Bennadette Hanyani",
          shortName: "Benna",
          paragraphs: [
            "Chido Bennadette Hanyani, znana klientom jako Benna, jest prawniczką z ponad 8-letnim międzynarodowym doświadczeniem w obszarze imigracji, prawa korporacyjnego, compliance, prawa pracy, administracyjnego, umów, praw człowieka i prawa UE.",
            "Pracując w Malezji, Republice Południowej Afryki i Polsce, wnosi prawdziwie międzynarodową perspektywę do wsparcia cudzoziemców i firm poruszających się po polskim systemie prawnym. W E&B Partners pomaga klientom podchodzić do złożonych procedur z jasnością, spokojem i praktycznym planem działania.",
            "Ukończyła LLB Laws na University of London oraz LLM in International and European Law na Uniwersytecie Wrocławskim.",
          ],
        },
        {
          name: "Ewelina Bojczuk",
          shortName: "Ewelina",
          paragraphs: [
            "Ewelina Bojczuk jest absolwentką prawa i konsultantką prawną z ponad 8-letnim doświadczeniem we wspieraniu osób indywidualnych, przedsiębiorców i firm w sprawach administracyjnych, pracowniczych, korporacyjnych i migracyjnych.",
            "Jej wykształcenie prawnicze i praktyka dają jej solidne zrozumienie polskiego systemu prawnego i administracyjnego - co jest szczególnie ważne tam, gdzie klient potrzebuje więcej niż samej pomocy proceduralnej.",
            "Ukończyła studia magisterskie na kierunku Prawo na Uniwersytecie Śląskim w Katowicach. Pracuje w sposób uporządkowany, precyzyjny i skoncentrowany na tym, aby złożone procedury były łatwiejsze do zrozumienia i przeprowadzenia.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Powiedz nam, co trzeba rozwiązać.",
      description:
        "Prześlij najważniejsze fakty, terminy i dokumenty, które już masz. Pomożemy ustalić najbezpieczniejszy kolejny krok.",
      emailLabel: "E-mail",
      openMap: "Otwórz mapę",
      form: {
        name: "Imię i nazwisko *",
        phone: "Telefon",
        email: "E-mail *",
        message: "Wiadomość *",
        placeholder:
          "Napisz krótko, co się wydarzyło, jaki termin obowiązuje i jakiego wsparcia potrzebujesz.",
        requiredError: "Uzupełnij wymagane pola: imię, e-mail i wiadomość.",
        success: "Aplikacja pocztowa powinna otworzyć gotową wiadomość.",
        send: "Wyślij",
        subject: "Zapytanie o konsultację E&B Partners",
        bodyName: "Imię i nazwisko",
        bodyEmail: "Email",
        bodyPhone: "Telefon",
        bodyPhoneEmpty: "Nie podano",
        bodyMessage: "Wiadomość",
      },
    },
  },
  uk: {
    ...en,
    header: {
      individual: "Індивідуальний клієнт",
      individualShort: "Індивід.",
      business: "Бізнес-клієнт",
      businessShort: "Бізнес",
      about: "Про нас",
      contact: "Зв'язатися",
      faq: "FAQ",
      services: "Послуги",
      language: "Оберіть мову",
    },
    hero: {
      eyebrow: "Легалізація перебування та юридичні консультації",
      title: "Поєднуємо іноземців із польською правовою системою.",
      body:
        "Ми допомагаємо іноземцям і компаніям ефективно та законно вирішувати юридичні питання. Пояснюємо право зрозуміло, підтримуємо контакт з органами влади та допомагаємо зберігати спокій.",
      selectPath: "Оберіть свій шлях",
      meetTeam: "Познайомитися з командою",
      teamEyebrow: "Команда E&B Partners",
      coFounder: "Co-Founder",
    },
    process: {
      eyebrow: "Оберіть свій шлях",
      title: "Підтримка відповідно до вашої ситуації",
      selectedPath: "Обраний шлях",
      servicesCta: "Послуги",
      faqCta: "Переглянути FAQ",
      audienceTitles: {
        individual: "Індивідуальний клієнт",
        business: "Бізнес-клієнт",
      },
      groups: {
        individual: {
          key: "individual",
          title: "Індивідуальний клієнт",
          headline: "Для іноземців, яким потрібна зрозуміла юридична підтримка в Польщі.",
          description:
            "Ми аналізуємо вашу ситуацію, пояснюємо доступні варіанти та допомагаємо впевнено проходити польські процедури.",
          points: [
            {
              title: "Трудові права",
              lead: "Договори, несправедливе ставлення та трудові спори.",
              description: "Допомагаємо зрозуміти ваші права на роботі та як їх захищати.",
            },
            {
              title: "Імміграція",
              lead: "Від першого приїзду до довгострокового перебування.",
              description: "Проводимо вас через етапи легального життя в Польщі.",
            },
            {
              title: "Легалізація перебування",
              lead: "Підтримка коротко- та довгострокового перебування.",
              description: "Допомагаємо отримати й зберегти законне право перебування.",
            },
            {
              title: "Адміністрація",
              lead: "Допомагаємо у контакті з державною установою.",
              description: "Від документів до подальших дій робимо процес зрозумілішим.",
            },
          ],
        },
        business: {
          key: "business",
          title: "Бізнес-клієнт",
          headline: "Для компаній, які наймають або релокують іноземних працівників.",
          description:
            "Ми допомагаємо командам вести міграційні справи повторювано, ефективно та відповідно до вимог закону.",
          points: [
            {
              title: "Іноземні працівники",
              lead: "Підтримка кандидатів і працівників.",
              description: "Системна допомога для міжнародних талантів.",
            },
            {
              title: "Перевірка документів",
              lead: "Рання перевірка документів роботодавця.",
              description: "Виявляємо прогалини та ризики до появи затримок.",
            },
            {
              title: "Постійні справи",
              lead: "Для регулярної кількості справ щомісяця.",
              description: "Передбачувана співпраця при повторюваних міграційних процесах.",
            },
            {
              title: "Compliance",
              lead: "Організований процес і нижчий ризик.",
              description: "GDPR, захист даних в ЄС та якість документації.",
            },
          ],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Поширені запитання",
      groups: {
        individual: {
          items: [
            {
              question: "Я не знаю, з чого почати легалізацію перебування. Що робити?",
              answer:
                "Почніть з аналізу поточного статусу, строків, мети перебування та документів. Ми допоможемо визначити правильний шлях і перші кроки.",
            },
            {
              question: "Моє законне перебування в Польщі скоро закінчується. Чи можна ще щось зробити?",
              answer:
                "Час дуже важливий, але залежно від ситуації можуть існувати законні варіанти. Ми оцінюємо ризик, пояснюємо термінові кроки та допомагаємо діяти до дедлайну.",
            },
            {
              question: "Роботодавець хоче мене найняти. Які документи він має підготувати?",
              answer:
                "Ми можемо перевірити документи роботодавця, вказати відсутню інформацію та пояснити, що зазвичай потрібно для легальної роботи й перебування.",
            },
            {
              question: "Я отримала/отримав лист з установи. Чи можете допомогти його зрозуміти?",
              answer:
                "Так. Ми пояснюємо зміст листа, строк відповіді та документи або дії, які можуть бути потрібні.",
            },
            {
              question: "Я підписала/підписав трудовий договір тільки польською мовою - чи це дійсно?",
              answer:
                "Зазвичай цього недостатньо. Договір з іноземним працівником має бути письмовим і зрозумілим для працівника. Якщо він складений лише іноземною мовою, може бути потрібний присяжний переклад польською; двомовний польсько-іноземний договір зазвичай не потребує окремого перекладу.",
            },
            {
              question: "Чи допомагаєте ви з відмовами або апеляціями?",
              answer:
                "Так. Ми аналізуємо рішення, пояснюємо причини відмови та допомагаємо підготувати наступний юридичний крок, включно з апеляцією, якщо вона можлива.",
            },
            {
              question: "У мене umowa o pracę, але роботодавець не дозволяє взяти оплачувану відпустку. Це законно?",
              answer:
                "Ні. За польським трудовим законодавством працівник має право на 20 або 26 днів оплачуваної щорічної відпустки залежно від стажу. Це право гарантоване законом, і працівник не може від нього відмовитися.",
            },
            {
              question: "Який строк попередження, якщо мене звільняють або я хочу звільнитися?",
              answer:
                "Для трудових договорів строк залежить від стажу у роботодавця: 2 тижні до 6 місяців роботи, 1 місяць від 6 місяців до 3 років, 3 місяці після 3 років. Місячний строк зазвичай починається з першого дня наступного місяця.",
            },
            {
              question: "Які типи трудових договорів існують у Польщі та як вони впливають на мої права?",
              answer:
                "Основні типи: випробувальний договір, строковий договір і безстроковий договір. Вони відрізняються стабільністю, строками та правилами розірвання; безстроковий договір зазвичай дає найсильніший захист.",
            },
          ],
          disclaimer:
            "Ця інформація має загальний характер і не є юридичною консультацією. Кожна трудова ситуація інша - зверніться до E&B Partners для консультації щодо ваших обставин.",
        },
        business: {
          items: [
            {
              question: "Чи може E&B Partners підтримувати регулярні щомісячні справи?",
              answer:
                "Так. Для компаній з регулярною кількістю справ ми можемо визначити постійну модель співпраці, адаптовану до обсягу та темпу роботи організації.",
            },
            {
              question: "Які моделі співпраці доступні для компаній?",
              answer:
                "Можливі моделі: оплата за клієнта, підписка або retainer. Вибір залежить від того, чи справи є випадковими, чи повторюються щомісяця.",
            },
            {
              question: "Чи перевіряєте документи роботодавця перед поданням?",
              answer:
                "Так. Ми перевіряємо документи для легалізації роботи та перебування, виявляємо прогалини й допомагаємо зменшити затримки.",
            },
            {
              question: "Чи можете провести аудит нашого процесу найму або легалізації?",
              answer:
                "Так. Ми можемо перевірити процеси, документи та ризики перед наймом іноземців або під час удосконалення workflow.",
            },
            {
              question: "Чи підтримуєте кандидатів і чинних працівників?",
              answer:
                "Так. Ми підтримуємо іноземних кандидатів, onboarding та поточні справи щодо легалізації роботи й перебування.",
            },
            {
              question: "Як ви працюєте з GDPR та захистом даних в ЄС?",
              answer:
                "Ми організовуємо документообіг з увагою до compliance, GDPR та принципів захисту даних в ЄС, особливо при роботі з персональними даними.",
            },
          ],
        },
      },
    },
    services: {
      eyebrow: "Пропозиція",
      title: "Послуги",
      groups: {
        individual: {
          intro:
            "Цілеспрямована юридична підтримка для іноземців, яким потрібні ясність, безпека та практичні наступні кроки.",
          items: [
            {
              title: "Знайте свої права на роботі",
              description:
                "Трудові спори, несправедливе ставлення та порушення договорів - ми консультуємо і допомагаємо захищати трудові права в Польщі.",
            },
            {
              title: "Міграційне консультування",
              description:
                "Від першого приїзду до постійного перебування - супроводжуємо кожен етап легального життя в Польщі.",
            },
            {
              title: "Легалізація перебування",
              description:
                "Допомагаємо отримати й підтримувати законне право перебування у Польщі на короткий або довгий строк.",
            },
            {
              title: "Адміністративні процедури простіше",
              description:
                "Якщо ви стикаєтеся з польською бюрократією, ми проходимо процес разом з вами - від подання документів до follow-up.",
            },
            {
              title: "Аналіз документів роботодавця",
              description:
                "Перш ніж підписати, ми читаємо документи. Перевіряємо, чи вимоги роботодавця відповідають закону.",
            },
            {
              title: "Представництво перед органами",
              description:
                "Коли потрібен представник перед адміністративними органами, ми говоримо від вашого імені.",
            },
            {
              title: "Підготовка та аналіз договорів",
              description:
                "Допомагаємо готувати й перевіряти трудові, орендні, сервісні та інші договори, щоб ви розуміли свої зобов'язання.",
            },
            {
              title: "Захист прав людини",
              description:
                "Ваші права не закінчуються на кордоні. Коли установи або люди перевищують межі, ми знаємо, як реагувати.",
            },
          ],
        },
        business: {
          intro:
            "Якщо ви регулярно наймаєте іноземців, передаєте кілька справ на місяць або потребуєте юридичної підтримки для бізнесу, ми можемо визначити модель співпраці під ваш workflow.",
          items: [
            {
              title: "Оплата за клієнта",
              description:
                "Для компаній та агентств, які передають справи нерегулярно або хочуть розраховуватися окремо за кожну справу.",
            },
            {
              title: "Підписка / retainer",
              description:
                "Для партнерів зі стабільною кількістю справ на місяць, яким потрібен передбачуваний процес і пріоритетна комунікація.",
            },
            {
              title: "Консультації та аудит документів",
              description:
                "Для компаній, які хочуть перевірити процеси, документи або ризики перед наймом іноземців.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "Про нас",
      title: "Познайомтеся з командою E&B Partners",
      description:
        "Ми поєднуємо юридичну освіту, міжнародну перспективу та практичний досвід, щоб допомагати іноземцям і бізнесу впевнено проходити польські юридичні та адміністративні процедури.",
      coFounder: "Co-Founder",
      members: [
        {
          name: "Chido Bennadette Hanyani",
          shortName: "Benna",
          paragraphs: [
            "Chido Bennadette Hanyani, відома клієнтам як Benna, є юристкою з понад 8-річним міжнародним досвідом у сфері імміграційного, корпоративного, compliance, трудового, адміністративного, договірного, прав людини та права ЄС.",
            "Досвід роботи в Малайзії, Південній Африці та Польщі дає їй справді міжнародну перспективу у підтримці іноземців і бізнесу, які взаємодіють з польською правовою системою.",
            "Вона має ступінь LLB Laws Університету Лондона та LLM з міжнародного і європейського права Вроцлавського університету.",
          ],
        },
        {
          name: "Ewelina Bojczuk",
          shortName: "Ewelina",
          paragraphs: [
            "Ewelina Bojczuk є випускницею права та юридичною консультанткою з понад 8-річним досвідом підтримки фізичних осіб, підприємців і компаній у адміністративних, трудових, корпоративних та міграційних питаннях.",
            "Її юридична освіта і практичний досвід дають глибоке розуміння польської правової та адміністративної системи - важливу перевагу там, де клієнтам потрібна не лише процедурна допомога.",
            "Вона має магістерський ступінь з права Сілезького університету в Катовіце. Її підхід структурований, точний і спрямований на те, щоб складні процедури стали зрозумілішими.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Розкажіть, що потрібно вирішити.",
      description:
        "Надішліть основні факти, строки та документи, які вже маєте. Ми допоможемо визначити найбезпечніший наступний крок.",
      emailLabel: "E-mail",
      openMap: "Відкрити мапу",
      form: {
        name: "Ім'я та прізвище *",
        phone: "Телефон",
        email: "E-mail *",
        message: "Повідомлення *",
        placeholder:
          "Коротко опишіть, що сталося, який строк діє та яка підтримка потрібна.",
        requiredError: "Заповніть обов'язкові поля: ім'я, e-mail і повідомлення.",
        success: "Поштова програма має відкрити підготовлене повідомлення.",
        send: "Надіслати",
        subject: "Запит на консультацію E&B Partners",
        bodyName: "Ім'я",
        bodyEmail: "Email",
        bodyPhone: "Телефон",
        bodyPhoneEmpty: "Не вказано",
        bodyMessage: "Повідомлення",
      },
    },
  },
  ru: {
    ...en,
    header: {
      individual: "Частный клиент",
      individualShort: "Частный",
      business: "Бизнес-клиент",
      businessShort: "Бизнес",
      about: "О нас",
      contact: "Связаться",
      faq: "FAQ",
      services: "Услуги",
      language: "Выберите язык",
    },
    hero: {
      eyebrow: "Легализация пребывания и юридические консультации",
      title: "Мы соединяем иностранцев с польской правовой системой.",
      body:
        "Мы помогаем иностранцам и компаниям эффективно и законно решать юридические вопросы. Объясняем право понятным языком, поддерживаем контакт с органами власти и помогаем сохранять спокойствие.",
      selectPath: "Выберите свой путь",
      meetTeam: "Познакомиться с командой",
      teamEyebrow: "Команда E&B Partners",
      coFounder: "Co-Founder",
    },
    process: {
      eyebrow: "Выберите путь",
      title: "Поддержка под вашу ситуацию",
      selectedPath: "Выбранный путь",
      servicesCta: "Услуги",
      faqCta: "Смотреть FAQ",
      audienceTitles: {
        individual: "Частный клиент",
        business: "Бизнес-клиент",
      },
      groups: {
        individual: {
          key: "individual",
          title: "Частный клиент",
          headline: "Для иностранцев, которым нужна понятная юридическая поддержка в Польше.",
          description:
            "Мы анализируем вашу ситуацию, объясняем возможные варианты и помогаем уверенно пройти польские процедуры.",
          points: [
            {
              title: "Трудовые права",
              lead: "Договоры, несправедливое отношение и трудовые споры.",
              description: "Помогаем понять ваши права на работе и способы их защиты.",
            },
            {
              title: "Иммиграция",
              lead: "От первого приезда до долгосрочного пребывания.",
              description: "Ведем вас через этапы легального проживания в Польше.",
            },
            {
              title: "Легализация пребывания",
              lead: "Поддержка краткосрочного и долгосрочного пребывания.",
              description: "Помогаем получить и сохранить законное право на пребывание.",
            },
            {
              title: "Администрация",
              lead: "Помогаем во взаимодействии с государственным учреждением.",
              description: "От документов до follow-up делаем процесс понятнее.",
            },
          ],
        },
        business: {
          key: "business",
          title: "Бизнес-клиент",
          headline: "Для компаний, которые нанимают или релокируют иностранных работников.",
          description:
            "Мы помогаем командам вести миграционные дела повторяемо, эффективно и в соответствии с законом.",
          points: [
            {
              title: "Иностранные сотрудники",
              lead: "Поддержка кандидатов и сотрудников.",
              description: "Системная помощь для международных специалистов.",
            },
            {
              title: "Проверка документов",
              lead: "Ранняя проверка документов работодателя.",
              description: "Выявляем пробелы и риски до возникновения задержек.",
            },
            {
              title: "Постоянные дела",
              lead: "Для регулярного ежемесячного объема дел.",
              description: "Предсказуемое сотрудничество при повторяющихся миграционных процессах.",
            },
            {
              title: "Compliance",
              lead: "Организованный процесс и меньший риск.",
              description: "GDPR, защита данных в ЕС и качество документации.",
            },
          ],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Часто задаваемые вопросы",
      groups: {
        individual: {
          items: [
            {
              question: "Я не знаю, с чего начать легализацию пребывания. Что делать?",
              answer:
                "Начните с анализа текущего статуса, сроков, цели пребывания и документов. Мы поможем определить подходящий путь и первые шаги.",
            },
            {
              question: "Мое легальное пребывание в Польше скоро заканчивается. Можно ли еще что-то сделать?",
              answer:
                "Сроки важны, но в зависимости от ситуации могут оставаться правовые варианты. Мы оцениваем риск, объясняем срочные шаги и помогаем действовать до дедлайна.",
            },
            {
              question: "Работодатель хочет меня нанять. Какие документы он должен подготовить?",
              answer:
                "Мы можем проверить документы работодателя, указать недостающую информацию и объяснить, что обычно нужно для легальной работы и пребывания.",
            },
            {
              question: "Я получила/получил письмо из учреждения. Можете помочь понять его?",
              answer:
                "Да. Мы объясняем содержание письма, срок ответа и документы или действия, которые могут потребоваться.",
            },
            {
              question: "Я подписала/подписал трудовой договор только на польском языке - это действительно?",
              answer:
                "Обычно этого недостаточно. Договор с иностранным работником должен быть письменным и понятным работнику. Если документ составлен только на иностранном языке, может потребоваться присяжный перевод на польский; двуязычный польско-иностранный договор обычно не требует отдельного перевода.",
            },
            {
              question: "Помогаете ли вы с отказами или апелляциями?",
              answer:
                "Да. Мы анализируем решение, объясняем причины отказа и помогаем подготовить следующий юридический шаг, включая апелляцию, если она доступна.",
            },
            {
              question: "У меня umowa o pracę, но работодатель не разрешает взять оплачиваемый отпуск. Это законно?",
              answer:
                "Нет. По польскому трудовому законодательству работник имеет право на 20 или 26 дней оплачиваемого ежегодного отпуска в зависимости от стажа. Это право гарантировано законом, и работник не может от него отказаться.",
            },
            {
              question: "Какой срок уведомления, если меня увольняют или я хочу уйти?",
              answer:
                "Для трудовых договоров срок зависит от стажа у работодателя: 2 недели при работе менее 6 месяцев, 1 месяц при стаже от 6 месяцев до 3 лет и 3 месяца после 3 лет. Месячный срок обычно начинается с первого дня следующего месяца.",
            },
            {
              question: "Какие виды трудовых договоров существуют в Польше и как они влияют на мои права?",
              answer:
                "Основные виды: договор на испытательный срок, срочный договор и бессрочный договор. Они отличаются стабильностью, сроками и правилами расторжения; бессрочный договор обычно дает наиболее сильную защиту.",
            },
          ],
          disclaimer:
            "Эта информация носит общий характер и не является юридической консультацией. Каждая трудовая ситуация отличается - обратитесь в E&B Partners за консультацией по вашим обстоятельствам.",
        },
        business: {
          items: [
            {
              question: "Может ли E&B Partners поддерживать регулярные ежемесячные дела?",
              answer:
                "Да. Для компаний с регулярным объемом дел мы можем определить постоянную модель сотрудничества, адаптированную к количеству дел и темпу организации.",
            },
            {
              question: "Какие модели сотрудничества доступны для компаний?",
              answer:
                "Возможны оплата за клиента, подписка или retainer. Подходящий вариант зависит от того, являются ли дела разовыми или повторяются ежемесячно.",
            },
            {
              question: "Проверяете ли вы документы работодателя перед подачей?",
              answer:
                "Да. Мы проверяем документы для легализации работы и пребывания, выявляем пробелы и помогаем снизить риск задержек.",
            },
            {
              question: "Можете ли вы провести аудит нашего процесса найма или легализации?",
              answer:
                "Да. Мы можем проверить процессы, документы и риски перед наймом иностранцев или при улучшении текущего workflow.",
            },
            {
              question: "Поддерживаете ли вы кандидатов и действующих сотрудников?",
              answer:
                "Да. Мы поддерживаем иностранных кандидатов, onboarding и текущие вопросы легализации работы или пребывания сотрудников.",
            },
            {
              question: "Как вы работаете с GDPR и защитой данных в ЕС?",
              answer:
                "Мы организуем документооборот с учетом compliance, GDPR и принципов защиты данных в ЕС, особенно при работе с персональными данными.",
            },
          ],
        },
      },
    },
    services: {
      eyebrow: "Предложение",
      title: "Услуги",
      groups: {
        individual: {
          intro:
            "Сфокусированная юридическая поддержка для иностранцев, которым нужны ясность, безопасность и практические следующие шаги.",
          items: [
            {
              title: "Знайте свои права на работе",
              description:
                "Трудовые споры, несправедливое отношение и нарушения договоров - мы консультируем и помогаем защищать трудовые права в Польше.",
            },
            {
              title: "Миграционное консультирование",
              description:
                "От первого приезда до постоянного пребывания - сопровождаем каждый этап легального проживания в Польше.",
            },
            {
              title: "Легализация пребывания",
              description:
                "Помогаем получить и поддерживать законное право пребывания в Польше на короткий или долгий срок.",
            },
            {
              title: "Административные процедуры проще",
              description:
                "Если вы сталкиваетесь с польской бюрократией, мы проходим процесс вместе с вами - от подачи документов до follow-up.",
            },
            {
              title: "Анализ документов работодателя",
              description:
                "Перед подписанием мы читаем документы. Проверяем, соответствуют ли требования работодателя закону.",
            },
            {
              title: "Представительство перед органами",
              description:
                "Когда нужен представитель перед административными органами, мы говорим от вашего имени.",
            },
            {
              title: "Подготовка и анализ договоров",
              description:
                "Помогаем готовить и проверять трудовые, арендные, сервисные и другие договоры, чтобы вы понимали свои обязательства.",
            },
            {
              title: "Защита прав человека",
              description:
                "Ваши права не заканчиваются на границе. Если учреждения или люди переходят границы, мы знаем, как реагировать.",
            },
          ],
        },
        business: {
          intro:
            "Если вы регулярно нанимаете иностранцев, передаете несколько дел в месяц или нуждаетесь в юридической поддержке бизнеса, мы можем определить модель сотрудничества под ваш workflow.",
          items: [
            {
              title: "Оплата за клиента",
              description:
                "Для компаний и агентств, которые передают дела нерегулярно или хотят рассчитываться отдельно за каждое дело.",
            },
            {
              title: "Подписка / retainer",
              description:
                "Для партнеров со стабильным количеством дел в месяц, которым нужен предсказуемый процесс и приоритетная коммуникация.",
            },
            {
              title: "Консультации и аудит документов",
              description:
                "Для компаний, которые хотят проверить процессы, документы или риски перед наймом иностранцев.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "О нас",
      title: "Познакомьтесь с командой E&B Partners",
      description:
        "Мы объединяем юридическое образование, международный взгляд и практический опыт, чтобы помогать иностранцам и компаниям уверенно проходить польские юридические и административные процедуры.",
      coFounder: "Co-Founder",
      members: [
        {
          name: "Chido Bennadette Hanyani",
          shortName: "Benna",
          paragraphs: [
            "Chido Bennadette Hanyani, известная клиентам как Benna, является юристкой с более чем 8-летним международным опытом в иммиграционном, корпоративном, compliance, трудовом, административном, договорном праве, правах человека и праве ЕС.",
            "Опыт работы в Малайзии, Южной Африке и Польше дает ей по-настоящему международную перспективу в поддержке иностранцев и бизнеса, взаимодействующих с польской правовой системой.",
            "Она имеет степень LLB Laws Лондонского университета и LLM по международному и европейскому праву Вроцлавского университета.",
          ],
        },
        {
          name: "Ewelina Bojczuk",
          shortName: "Ewelina",
          paragraphs: [
            "Ewelina Bojczuk - выпускница юридического факультета и юридическая консультантка с более чем 8-летним опытом поддержки физических лиц, предпринимателей и компаний в административных, трудовых, корпоративных и миграционных вопросах.",
            "Ее юридическое образование и практический опыт дают глубокое понимание польской правовой и административной системы - важное преимущество там, где клиентам нужна не только процедурная помощь.",
            "Она имеет степень магистра права Силезского университета в Катовице. Ее подход структурирован, точен и направлен на то, чтобы сложные процедуры стали понятнее.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Расскажите, что нужно решить.",
      description:
        "Отправьте основные факты, сроки и документы, которые уже есть. Мы поможем определить самый безопасный следующий шаг.",
      emailLabel: "E-mail",
      openMap: "Открыть карту",
      form: {
        name: "Имя и фамилия *",
        phone: "Телефон",
        email: "E-mail *",
        message: "Сообщение *",
        placeholder:
          "Кратко опишите, что произошло, какой срок действует и какая поддержка нужна.",
        requiredError: "Заполните обязательные поля: имя, e-mail и сообщение.",
        success: "Почтовое приложение должно открыть подготовленное сообщение.",
        send: "Отправить",
        subject: "Запрос на консультацию E&B Partners",
        bodyName: "Имя",
        bodyEmail: "Email",
        bodyPhone: "Телефон",
        bodyPhoneEmpty: "Не указано",
        bodyMessage: "Сообщение",
      },
    },
  },
  es: {
    ...en,
    header: {
      individual: "Cliente individual",
      individualShort: "Individual",
      business: "Cliente empresa",
      businessShort: "Empresa",
      about: "Sobre nosotros",
      contact: "Contactar",
      faq: "FAQ",
      services: "Servicios",
      language: "Elegir idioma",
    },
    hero: {
      eyebrow: "Legalización de residencia y consultoría legal",
      title: "Conectamos a extranjeros con el sistema legal polaco.",
      body:
        "Ayudamos a extranjeros y empresas a resolver cuestiones legales de forma eficiente y conforme a la ley. Explicamos la normativa con claridad, actuamos como puente con las autoridades locales y, sobre todo, te damos tranquilidad.",
      selectPath: "Elige tu camino",
      meetTeam: "Conoce al equipo",
      teamEyebrow: "Equipo E&B Partners",
      coFounder: "Co-Founder",
    },
    process: {
      eyebrow: "Elige tu camino",
      title: "Apoyo adaptado a tu situación",
      selectedPath: "Camino elegido",
      servicesCta: "Servicios",
      faqCta: "Ver FAQ",
      audienceTitles: {
        individual: "Cliente individual",
        business: "Cliente empresa",
      },
      groups: {
        individual: {
          key: "individual",
          title: "Cliente individual",
          headline: "Para extranjeros que necesitan orientación legal clara en Polonia.",
          description:
            "Analizamos tu situación, explicamos tus opciones y te ayudamos a avanzar por los procedimientos polacos con mayor seguridad.",
          points: [
            {
              title: "Derechos laborales",
              lead: "Contratos, trato injusto y conflictos laborales.",
              description: "Te ayudamos a entender tus derechos en el trabajo y cómo protegerlos.",
            },
            {
              title: "Inmigración",
              lead: "Desde la primera llegada hasta la estancia a largo plazo.",
              description: "Te guiamos en cada etapa de la vida legal en Polonia.",
            },
            {
              title: "Residencia",
              lead: "Apoyo para estancia corta y larga.",
              description: "Ayudamos a obtener y mantener tu derecho legal de estancia.",
            },
            {
              title: "Administración",
              lead: "Te ayudamos a tratar con una institución pública.",
              description: "Desde documentos hasta seguimiento, hacemos el proceso más claro.",
            },
          ],
        },
        business: {
          key: "business",
          title: "Cliente empresa",
          headline: "Para empresas que contratan o reubican trabajadores extranjeros.",
          description:
            "Ayudamos a los equipos a gestionar casos migratorios de forma repetible, eficiente y conforme a la ley.",
          points: [
            {
              title: "Empleados extranjeros",
              lead: "Apoyo para candidatos y empleados.",
              description: "Soporte organizado para talento internacional.",
            },
            {
              title: "Revisión documental",
              lead: "Documentos del empleador revisados a tiempo.",
              description: "Detectamos faltas y riesgos antes de que causen retrasos.",
            },
            {
              title: "Casos recurrentes",
              lead: "Para volumen mensual regular.",
              description: "Cooperación previsible en procesos migratorios repetidos.",
            },
            {
              title: "Compliance",
              lead: "Proceso ordenado y menor riesgo.",
              description: "GDPR, protección de datos en la UE y calidad documental.",
            },
          ],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      groups: {
        individual: {
          items: [
            {
              question: "No sé por dónde empezar con la legalización de residencia. ¿Qué debo hacer?",
              answer:
                "Empieza con una revisión clara de tu estatus actual, plazos, finalidad de estancia y documentos. Te ayudamos a elegir el camino adecuado y los primeros pasos.",
            },
            {
              question: "Mi estancia legal en Polonia está a punto de vencer. ¿Aún puedo hacer algo?",
              answer:
                "El tiempo es importante, pero según la situación pueden existir opciones legales. Evaluamos el riesgo, explicamos los pasos urgentes y ayudamos a actuar antes del plazo.",
            },
            {
              question: "Mi empleador quiere contratarme. ¿Qué documentos debe preparar?",
              answer:
                "Podemos revisar los documentos del empleador, identificar información faltante y explicar qué suele necesitarse para trabajo y residencia legales.",
            },
            {
              question: "Recibí una carta de una oficina. ¿Pueden ayudarme a entenderla?",
              answer:
                "Sí. Explicamos qué significa la carta, qué plazo aplica y qué respuesta o documentos pueden ser necesarios.",
            },
            {
              question: "Firmé mi contrato de trabajo solo en polaco. ¿Es válido?",
              answer:
                "Por lo general, no debería ser el único documento entendido por el trabajador extranjero. El contrato debe estar por escrito y en un idioma que el trabajador entienda; un contrato bilingüe polaco-extranjero suele evitar una traducción jurada separada.",
            },
            {
              question: "¿Ayudan con denegaciones o apelaciones?",
              answer:
                "Sí. Analizamos la decisión, explicamos el motivo de la denegación y ayudamos a preparar el siguiente paso legal, incluida una apelación si procede.",
            },
            {
              question: "Tengo umowa o pracę, pero mi empleador no me deja tomar vacaciones pagadas. ¿Es legal?",
              answer:
                "No. Según el Código Laboral polaco, el trabajador tiene derecho a 20 o 26 días de vacaciones pagadas, según la antigüedad. Este derecho está garantizado por ley y no puede renunciarse.",
            },
            {
              question: "¿Cuál es el preaviso si me despiden o quiero renunciar?",
              answer:
                "Depende de la antigüedad con el empleador: 2 semanas si trabajaste menos de 6 meses, 1 mes entre 6 meses y 3 años, y 3 meses después de 3 años. El plazo mensual normalmente empieza el primer día del mes siguiente.",
            },
            {
              question: "¿Qué tipos de contratos laborales existen en Polonia y cómo afectan mis derechos?",
              answer:
                "Los principales son contrato de prueba, contrato de duración determinada y contrato indefinido. Se diferencian por estabilidad, duración y reglas de terminación; el indefinido suele ofrecer la mayor protección.",
            },
          ],
          disclaimer:
            "Esta información es general y no constituye asesoramiento legal. Cada situación laboral es diferente; contacta con E&B Partners para una consulta específica.",
        },
        business: {
          items: [
            {
              question: "¿Puede E&B Partners apoyar casos mensuales recurrentes?",
              answer:
                "Sí. Para empresas con volumen regular podemos definir un modelo de cooperación continua adaptado al número de casos y al ritmo de la organización.",
            },
            {
              question: "¿Qué modelos de cooperación hay para empresas?",
              answer:
                "Podemos trabajar por tarifa por cliente, suscripción o retainer. La opción correcta depende de si los casos son ocasionales o recurrentes.",
            },
            {
              question: "¿Revisan documentos del empleador antes de presentarlos?",
              answer:
                "Sí. Revisamos documentos para trabajo y residencia legales, detectamos faltas y ayudamos a reducir retrasos.",
            },
            {
              question: "¿Pueden auditar nuestro proceso de contratación o legalización?",
              answer:
                "Sí. Revisamos procesos, documentos y riesgos antes de contratar extranjeros o al mejorar el workflow existente.",
            },
            {
              question: "¿Apoyan a candidatos y empleados actuales?",
              answer:
                "Sí. Apoyamos candidatos extranjeros, onboarding y asuntos actuales de legalización de trabajo o residencia.",
            },
            {
              question: "¿Cómo gestionan GDPR y protección de datos en la UE?",
              answer:
                "Organizamos flujos documentales con atención a compliance, GDPR y protección de datos en la UE, especialmente con datos personales sensibles.",
            },
          ],
        },
      },
    },
    services: {
      eyebrow: "Oferta",
      title: "Servicios",
      groups: {
        individual: {
          intro:
            "Apoyo legal enfocado para extranjeros que necesitan claridad, seguridad y próximos pasos prácticos.",
          items: [
            {
              title: "Conoce tus derechos laborales",
              description:
                "Conflictos laborales, trato injusto e incumplimientos contractuales: asesoramos y ayudamos a proteger tus derechos en Polonia.",
            },
            {
              title: "Consultoría migratoria",
              description:
                "Desde la primera llegada hasta la residencia permanente, te guiamos en cada paso de vivir legalmente en Polonia.",
            },
            {
              title: "Legalización de residencia",
              description:
                "Ayudamos a obtener y mantener tu derecho legal de estancia en Polonia, a corto o largo plazo.",
            },
            {
              title: "Procedimientos administrativos simples",
              description:
                "Si enfrentas la burocracia polaca, navegamos el proceso contigo: desde la documentación hasta el seguimiento.",
            },
            {
              title: "Análisis de documentos del empleador",
              description:
                "Antes de firmar, leemos los documentos. Verificamos si lo que pide el empleador cumple la ley.",
            },
            {
              title: "Representación ante autoridades",
              description:
                "Cuando necesitas a alguien frente a organismos administrativos, hablamos en tu nombre.",
            },
            {
              title: "Redacción y revisión de contratos",
              description:
                "Ayudamos a redactar y revisar contratos laborales, de alquiler, servicios u otros acuerdos para proteger tus intereses.",
            },
            {
              title: "Protección de derechos humanos",
              description:
                "Tus derechos no terminan en la frontera. Cuando instituciones o personas se exceden, sabemos cómo responder.",
            },
          ],
        },
        business: {
          intro:
            "Si contratas extranjeros regularmente, remites varios casos al mes o necesitas asesoría legal para tu negocio, podemos definir un modelo de cooperación adaptado a tu flujo de trabajo.",
          items: [
            {
              title: "Tarifa por cliente",
              description:
                "Para empresas y agencias que remiten casos de forma irregular o desean liquidar cada caso por separado.",
            },
            {
              title: "Suscripción / retainer",
              description:
                "Para socios con número estable de casos mensuales que necesitan proceso previsible y comunicación prioritaria.",
            },
            {
              title: "Consultas y auditoría documental",
              description:
                "Para empresas que quieren verificar procesos, documentos o riesgos antes de contratar extranjeros.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "Conoce al equipo de E&B Partners",
      description:
        "Combinamos formación jurídica, perspectiva internacional y experiencia práctica para ayudar a extranjeros y empresas a avanzar con confianza por los procedimientos legales y administrativos en Polonia.",
      coFounder: "Co-Founder",
      members: [
        {
          name: "Chido Bennadette Hanyani",
          shortName: "Benna",
          paragraphs: [
            "Chido Bennadette Hanyani, conocida por sus clientes como Benna, es una profesional del derecho con más de 8 años de experiencia internacional en inmigración, derecho corporativo, compliance, laboral, administrativo, contractual, derechos humanos y derecho de la UE.",
            "Haber trabajado en Malasia, Sudáfrica y Polonia le aporta una perspectiva verdaderamente internacional para apoyar a extranjeros y empresas que navegan el sistema legal polaco.",
            "Tiene un LLB Laws por la University of London y un LLM en Derecho Internacional y Europeo por la Universidad de Wrocław.",
          ],
        },
        {
          name: "Ewelina Bojczuk",
          shortName: "Ewelina",
          paragraphs: [
            "Ewelina Bojczuk es graduada en Derecho y consultora legal con más de 8 años de experiencia apoyando a personas, emprendedores y empresas en asuntos administrativos, laborales, corporativos y migratorios.",
            "Su formación jurídica y experiencia práctica le dan una sólida comprensión del sistema legal y administrativo polaco, una ventaja importante cuando los clientes necesitan más que asistencia procedimental.",
            "Tiene un máster en Derecho por la Universidad de Silesia en Katowice. Su enfoque es estructurado, preciso y orientado a hacer comprensibles los procedimientos complejos.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Cuéntanos qué necesitas resolver.",
      description:
        "Envía los hechos esenciales, plazos y documentos que ya tengas. Te ayudaremos a identificar el siguiente paso más seguro.",
      emailLabel: "E-mail",
      openMap: "Abrir mapa",
      form: {
        name: "Nombre y apellidos *",
        phone: "Teléfono",
        email: "E-mail *",
        message: "Mensaje *",
        placeholder:
          "Cuéntanos brevemente qué ocurrió, qué plazo aplica y qué tipo de apoyo necesitas.",
        requiredError: "Completa los campos obligatorios: nombre, e-mail y mensaje.",
        success: "Tu aplicación de correo debería abrir un mensaje preparado.",
        send: "Enviar",
        subject: "Solicitud de consulta E&B Partners",
        bodyName: "Nombre",
        bodyEmail: "Email",
        bodyPhone: "Teléfono",
        bodyPhoneEmpty: "No indicado",
        bodyMessage: "Mensaje",
      },
    },
  },
  sn: {
    ...en,
    header: {
      individual: "Mutengi wega",
      individualShort: "Wega",
      business: "Mutengi webhizinesi",
      businessShort: "Bhizinesi",
      about: "Nezvedu",
      contact: "Taura nesu",
      faq: "FAQ",
      services: "Masevhisi",
      language: "Sarudza mutauro",
    },
    hero: {
      eyebrow: "Residence legalization uye legal consulting",
      title: "Tinobatanidza foreign nationals nePolish legal system.",
      body:
        "Tinobatsira foreigners nemakambani kufamba munyaya dzemutemo zviri efficient uye zviri in compliance with the law. Tinotsanangura mutemo zvakajeka, tobatsira pakutaura nema authorities, uye tinokubatsira kuti uve nerunyararo mupfungwa.",
      selectPath: "Sarudza nzira yako",
      meetTeam: "Sangana nechikwata",
      teamEyebrow: "Chikwata cheE&B Partners",
      coFounder: "Co-Founder",
    },
    process: {
      eyebrow: "Sarudza nzira yako",
      title: "Support yakagadzirirwa situation yako",
      selectedPath: "Nzira yawasarudza",
      servicesCta: "Masevhisi",
      faqCta: "Ona FAQ",
      audienceTitles: {
        individual: "Mutengi wega",
        business: "Mutengi webhizinesi",
      },
      groups: {
        individual: {
          key: "individual",
          title: "Mutengi wega",
          headline: "Kune foreigners vanoda legal guidance yakajeka muPoland.",
          description:
            "Tinoongorora situation yako, totsanangura options dzako uye tobatsira kufamba nemaPolish procedures nechivimbo.",
          points: [
            {
              title: "Kodzero pabasa",
              lead: "Contracts, unfair treatment uye labour disputes.",
              description: "Tinokubatsira kunzwisisa rights dzako pabasa uye kuti ungadzidzivirira sei.",
            },
            {
              title: "Immigration",
              lead: "Kubva pakusvika kwekutanga kusvika long-term stay.",
              description: "Tinokutungamira pama steps ekugara zviri legal muPoland.",
            },
            {
              title: "Residence",
              lead: "Support ye short-term uye long-term stay.",
              description: "Tinobatsira kuwana nekuchengetedza legal right yekugara.",
            },
            {
              title: "Administration",
              lead: "Tinobatsira pakutaura neGovernment institution.",
              description: "Kubva pamapepa kusvika follow-up, tinoita kuti process ijeke.",
            },
          ],
        },
        business: {
          key: "business",
          title: "Mutengi webhizinesi",
          headline: "Kumakambani anohaya kana kurelocater foreign workers.",
          description:
            "Tinobatsira teams kubata immigration cases nenzira inodzokororwa, efficient uye compliant.",
          points: [
            {
              title: "Foreign employees",
              lead: "Support yevacandidates nevashandi.",
              description: "Structured support ye international talent.",
            },
            {
              title: "Document review",
              lead: "Employer documents dzinoongororwa early.",
              description: "Tinoratidza zvinopera kana risks zvisati zvakonzera delay.",
            },
            {
              title: "Ongoing cases",
              lead: "Kana paine cases dzinouya monthly.",
              description: "Cooperation inofungidzirika pama immigration cases anodzokororwa.",
            },
            {
              title: "Compliance",
              lead: "Process yakarongeka, risk yakaderera.",
              description: "GDPR, EU data protection uye documentation quality.",
            },
          ],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Mibvunzo inowanzo bvunzwa",
      groups: {
        individual: {
          items: [
            {
              question: "Handizivi pekutanga ne residence legalization. Ndoita sei?",
              answer:
                "Tanga nekuongorora current status, deadlines, reason yekugara uye documents. Tinobatsira kuona path yakakodzera uye first steps.",
            },
            {
              question: "Legal stay yangu muPoland yava kuda kupera. Pane zvandichiri kuita here?",
              answer:
                "Timing yakakosha, asi pane situations dzinogona kuva nema legal options. Tinoongorora risk, totsanangura urgent steps uye tobatsira kuita before deadline.",
            },
            {
              question: "Employer wangu anoda kundihaya. Ndeapi ma documents aanofanira kugadzira?",
              answer:
                "Tinogona ku review employer-side documents, kuona missing information uye kutsanangura zvinowanzodiwa pa legal work and residence process.",
            },
            {
              question: "Ndakagamuchira letter kubva ku office. Munogona kundibatsira kuinzwisisa here?",
              answer:
                "Hongu. Tinotsanangura meaning ye letter, deadline iripo uye response kana documents dzinogona kudiwa.",
            },
            {
              question: "Ndakasaina employment contract iri muPolish chete - zviri valid here?",
              answer:
                "Kazhinji hazvina kukwana. Contract ye foreign worker inofanira kunge iri written uye mumutauro waanonzwisisa. Kana iri foreign-language-only, sworn translation to Polish inogona kudiwa; bilingual Polish-foreign contract kazhinji haidi separate sworn translation.",
            },
            {
              question: "Munobatsira here kana paine refusal kana appeal?",
              answer:
                "Hongu. Tino analyze decision, totsanangura reason ye refusal uye tobatsira kugadzira next legal step, kusanganisira appeal kana iripo.",
            },
            {
              question: "Ndine umowa o pracę, asi employer haandibvumidzi paid vacation. Zviri legal here?",
              answer:
                "Kwete. Under Polish Labour Code, employee ane right ku paid annual leave: 20 kana 26 days depending on service period. Right iyi inodzivirirwa nemutemo uye employee haagoni kuiramba.",
            },
            {
              question: "Notice period ndeipi kana ndadzingwa kana ndichida resign?",
              answer:
                "Inoenderana nenguva yawakashanda nemployer: 2 weeks kana pasi pe6 months, 1 month kubva 6 months kusvika 3 years, uye 3 months kana 3 years kana kupfuura.",
            },
            {
              question: "Ndeapi employment contracts aripo muPoland uye anobata sei rights dzangu?",
              answer:
                "Main types ndeaya: trial period contract, fixed-term contract uye indefinite contract. Anosiyana pa stability, duration uye termination rules; indefinite contract inowanzopa protection yakasimba.",
            },
          ],
          disclaimer:
            "Information iyi ndeye general nature uye haisi legal advice. Situation yega yega yakasiyana - contact E&B Partners kuti muwane consultation inoenderana nemamiriro enyu.",
        },
        business: {
          items: [
            {
              question: "E&B Partners inogona support regular monthly cases here?",
              answer:
                "Hongu. Kumakambani ane regular case volume, tinogona kutsanangura cooperation model inoenderana nenhamba yecases uye pace yesangano.",
            },
            {
              question: "Ndeapi cooperation models aripo kumakambani?",
              answer:
                "Tinogona kushanda ne per-client fee, subscription kana retainer. Option yakanaka inoenderana nekuti cases dziri occasional here kana monthly recurring.",
            },
            {
              question: "Munoreview employer-side documents before submission here?",
              answer:
                "Hongu. Tinoreview documents dze legal work and residence, toratidza missing elements uye tobatsira kuderedza delays.",
            },
            {
              question: "Munogona audit hiring kana legalization process yedu here?",
              answer:
                "Hongu. Tinogona ku review processes, documents uye risks before hiring foreigners kana pakuvandudza workflow.",
            },
            {
              question: "Munotsigira candidates nevashandi varipo here?",
              answer:
                "Hongu. Tinotsigira foreign candidates, onboarding uye ongoing work kana residence legalization matters.",
            },
            {
              question: "Munobata sei GDPR neEU data protection?",
              answer:
                "Tinoronga document workflows tichitevera compliance, GDPR uye EU data protection principles, kunyanya pa sensitive personal data.",
            },
          ],
        },
      },
    },
    services: {
      eyebrow: "Offer",
      title: "Masevhisi",
      groups: {
        individual: {
          intro:
            "Focused legal support yeforeigners vanoda clarity, safety uye practical next steps.",
          items: [
            {
              title: "Ziva rights dzako pabasa",
              description:
                "Labour disputes, unfair treatment uye contract violations - tinopa advice uye assist mukudzivirira labor rights muPoland.",
            },
            {
              title: "Immigration consulting",
              description:
                "Kubva first arrival kusvika permanent residency, tinokutungamira pa step yega yega yekugara legal muPoland.",
            },
            {
              title: "Residence legalisation",
              description:
                "Tinobatsira secure uye maintain legal right yekugara muPoland, short-term kana long-term.",
            },
            {
              title: "Administrative procedures made simple",
              description:
                "Kana uri kusangana nePolish bureaucracy, tinofamba newe kubva pakufill papers kusvika follow-up.",
            },
            {
              title: "Employer document analysis",
              description:
                "Before you sign anything, tinoverenga documents kuti tione kana zviri kukumbirwa ne employer zviri lawful.",
            },
            {
              title: "Representation before authorities",
              description:
                "Kana uchida munhu anomira newe pamberi pe administrative bodies, tinotaura on your behalf.",
            },
            {
              title: "Contract drafting and reviewing",
              description:
                "Tinobatsira kugadzira neku review employment, lease, service kana other agreements kuti interests dzako dzidzivirirwe.",
            },
            {
              title: "Human rights protection",
              description:
                "Rights dzako hadziperi pa border. Kana institutions kana individuals vakapfuura limits, tinoziva maitiro ekupush back.",
            },
          ],
        },
        business: {
          intro:
            "Kana muchihaya foreigners regularly, muchirefer multiple cases per month kana muchida legal advice for business, tinogona kutsanangura cooperation model inoenderana neworkflow yenyu.",
          items: [
            {
              title: "Per-client fee",
              description:
                "Good option kumakambani nema agencies anoreferrer cases irregularly kana anoda kusettle case yega yega separately.",
            },
            {
              title: "Subscription / retainer",
              description:
                "For partners vane stable number of cases each month uye vanoda predictable process ne priority communication.",
            },
            {
              title: "Consultations and document audit",
              description:
                "For companies anoda ku verify processes, documents kana risks before hiring foreigners.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "Nezvedu",
      title: "Sangana nechikwata cheE&B Partners",
      description:
        "Tinosanganisa legal education, international perspective uye practical experience kuti tibatsire foreign nationals nemabhizinesi kufamba muPolish legal and administrative procedures nechivimbo.",
      coFounder: "Co-Founder",
      members: [
        {
          name: "Chido Bennadette Hanyani",
          shortName: "Benna",
          paragraphs: [
            "Chido Bennadette Hanyani, anozivikanwa neclients saBenna, legal practitioner ane over 8 years international experience mu immigration, corporate, compliance, labour, administrative, contract, human rights uye EU law.",
            "Kushanda kuMalaysia, South Africa nePoland kwakamupa international perspective inoshandiswa kubatsira foreign nationals nemabhizinesi kufamba muPolish legal system.",
            "Ane LLB Laws kubva kuUniversity of London uye LLM in International and European Law kubva kuUniversity of Wroclaw.",
          ],
        },
        {
          name: "Ewelina Bojczuk",
          shortName: "Ewelina",
          paragraphs: [
            "Ewelina Bojczuk law graduate uye legal consultant ane over 8 years experience kubatsira individuals, entrepreneurs nemabhizinesi mu administrative, employment, corporate uye migration-related matters.",
            "Legal education yake ne practical experience zvinomupa strong understanding yePolish legal and administrative system - chinhu chakakosha kana clients vachida more than procedural assistance.",
            "Ane Master's degree in Law kubva kuUniversity of Silesia in Katowice. Approach yake structured, precise uye focused pakuita kuti complex procedures dzive nyore kunzwisisa.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tiudze zvaunoda kugadzirisa.",
      description:
        "Tumira facts dzakakosha, deadline nemadocuments auinawo. Tichakubatsira kuona safest next step.",
      emailLabel: "E-mail",
      openMap: "Vhura map",
      form: {
        name: "Zita nesurname *",
        phone: "Phone",
        email: "E-mail *",
        message: "Message *",
        placeholder:
          "Nyora muchidimbu zvakaitika, deadline iripo uye support yaunoda.",
        requiredError: "Ndapota zadza fields dzinodiwa: zita, e-mail ne message.",
        success: "E-mail app yako inofanira kuvhura message yakagadzirirwa.",
        send: "Send",
        subject: "E&B Partners consultation request",
        bodyName: "Name",
        bodyEmail: "Email",
        bodyPhone: "Phone",
        bodyPhoneEmpty: "Not provided",
        bodyMessage: "Message",
      },
    },
  },
  tr: {
    ...en,
    header: {
      individual: "Bireysel müşteri",
      individualShort: "Bireysel",
      business: "Kurumsal müşteri",
      businessShort: "Kurumsal",
      about: "Hakkımızda",
      contact: "İletişime geç",
      faq: "FAQ",
      services: "Hizmetler",
      language: "Dil seç",
    },
    hero: {
      eyebrow: "Oturum yasallaştırma ve hukuki danışmanlık",
      title: "Yabancı uyruklular ile Polonya hukuk sistemi arasında köprü kuruyoruz.",
      body:
        "Yabancıların ve şirketlerin hukuki konularda verimli ve mevzuata uygun şekilde ilerlemesine yardımcı oluyoruz. Hukuku açıkça anlatıyor, yerel makamlarla aranızda köprü oluyor ve en önemlisi süreci daha sakin yönetmenizi sağlıyoruz.",
      selectPath: "Yolunu seç",
      meetTeam: "Ekibi tanı",
      teamEyebrow: "E&B Partners ekibi",
      coFounder: "Co-Founder",
    },
    process: {
      eyebrow: "Yolunu seç",
      title: "Durumuna göre uyarlanmış destek",
      selectedPath: "Seçilen yol",
      servicesCta: "Hizmetler",
      faqCta: "FAQ'i gör",
      audienceTitles: {
        individual: "Bireysel müşteri",
        business: "Kurumsal müşteri",
      },
      groups: {
        individual: {
          key: "individual",
          title: "Bireysel müşteri",
          headline: "Polonya'da açık hukuki rehberliğe ihtiyaç duyan yabancılar için.",
          description:
            "Durumunuzu inceler, seçeneklerinizi açıklarız ve Polonya'daki prosedürlerde güvenle ilerlemenize yardımcı oluruz.",
          points: [
            {
              title: "İş hakları",
              lead: "Sözleşmeler, haksız muamele ve iş uyuşmazlıkları.",
              description: "İşyerindeki haklarınızı ve bunları nasıl koruyacağınızı anlamanıza yardımcı oluruz.",
            },
            {
              title: "Göç danışmanlığı",
              lead: "İlk gelişten uzun süreli kalışa kadar.",
              description: "Polonya'da yasal yaşama sürecinin her aşamasında size rehberlik ederiz.",
            },
            {
              title: "Oturum",
              lead: "Kısa ve uzun süreli kalış desteği.",
              description: "Yasal kalış hakkınızı almanıza ve sürdürmenize yardımcı oluruz.",
            },
            {
              title: "İdari süreçler",
              lead: "Bir kamu kurumu ile iletişimde size yardımcı oluruz.",
              description: "Evraklardan takibe kadar süreci daha anlaşılır hale getiririz.",
            },
          ],
        },
        business: {
          key: "business",
          title: "Kurumsal müşteri",
          headline: "Yabancı çalışan istihdam eden veya relokasyon yapan şirketler için.",
          description:
            "Ekiplerin göç dosyalarını tekrarlanabilir, verimli ve mevzuata uygun şekilde yönetmesine yardımcı oluruz.",
          points: [
            {
              title: "Yabancı çalışanlar",
              lead: "Adaylar ve çalışanlar için destek.",
              description: "Uluslararası yetenekler için düzenli destek.",
            },
            {
              title: "Belge incelemesi",
              lead: "İşveren belgelerinin erken kontrolü.",
              description: "Eksikleri ve riskleri gecikme yaratmadan önce tespit ederiz.",
            },
            {
              title: "Sürekli dosyalar",
              lead: "Düzenli aylık dosya hacmi için.",
              description: "Tekrarlayan göç süreçleri için öngörülebilir işbirliği.",
            },
            {
              title: "Compliance",
              lead: "Düzenli süreç, daha düşük risk.",
              description: "GDPR, AB veri koruması ve belge kalitesi.",
            },
          ],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Sık sorulan sorular",
      groups: {
        individual: {
          items: [
            {
              question: "Oturum yasallaştırmaya nereden başlayacağımı bilmiyorum. Ne yapmalıyım?",
              answer:
                "Mevcut statünüz, süreler, kalış amacı ve belgeleriniz net şekilde incelenerek başlanmalıdır. Size uygun yolu ve ilk adımları belirlemenize yardımcı oluruz.",
            },
            {
              question: "Polonya'daki yasal kalışım bitmek üzere. Hala bir şey yapılabilir mi?",
              answer:
                "Zamanlama önemlidir, ancak duruma bağlı olarak hala hukuki seçenekler olabilir. Riski değerlendirir, acil adımları açıklar ve süre dolmadan hareket etmenize yardımcı oluruz.",
            },
            {
              question: "İşverenim beni işe almak istiyor. Hangi belgeleri hazırlamalı?",
              answer:
                "İşveren tarafındaki belgeleri inceleyebilir, eksik bilgileri belirleyebilir ve yasal çalışma ve oturum süreçlerinde genellikle ne gerektiğini açıklayabiliriz.",
            },
            {
              question: "Bir kurumdan mektup aldım. Anlamama yardımcı olabilir misiniz?",
              answer:
                "Evet. Mektubun ne anlama geldiğini, hangi sürenin geçerli olduğunu ve hangi cevap veya belgelerin gerekebileceğini açıklarız.",
            },
            {
              question: "İş sözleşmemi yalnızca Lehçe imzaladım - bu geçerli mi?",
              answer:
                "Genellikle tek başına yeterli olmamalıdır. Yabancı çalışanla yapılan sözleşme yazılı ve çalışanın anladığı dilde olmalıdır. Sadece yabancı dildeki sözleşme için Lehçe yeminli tercüme gerekebilir; iki dilli Lehçe-yabancı dil sözleşmesi genellikle ayrı tercüme gerektirmez.",
            },
            {
              question: "Ret kararları veya itirazlarda yardımcı oluyor musunuz?",
              answer:
                "Evet. Kararı analiz eder, ret nedenini açıklar ve mümkünse itiraz dahil bir sonraki hukuki adımı hazırlamanıza yardımcı oluruz.",
            },
            {
              question: "Umowa o pracę sözleşmem var, fakat işverenim ücretli izin kullandırmıyor. Bu yasal mı?",
              answer:
                "Hayır. Polonya İş Kanunu'na göre çalışan, hizmet süresine bağlı olarak 20 veya 26 gün ücretli yıllık izne hak kazanır. Bu hak kanunla güvence altındadır ve çalışan bundan feragat edemez.",
            },
            {
              question: "İşten çıkarılırsam veya istifa etmek istersem ihbar süresi nedir?",
              answer:
                "İhbar süresi işverendeki çalışma süresine bağlıdır: 6 aydan az çalışmada 2 hafta, 6 ay ile 3 yıl arasında 1 ay, 3 yıl ve üzeri çalışmada 3 ay. Ay olarak hesaplanan süre genellikle sonraki ayın ilk günü başlar.",
            },
            {
              question: "Polonya'da hangi iş sözleşmesi türleri vardır ve haklarımı nasıl etkiler?",
              answer:
                "Başlıca türler deneme süresi sözleşmesi, belirli süreli sözleşme ve belirsiz süreli sözleşmedir. Süre, iş güvencesi ve fesih kuralları bakımından farklılık gösterir; belirsiz süreli sözleşme genellikle en güçlü korumayı sağlar.",
            },
          ],
          disclaimer:
            "Bu bilgiler genel niteliktedir ve hukuki danışmanlık değildir. Her çalışma durumu farklıdır; kendi koşullarınıza özel danışmanlık için E&B Partners ile iletişime geçin.",
        },
        business: {
          items: [
            {
              question: "E&B Partners düzenli aylık dosyaları destekleyebilir mi?",
              answer:
                "Evet. Düzenli dosya hacmi olan şirketler için dosya sayısına ve kurumun çalışma hızına uygun sürekli işbirliği modeli belirleyebiliriz.",
            },
            {
              question: "Şirketler için hangi işbirliği modelleri var?",
              answer:
                "Müşteri başına ücret, abonelik veya retainer modeliyle çalışabiliriz. Doğru seçenek dosyaların ara sıra mı yoksa her ay düzenli mi geldiğine bağlıdır.",
            },
            {
              question: "İşveren belgelerini başvurudan önce inceliyor musunuz?",
              answer:
                "Evet. Yasal çalışma ve oturum için gereken belgeleri inceler, eksikleri tespit eder ve gecikmeleri azaltmaya yardımcı oluruz.",
            },
            {
              question: "İşe alım veya legalizasyon sürecimizi denetleyebilir misiniz?",
              answer:
                "Evet. Yabancı çalışanları işe almadan önce veya mevcut workflow'u iyileştirirken süreçleri, belgeleri ve riskleri inceleyebiliriz.",
            },
            {
              question: "Adayları ve mevcut çalışanları destekliyor musunuz?",
              answer:
                "Evet. Yabancı adayları, onboarding süreçlerini ve mevcut çalışanların çalışma veya oturum legalizasyonu konularını destekleyebiliriz.",
            },
            {
              question: "GDPR ve AB veri korumasını nasıl ele alıyorsunuz?",
              answer:
                "Belge akışlarını compliance, GDPR ve AB veri koruma ilkelerine dikkat ederek düzenleriz; özellikle kişisel verilerle çalışırken bu önemlidir.",
            },
          ],
        },
      },
    },
    services: {
      eyebrow: "Teklif",
      title: "Hizmetler",
      groups: {
        individual: {
          intro:
            "Açıklık, güvenlik ve pratik sonraki adımlara ihtiyaç duyan yabancılar için odaklı hukuki destek.",
          items: [
            {
              title: "İşyerindeki haklarınızı bilin",
              description:
                "İş uyuşmazlıkları, haksız muamele ve sözleşme ihlalleri - Polonya'daki iş haklarınızı korumak için danışmanlık ve destek sağlarız.",
            },
            {
              title: "Göç danışmanlığı",
              description:
                "İlk gelişten kalıcı oturuma kadar Polonya'da yasal yaşamanın her adımında size rehberlik ederiz.",
            },
            {
              title: "Oturum legalizasyonu",
              description:
                "Kısa veya uzun süreli olsun, Polonya'da yasal kalış hakkınızı almanıza ve sürdürmenize yardımcı oluruz.",
            },
            {
              title: "İdari prosedürleri sadeleştirme",
              description:
                "Polonya bürokrasisiyle karşı karşıyaysanız, evraklardan takibe kadar süreçte yanınızda oluruz.",
            },
            {
              title: "İşveren belge analizi",
              description:
                "Herhangi bir şeyi imzalamadan önce belgeleri okuruz. İşverenin talep ettiği şeylerin hukuka uygun olup olmadığını kontrol ederiz.",
            },
            {
              title: "Yetkili makamlar önünde temsil",
              description:
                "İdari kurumlar karşısında yanınızda duracak birine ihtiyaç duyduğunuzda sizin adınıza konuşuruz.",
            },
            {
              title: "Sözleşme hazırlama ve inceleme",
              description:
                "İş, kira, hizmet veya başka sözleşmelerde haklarınızı korumak için metin hazırlama ve inceleme desteği veririz.",
            },
            {
              title: "İnsan haklarının korunması",
              description:
                "Haklarınız sınırda bitmez. Kurumlar veya kişiler sınırı aştığında nasıl karşılık verileceğini biliriz.",
            },
          ],
        },
        business: {
          intro:
            "Yabancı çalışanları düzenli işe alıyorsanız, ayda birden fazla dosya yönlendiriyorsanız veya işletmeniz için hukuki danışmanlığa ihtiyacınız varsa, workflow'unuza uygun işbirliği modeli belirleyebiliriz.",
          items: [
            {
              title: "Müşteri başına ücret",
              description:
                "Dosyaları düzensiz yönlendiren veya her dosyayı ayrı kapatmak isteyen şirketler ve ajanslar için uygun seçenek.",
            },
            {
              title: "Abonelik / retainer",
              description:
                "Her ay sabit sayıda dosyası olan ve öngörülebilir süreç ile öncelikli iletişim isteyen partnerler için.",
            },
            {
              title: "Danışmanlık ve belge denetimi",
              description:
                "Yabancı çalışan istihdam etmeden önce süreçleri, belgeleri veya riskleri doğrulamak isteyen şirketler için.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "E&B Partners ekibiyle tanışın",
      description:
        "Hukuk eğitimi, uluslararası bakış açısı ve pratik deneyimi birleştirerek yabancı uyrukluların ve işletmelerin Polonya'daki hukuki ve idari süreçlerde güvenle ilerlemesine yardımcı oluyoruz.",
      coFounder: "Co-Founder",
      members: [
        {
          name: "Chido Bennadette Hanyani",
          shortName: "Benna",
          paragraphs: [
            "Müşterileri tarafından Benna olarak tanınan Chido Bennadette Hanyani, göç, kurumsal hukuk, compliance, iş hukuku, idare hukuku, sözleşmeler, insan hakları ve AB hukuku alanlarında 8 yılı aşkın uluslararası deneyime sahip bir hukuk uygulayıcısıdır.",
            "Malezya, Güney Afrika ve Polonya'daki deneyimi, Polonya hukuk sistemi içinde ilerleyen yabancılar ve işletmeler için gerçek anlamda uluslararası bir perspektif sağlar.",
            "University of London'dan LLB Laws ve Wrocław Üniversitesi'nden Uluslararası ve Avrupa Hukuku alanında LLM derecesine sahiptir.",
          ],
        },
        {
          name: "Ewelina Bojczuk",
          shortName: "Ewelina",
          paragraphs: [
            "Ewelina Bojczuk, idari, iş, kurumsal ve göçle ilgili konularda bireyleri, girişimcileri ve şirketleri destekleme konusunda 8 yılı aşkın deneyime sahip bir hukuk mezunu ve hukuki danışmandır.",
            "Hukuk eğitimi ve pratik deneyimi, Polonya hukuk ve idare sistemini güçlü şekilde anlamasını sağlar; bu, müşterilerin yalnızca prosedürel yardımdan fazlasına ihtiyaç duyduğu alanlarda önemli bir avantajdır.",
            "Katowice'deki Silezya Üniversitesi'nden Hukuk alanında yüksek lisans derecesine sahiptir. Yaklaşımı yapılandırılmış, kesin ve karmaşık prosedürleri daha anlaşılır hale getirmeye odaklıdır.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Çözmeniz gereken konuyu bize anlatın.",
      description:
        "Elinizdeki temel bilgileri, son tarihleri ve belgeleri gönderin. En güvenli sonraki adımı belirlemenize yardımcı olacağız.",
      emailLabel: "E-mail",
      openMap: "Haritayı aç",
      form: {
        name: "Ad ve soyad *",
        phone: "Telefon",
        email: "E-mail *",
        message: "Mesaj *",
        placeholder:
          "Ne olduğunu, hangi son tarihin geçerli olduğunu ve ne tür desteğe ihtiyacınız olduğunu kısaca yazın.",
        requiredError: "Lütfen zorunlu alanları doldurun: ad, e-mail ve mesaj.",
        success: "E-posta uygulamanız hazırlanmış bir mesajla açılmalıdır.",
        send: "Gönder",
        subject: "E&B Partners danışmanlık talebi",
        bodyName: "Ad",
        bodyEmail: "Email",
        bodyPhone: "Telefon",
        bodyPhoneEmpty: "Belirtilmedi",
        bodyMessage: "Mesaj",
      },
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale] ?? siteCopy[defaultLocale];
}

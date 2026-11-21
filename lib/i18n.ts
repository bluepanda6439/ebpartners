import { faqGroups, processGroups, serviceGroups, type AudienceKey, } from "@/lib/site-data";
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
        groups: Record<AudienceKey, {
            key: AudienceKey;
            title: string;
            headline: string;
            description: string;
            points: ReadonlyArray<{
                title: string;
                lead: string;
                description: string;
            }>;
        }>;
    };
    faq: {
        eyebrow: string;
        title: string;
        groups: Record<AudienceKey, {
            items: Array<{
                question: string;
                answer: string;
            }>;
            disclaimer?: string;
        }>;
    };
    services: {
        eyebrow: string;
        title: string;
        groups: Record<AudienceKey, {
            intro: string;
            items: ReadonlyArray<{
                title: string;
                description: string;
            }>;
        }>;
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
        "name": "Chido Bennadette Hanyani",
        "shortName": "Benna",
        "paragraphs": [
            "Benna brings over 8 years of international professional experience, including work in Malaysia, South Africa and Poland.",
            "She holds an LLB Laws degree from the University of London and an LLM in International and European Law from the University of Wroclaw."
        ]
    },
    {
        "name": "Ewelina Bojczuk",
        "shortName": "Ewelina",
        "paragraphs": [
            "Ewelina has over 9 years of experience working with individuals and businesses. At E&B Partners, she helps organize documents and administrative paperwork.",
            "She holds a Master's degree in Law from the University of Silesia in Katowice."
        ]
    }
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
        eyebrow: "Residence paperwork support",
        title: "Helping foreign nationals and businesses handle paperwork in Poland.",
        body: "We collect documents, fill in forms using the information you provide, and contact offices about organizational matters.",
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
        description: "We combine international experience with an organized approach to documents and administrative paperwork.",
        coFounder: "Co-Founder",
        members: englishTeamMembers,
    },
    contact: {
        eyebrow: "Contact",
        title: "Tell us what you need to solve.",
        description: "Tell us which formality you need help with, the deadline stated by the office and which documents you already have.",
        emailLabel: "E-mail",
        openMap: "Open map",
        form: {
            name: "Name and surname *",
            phone: "Phone",
            email: "E-mail *",
            message: "Message *",
            placeholder: "Tell us briefly what happened, what deadline applies, and what kind of support you need.",
            requiredError: "Please complete the required fields: name, e-mail and message.",
            success: "Your e-mail app should open with a prepared message.",
            send: "Send",
            subject: "E&B Partners paperwork support enquiry",
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
            eyebrow: "Formalności pobytowe i dokumentacja zatrudnienia",
            title: "Pomagamy cudzoziemcom i firmom uporządkować formalności w Polsce.",
            body: "Kompletujemy dokumentację związaną z pobytem i pracą cudzoziemców w Polsce, przygotowujemy ją do złożenia oraz zapewniamy kontakt z urzędami w sprawach organizacyjnych.",
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
                "individual": {
                    "key": "individual",
                    "title": "Klient indywidualny",
                    "headline": "Dla cudzoziemców potrzebujących wsparcia w formalnościach pobytowych i związanych z pracą.",
                    "description": "Zapewniamy obsługę administracyjną dokumentacji związanej z legalnym pobytem i pracą cudzoziemców w Polsce.",
                    "points": [
                        {
                            "title": "Dokumentacja pobytowa",
                            "lead": "",
                            "description": "Kompletujemy dokumentację do wniosków o udzielenie zezwolenia na pobyt czasowy, pobyt stały oraz pobyt rezydenta długoterminowego UE, zgodnie z wykazem właściwego urzędu."
                        },
                        {
                            "title": "Dokumentacja dotycząca pracy cudzoziemca",
                            "lead": "",
                            "description": "Pomagamy zgromadzić załączniki dotyczące zatrudnienia do spraw pobytowych i związanych z zezwoleniem na pracę. Porządkujemy materiały przekazane przez klienta i pracodawcę."
                        },
                        {
                            "title": "Uzupełnianie dokumentacji na wezwanie urzędu",
                            "lead": "",
                            "description": "Pomagamy skompletować brakujące załączniki wskazane w wezwaniu i przygotować je do przekazania w terminie podanym przez urząd."
                        },
                        {
                            "title": "Kontakt z urzędami i organizacja wizyt",
                            "lead": "",
                            "description": "Kontaktujemy się z urzędami w sprawach organizacyjnych, dotyczących dokumentacji oraz statusu wniosku. Pomagamy również w umawianiu wizyt, z uwzględnieniem wymaganych zgód i upoważnień."
                        }
                    ]
                },
                "business": {
                    "key": "business",
                    "title": "Klient biznesowy",
                    "headline": "Dla pracodawców zatrudniających cudzoziemców i organizujących ich dokumentację.",
                    "description": "Wspieramy pracodawców w przygotowaniu i organizacji dokumentacji związanej z legalnym zatrudnieniem oraz pobytem cudzoziemców w Polsce.",
                    "points": [
                        {
                            "title": "Dokumentacja zatrudnienia cudzoziemców",
                            "lead": "",
                            "description": "Kompletujemy dokumentację do wniosków o zezwolenie na pracę oraz innych zgłoszeń związanych z zatrudnieniem cudzoziemców, według wymagań właściwego urzędu."
                        },
                        {
                            "title": "Załączniki pracodawcy do spraw pobytowych",
                            "lead": "",
                            "description": "Na podstawie danych przekazanych przez firmę przygotowujemy załączniki dotyczące zatrudnienia, wymagane w sprawach pobytowych pracowników."
                        },
                        {
                            "title": "Koordynacja obiegu dokumentów",
                            "lead": "",
                            "description": "Porządkujemy materiały przekazane przez pracodawcę i pracownika. Zestawiamy je z wykazem urzędu i wskazujemy pozycje wymagające uzupełnienia."
                        },
                        {
                            "title": "Stała obsługa administracyjna",
                            "lead": "",
                            "description": "Zapewniamy bieżącą pomoc w przygotowaniu dokumentacji pobytowej i związanej z zatrudnieniem cudzoziemców. Zakres współpracy ustalamy odpowiednio do liczby pracowników i organizacji pracy firmy."
                        }
                    ]
                }
            },
        },
        faq: {
            eyebrow: "FAQ",
            title: "Najczęściej zadawane pytania",
            groups: {
                "individual": {
                    "items": [
                        {
                            "question": "Jakie sprawy obejmuje Wasza pomoc?",
                            "answer": "Pomagamy przygotować dokumentację związaną z pobytem i pracą cudzoziemców w Polsce. Kompletujemy załączniki, przygotowujemy wnioski na podstawie przekazanych danych oraz kontaktujemy się z urzędami w sprawach organizacyjnych."
                        },
                        {
                            "question": "Czy pomagacie uzupełnić dokumenty na wezwanie urzędu?",
                            "answer": "Tak. Na podstawie otrzymanego wezwania pomagamy zgromadzić wskazane załączniki i przygotować je do przekazania w terminie określonym przez urząd."
                        },
                        {
                            "question": "Jak rozpocząć współpracę?",
                            "answer": "Przekaż nam informację o rodzaju sprawy, wykaz wymaganych załączników lub wezwanie urzędu oraz posiadaną dokumentację. Ustalimy zakres pomocy administracyjnej."
                        }
                    ]
                },
                "business": {
                    "items": [
                        {
                            "question": "Czy możecie pomóc przy dokumentacji do zezwolenia na pracę?",
                            "answer": "Tak. Na podstawie danych przekazanych przez pracodawcę przygotowujemy dokumentację do złożenia zgodnie z wykazem właściwego urzędu."
                        },
                        {
                            "question": "Czy kompletujecie załączniki pracodawcy do spraw pobytowych?",
                            "answer": "Tak. Pomagamy przygotować załączniki dotyczące zatrudnienia oraz uporządkować materiały przekazane przez firmę i pracownika."
                        },
                        {
                            "question": "Czy oferujecie stałą współpracę z firmami?",
                            "answer": "Tak. Możemy ustalić stały zakres pomocy administracyjnej przy dokumentacji pobytowej i związanej z zatrudnieniem, dostosowany do liczby pracowników i potrzeb organizacyjnych firmy."
                        }
                    ]
                }
            },
        },
        services: {
            eyebrow: "Oferta",
            title: "Zakres usług",
            groups: {
                "individual": {
                    "intro": "Zapewniamy obsługę administracyjną dokumentacji związanej z legalnym pobytem i pracą cudzoziemców w Polsce.",
                    "items": [
                        {
                            "title": "Dokumentacja pobytowa",
                            "description": "Kompletujemy dokumentację do wniosków o udzielenie zezwolenia na pobyt czasowy, pobyt stały oraz pobyt rezydenta długoterminowego UE, zgodnie z wykazem właściwego urzędu."
                        },
                        {
                            "title": "Dokumentacja dotycząca pracy cudzoziemca",
                            "description": "Pomagamy zgromadzić załączniki dotyczące zatrudnienia do spraw pobytowych i związanych z zezwoleniem na pracę. Porządkujemy materiały przekazane przez klienta i pracodawcę."
                        },
                        {
                            "title": "Przygotowanie dokumentów do złożenia",
                            "description": "Na podstawie przekazanych danych przygotowujemy wnioski i załączniki do podpisu oraz złożenia we właściwym urzędzie."
                        },
                        {
                            "title": "Uzupełnianie dokumentacji na wezwanie urzędu",
                            "description": "Pomagamy skompletować brakujące załączniki wskazane w wezwaniu i przygotować je do przekazania w terminie podanym przez urząd."
                        },
                        {
                            "title": "Dokumenty potwierdzające okoliczności pobytu",
                            "description": "Porządkujemy załączniki dotyczące m.in. miejsca zamieszkania, ubezpieczenia, zatrudnienia, studiów lub więzi rodzinnych, stosownie do wykazu wymaganego w danej sprawie."
                        },
                        {
                            "title": "Kontakt z urzędami i organizacja wizyt",
                            "description": "Kontaktujemy się z urzędami w sprawach organizacyjnych, dotyczących dokumentacji oraz statusu wniosku. Pomagamy również w umawianiu wizyt, z uwzględnieniem wymaganych zgód i upoważnień."
                        }
                    ]
                },
                "business": {
                    "intro": "Wspieramy pracodawców w przygotowaniu i organizacji dokumentacji związanej z legalnym zatrudnieniem oraz pobytem cudzoziemców w Polsce.",
                    "items": [
                        {
                            "title": "Dokumentacja zatrudnienia cudzoziemców",
                            "description": "Kompletujemy dokumentację do wniosków o zezwolenie na pracę oraz innych zgłoszeń związanych z zatrudnieniem cudzoziemców, według wymagań właściwego urzędu."
                        },
                        {
                            "title": "Załączniki pracodawcy do spraw pobytowych",
                            "description": "Na podstawie danych przekazanych przez firmę przygotowujemy załączniki dotyczące zatrudnienia, wymagane w sprawach pobytowych pracowników."
                        },
                        {
                            "title": "Koordynacja obiegu dokumentów",
                            "description": "Porządkujemy materiały przekazane przez pracodawcę i pracownika. Zestawiamy je z wykazem urzędu i wskazujemy pozycje wymagające uzupełnienia."
                        },
                        {
                            "title": "Uzupełnienia dokumentacji i kontakt z urzędami",
                            "description": "Kompletujemy załączniki wskazane w wezwaniach oraz kontaktujemy się w sprawie dokumentów, wizyt i statusu złożonych wniosków."
                        },
                        {
                            "title": "Stała obsługa administracyjna",
                            "description": "Zapewniamy bieżącą pomoc w przygotowaniu dokumentacji pobytowej i związanej z zatrudnieniem cudzoziemców. Zakres współpracy ustalamy odpowiednio do liczby pracowników i organizacji pracy firmy."
                        }
                    ]
                }
            },
        },
        about: {
            eyebrow: "O nas",
            title: "Poznaj zespół E&B Partners",
            description: "Łączymy międzynarodowe doświadczenie z uporządkowanym podejściem do dokumentów i formalności administracyjnych.",
            coFounder: "Co-Founder",
            members: [
                {
                    "name": "Chido Bennadette Hanyani",
                    "shortName": "Benna",
                    "paragraphs": [
                        "Benna ma ponad 8 lat międzynarodowego doświadczenia zawodowego, zdobytego między innymi w Malezji, Republice Południowej Afryki i Polsce.",
                        "Ukończyła studia prawnicze (LLB) na Uniwersytecie Londyńskim oraz prawo międzynarodowe i europejskie (LLM) na Uniwersytecie Wrocławskim."
                    ]
                },
                {
                    "name": "Ewelina Bojczuk",
                    "shortName": "Ewelina",
                    "paragraphs": [
                        "Ewelina ma ponad 9 lat doświadczenia we współpracy z osobami indywidualnymi i firmami. W E&B Partners pomaga uporządkować dokumenty i formalności administracyjne.",
                        "Ukończyła studia magisterskie na kierunku Nauki Prawne na Uniwersytecie Śląskim w Katowicach."
                    ]
                }
            ],
        },
        contact: {
            eyebrow: "Kontakt",
            title: "Powiedz nam, co trzeba rozwiązać.",
            description: "Prześlij informację o formalności, terminie wskazanym przez urząd i dokumentach, które już masz.",
            emailLabel: "E-mail",
            openMap: "Otwórz mapę",
            form: {
                name: "Imię i nazwisko *",
                phone: "Telefon",
                email: "E-mail *",
                message: "Wiadomość *",
                placeholder: "Napisz krótko, co się wydarzyło, jaki termin obowiązuje i jakiego wsparcia potrzebujesz.",
                requiredError: "Uzupełnij wymagane pola: imię, e-mail i wiadomość.",
                success: "Aplikacja pocztowa powinna otworzyć gotową wiadomość.",
                send: "Wyślij",
                subject: "Zapytanie o pomoc w formalnościach E&B Partners",
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
            eyebrow: "Допомога з документами для перебування",
            title: "Допомагаємо іноземцям і компаніям упорядкувати документи в Польщі.",
            body: "Комплектуємо документи, заповнюємо формуляри на основі наданих даних і контактуємо з установами з організаційних питань.",
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
                "individual": {
                    "key": "individual",
                    "title": "Індивідуальний клієнт",
                    "headline": "Для іноземців, яким потрібна допомога з документами та формулярами.",
                    "description": "Комплектуємо документи, заповнюємо формуляри на основі наданих даних і контактуємо з установами з організаційних питань.",
                    "points": [
                        {
                            "title": "Комплектування документів",
                            "lead": "",
                            "description": "Упорядковуємо надані документи й комплектуємо їх за переліком установи."
                        },
                        {
                            "title": "Заповнення формулярів",
                            "lead": "",
                            "description": "Заповнюємо формуляри даними клієнта та готуємо їх до підпису."
                        },
                        {
                            "title": "Контакт з установами",
                            "lead": "",
                            "description": "Контактуємо з установами щодо документів, організації візитів і стану поданих заяв."
                        }
                    ]
                },
                "business": {
                    "key": "business",
                    "title": "Бізнес-клієнт",
                    "headline": "Для компаній, яким потрібна допомога з документами іноземних працівників.",
                    "description": "Комплектуємо документи, заповнюємо формуляри на основі наданих даних і контактуємо з установами з організаційних питань.",
                    "points": [
                        {
                            "title": "Комплектування документів",
                            "lead": "",
                            "description": "Упорядковуємо надані документи й комплектуємо їх за переліком установи."
                        },
                        {
                            "title": "Заповнення формулярів",
                            "lead": "",
                            "description": "Заповнюємо формуляри даними клієнта та готуємо їх до підпису."
                        },
                        {
                            "title": "Контакт з установами",
                            "lead": "",
                            "description": "Контактуємо з установами щодо документів, організації візитів і стану поданих заяв."
                        }
                    ]
                }
            },
        },
        faq: {
            eyebrow: "FAQ",
            title: "Поширені запитання",
            groups: {
                "individual": {
                    "items": [
                        {
                            "question": "З чим ви можете допомогти?",
                            "answer": "Допомагаємо комплектувати документи, заповнювати формуляри та контактувати з установами. Повідомте, якої формальності стосується ваша справа."
                        },
                        {
                            "question": "Які документи підготувати?",
                            "answer": "Надішліть перелік установи та наявні документи. Допоможемо їх упорядкувати й визначити відсутні позиції з переліку."
                        },
                        {
                            "question": "Чи можете ви зв’язатися з установою?",
                            "answer": "Так. Контактуємо з організаційних питань, щодо документів і стану заяви. Перед контактом узгоджуємо необхідну згоду або уповноваження."
                        }
                    ]
                },
                "business": {
                    "items": [
                        {
                            "question": "Чи підтримуєте компанії регулярно?",
                            "answer": "Так. Обсяг і частоту допомоги з документами, формулярами та контактом з установами узгоджуємо з кожною компанією окремо."
                        },
                        {
                            "question": "Які документи підготувати?",
                            "answer": "Надішліть перелік установи та наявні документи. Допоможемо їх упорядкувати й визначити відсутні позиції з переліку."
                        },
                        {
                            "question": "Чи можете ви зв’язатися з установою?",
                            "answer": "Так. Контактуємо з організаційних питань, щодо документів і стану заяви. Перед контактом узгоджуємо необхідну згоду або уповноваження."
                        }
                    ]
                }
            },
        },
        services: {
            eyebrow: "Пропозиція",
            title: "Послуги",
            groups: {
                "individual": {
                    "intro": "Комплектуємо документи, заповнюємо формуляри на основі наданих даних і контактуємо з установами з організаційних питань.",
                    "items": [
                        {
                            "title": "Комплектування документів",
                            "description": "Упорядковуємо надані документи й комплектуємо їх за переліком установи."
                        },
                        {
                            "title": "Заповнення формулярів",
                            "description": "Заповнюємо формуляри даними клієнта та готуємо їх до підпису."
                        },
                        {
                            "title": "Контакт з установами",
                            "description": "Контактуємо з установами щодо документів, організації візитів і стану поданих заяв."
                        }
                    ]
                },
                "business": {
                    "intro": "Комплектуємо документи, заповнюємо формуляри на основі наданих даних і контактуємо з установами з організаційних питань.",
                    "items": [
                        {
                            "title": "Комплектування документів",
                            "description": "Упорядковуємо надані документи й комплектуємо їх за переліком установи."
                        },
                        {
                            "title": "Заповнення формулярів",
                            "description": "Заповнюємо формуляри даними клієнта та готуємо їх до підпису."
                        },
                        {
                            "title": "Контакт з установами",
                            "description": "Контактуємо з установами щодо документів, організації візитів і стану поданих заяв."
                        }
                    ]
                }
            },
        },
        about: {
            eyebrow: "Про нас",
            title: "Познайомтеся з командою E&B Partners",
            description: "Поєднуємо міжнародний досвід з упорядкованим підходом до документів та адміністративних формальностей.",
            coFounder: "Co-Founder",
            members: [
                {
                    "name": "Chido Bennadette Hanyani",
                    "shortName": "Benna",
                    "paragraphs": [
                        "Бенна має понад 8 років міжнародного професійного досвіду, зокрема в Малайзії, Південній Африці та Польщі.",
                        "Вона має ступінь LLB Laws Університету Лондона та LLM з міжнародного і європейського права Вроцлавського університету."
                    ]
                },
                {
                    "name": "Ewelina Bojczuk",
                    "shortName": "Ewelina",
                    "paragraphs": [
                        "Евеліна має понад 9 років досвіду роботи з приватними особами та компаніями. В E&B Partners допомагає впорядкувати документи й адміністративні формальності.",
                        "Вона має магістерський ступінь з права Сілезького університету в Катовіце."
                    ]
                }
            ],
        },
        contact: {
            eyebrow: "Контакт",
            title: "Розкажіть, що потрібно вирішити.",
            description: "Повідомте про формальність, строк, зазначений установою, та документи, які вже маєте.",
            emailLabel: "E-mail",
            openMap: "Відкрити мапу",
            form: {
                name: "Ім'я та прізвище *",
                phone: "Телефон",
                email: "E-mail *",
                message: "Повідомлення *",
                placeholder: "Коротко опишіть, що сталося, який строк діє та яка підтримка потрібна.",
                requiredError: "Заповніть обов'язкові поля: ім'я, e-mail і повідомлення.",
                success: "Поштова програма має відкрити підготовлене повідомлення.",
                send: "Надіслати",
                subject: "Запит про допомогу з документами E&B Partners",
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
            eyebrow: "Помощь с документами для пребывания",
            title: "Помогаем иностранцам и компаниям упорядочить документы в Польше.",
            body: "Комплектуем документы, заполняем формуляры на основе предоставленных данных и связываемся с учреждениями по организационным вопросам.",
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
                "individual": {
                    "key": "individual",
                    "title": "Частный клиент",
                    "headline": "Для иностранцев, которым нужна помощь с документами и формулярами.",
                    "description": "Комплектуем документы, заполняем формуляры на основе предоставленных данных и связываемся с учреждениями по организационным вопросам.",
                    "points": [
                        {
                            "title": "Комплектование документов",
                            "lead": "",
                            "description": "Упорядочиваем предоставленные документы и комплектуем их по перечню учреждения."
                        },
                        {
                            "title": "Заполнение формуляров",
                            "lead": "",
                            "description": "Заполняем формуляры данными клиента и готовим их к подписи."
                        },
                        {
                            "title": "Контакт с учреждениями",
                            "lead": "",
                            "description": "Связываемся с учреждениями по вопросам документов, организации визитов и статуса поданных заявлений."
                        }
                    ]
                },
                "business": {
                    "key": "business",
                    "title": "Бизнес-клиент",
                    "headline": "Для компаний, которым нужна помощь с документами иностранных сотрудников.",
                    "description": "Комплектуем документы, заполняем формуляры на основе предоставленных данных и связываемся с учреждениями по организационным вопросам.",
                    "points": [
                        {
                            "title": "Комплектование документов",
                            "lead": "",
                            "description": "Упорядочиваем предоставленные документы и комплектуем их по перечню учреждения."
                        },
                        {
                            "title": "Заполнение формуляров",
                            "lead": "",
                            "description": "Заполняем формуляры данными клиента и готовим их к подписи."
                        },
                        {
                            "title": "Контакт с учреждениями",
                            "lead": "",
                            "description": "Связываемся с учреждениями по вопросам документов, организации визитов и статуса поданных заявлений."
                        }
                    ]
                }
            },
        },
        faq: {
            eyebrow: "FAQ",
            title: "Часто задаваемые вопросы",
            groups: {
                "individual": {
                    "items": [
                        {
                            "question": "С чем вы можете помочь?",
                            "answer": "Помогаем комплектовать документы, заполнять формуляры и связываться с учреждениями. Сообщите, какой формальности касается ваше дело."
                        },
                        {
                            "question": "Какие документы подготовить?",
                            "answer": "Пришлите перечень учреждения и имеющиеся документы. Поможем их упорядочить и определить недостающие позиции из перечня."
                        },
                        {
                            "question": "Можете ли вы связаться с учреждением?",
                            "answer": "Да. Связываемся по организационным вопросам, документам и статусу заявления. Перед контактом согласуем необходимое согласие или полномочия."
                        }
                    ]
                },
                "business": {
                    "items": [
                        {
                            "question": "Оказываете ли вы регулярную помощь компаниям?",
                            "answer": "Да. Объём и частоту помощи с документами, формулярами и контактом с учреждениями согласуем с каждой компанией отдельно."
                        },
                        {
                            "question": "Какие документы подготовить?",
                            "answer": "Пришлите перечень учреждения и имеющиеся документы. Поможем их упорядочить и определить недостающие позиции из перечня."
                        },
                        {
                            "question": "Можете ли вы связаться с учреждением?",
                            "answer": "Да. Связываемся по организационным вопросам, документам и статусу заявления. Перед контактом согласуем необходимое согласие или полномочия."
                        }
                    ]
                }
            },
        },
        services: {
            eyebrow: "Предложение",
            title: "Услуги",
            groups: {
                "individual": {
                    "intro": "Комплектуем документы, заполняем формуляры на основе предоставленных данных и связываемся с учреждениями по организационным вопросам.",
                    "items": [
                        {
                            "title": "Комплектование документов",
                            "description": "Упорядочиваем предоставленные документы и комплектуем их по перечню учреждения."
                        },
                        {
                            "title": "Заполнение формуляров",
                            "description": "Заполняем формуляры данными клиента и готовим их к подписи."
                        },
                        {
                            "title": "Контакт с учреждениями",
                            "description": "Связываемся с учреждениями по вопросам документов, организации визитов и статуса поданных заявлений."
                        }
                    ]
                },
                "business": {
                    "intro": "Комплектуем документы, заполняем формуляры на основе предоставленных данных и связываемся с учреждениями по организационным вопросам.",
                    "items": [
                        {
                            "title": "Комплектование документов",
                            "description": "Упорядочиваем предоставленные документы и комплектуем их по перечню учреждения."
                        },
                        {
                            "title": "Заполнение формуляров",
                            "description": "Заполняем формуляры данными клиента и готовим их к подписи."
                        },
                        {
                            "title": "Контакт с учреждениями",
                            "description": "Связываемся с учреждениями по вопросам документов, организации визитов и статуса поданных заявлений."
                        }
                    ]
                }
            },
        },
        about: {
            eyebrow: "О нас",
            title: "Познакомьтесь с командой E&B Partners",
            description: "Объединяем международный опыт с упорядоченным подходом к документам и административным формальностям.",
            coFounder: "Co-Founder",
            members: [
                {
                    "name": "Chido Bennadette Hanyani",
                    "shortName": "Benna",
                    "paragraphs": [
                        "Бенна имеет более 8 лет международного профессионального опыта, в том числе в Малайзии, Южной Африке и Польше.",
                        "Она имеет степень LLB Laws Лондонского университета и LLM по международному и европейскому праву Вроцлавского университета."
                    ]
                },
                {
                    "name": "Ewelina Bojczuk",
                    "shortName": "Ewelina",
                    "paragraphs": [
                        "Эвелина имеет более 9 лет опыта работы с частными лицами и компаниями. В E&B Partners помогает упорядочить документы и административные формальности.",
                        "Она имеет степень магистра права Силезского университета в Катовице."
                    ]
                }
            ],
        },
        contact: {
            eyebrow: "Контакт",
            title: "Расскажите, что нужно решить.",
            description: "Сообщите о формальности, сроке, указанном учреждением, и документах, которые уже есть.",
            emailLabel: "E-mail",
            openMap: "Открыть карту",
            form: {
                name: "Имя и фамилия *",
                phone: "Телефон",
                email: "E-mail *",
                message: "Сообщение *",
                placeholder: "Кратко опишите, что произошло, какой срок действует и какая поддержка нужна.",
                requiredError: "Заполните обязательные поля: имя, e-mail и сообщение.",
                success: "Почтовое приложение должно открыть подготовленное сообщение.",
                send: "Отправить",
                subject: "Запрос о помощи с документами E&B Partners",
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
            eyebrow: "Apoyo con los trámites de residencia",
            title: "Ayudamos a extranjeros y empresas con sus trámites en Polonia.",
            body: "Reunimos documentos, rellenamos formularios con los datos proporcionados y contactamos con las oficinas para cuestiones organizativas.",
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
                "individual": {
                    "key": "individual",
                    "title": "Cliente individual",
                    "headline": "Para extranjeros que necesitan ayuda con documentos y formularios.",
                    "description": "Reunimos documentos, rellenamos formularios con los datos proporcionados y contactamos con las oficinas para cuestiones organizativas.",
                    "points": [
                        {
                            "title": "Recopilación de documentos",
                            "lead": "",
                            "description": "Organizamos los documentos proporcionados y los reunimos según la lista de la oficina."
                        },
                        {
                            "title": "Cumplimentación de formularios",
                            "lead": "",
                            "description": "Rellenamos formularios con los datos del cliente y los preparamos para su firma."
                        },
                        {
                            "title": "Contacto con las oficinas",
                            "lead": "",
                            "description": "Contactamos con las oficinas sobre documentos, organización de citas y estado de las solicitudes presentadas."
                        }
                    ]
                },
                "business": {
                    "key": "business",
                    "title": "Cliente empresa",
                    "headline": "Para empresas que necesitan ayuda con los documentos de sus empleados extranjeros.",
                    "description": "Reunimos documentos, rellenamos formularios con los datos proporcionados y contactamos con las oficinas para cuestiones organizativas.",
                    "points": [
                        {
                            "title": "Recopilación de documentos",
                            "lead": "",
                            "description": "Organizamos los documentos proporcionados y los reunimos según la lista de la oficina."
                        },
                        {
                            "title": "Cumplimentación de formularios",
                            "lead": "",
                            "description": "Rellenamos formularios con los datos del cliente y los preparamos para su firma."
                        },
                        {
                            "title": "Contacto con las oficinas",
                            "lead": "",
                            "description": "Contactamos con las oficinas sobre documentos, organización de citas y estado de las solicitudes presentadas."
                        }
                    ]
                }
            },
        },
        faq: {
            eyebrow: "FAQ",
            title: "Preguntas frecuentes",
            groups: {
                "individual": {
                    "items": [
                        {
                            "question": "¿En qué podéis ayudarme?",
                            "answer": "Ayudamos a reunir documentos, rellenar formularios y contactar con las oficinas. Indícanos con qué trámite necesitas ayuda."
                        },
                        {
                            "question": "¿Qué documentos debo preparar?",
                            "answer": "Envíanos la lista de la oficina y los documentos que ya tienes. Ayudamos a organizarlos e identificar los elementos que faltan de esa lista."
                        },
                        {
                            "question": "¿Podéis contactar con la oficina?",
                            "answer": "Sí. Contactamos sobre cuestiones organizativas, documentos y estado de solicitudes. Antes del contacto acordamos el consentimiento o la autorización necesarios."
                        }
                    ]
                },
                "business": {
                    "items": [
                        {
                            "question": "¿Ofrecéis apoyo continuo a empresas?",
                            "answer": "Sí. Acordamos con cada empresa el alcance y la frecuencia de la ayuda con documentos, formularios y comunicaciones con las oficinas."
                        },
                        {
                            "question": "¿Qué documentos debo preparar?",
                            "answer": "Envíanos la lista de la oficina y los documentos que ya tienes. Ayudamos a organizarlos e identificar los elementos que faltan de esa lista."
                        },
                        {
                            "question": "¿Podéis contactar con la oficina?",
                            "answer": "Sí. Contactamos sobre cuestiones organizativas, documentos y estado de solicitudes. Antes del contacto acordamos el consentimiento o la autorización necesarios."
                        }
                    ]
                }
            },
        },
        services: {
            eyebrow: "Oferta",
            title: "Servicios",
            groups: {
                "individual": {
                    "intro": "Reunimos documentos, rellenamos formularios con los datos proporcionados y contactamos con las oficinas para cuestiones organizativas.",
                    "items": [
                        {
                            "title": "Recopilación de documentos",
                            "description": "Organizamos los documentos proporcionados y los reunimos según la lista de la oficina."
                        },
                        {
                            "title": "Cumplimentación de formularios",
                            "description": "Rellenamos formularios con los datos del cliente y los preparamos para su firma."
                        },
                        {
                            "title": "Contacto con las oficinas",
                            "description": "Contactamos con las oficinas sobre documentos, organización de citas y estado de las solicitudes presentadas."
                        }
                    ]
                },
                "business": {
                    "intro": "Reunimos documentos, rellenamos formularios con los datos proporcionados y contactamos con las oficinas para cuestiones organizativas.",
                    "items": [
                        {
                            "title": "Recopilación de documentos",
                            "description": "Organizamos los documentos proporcionados y los reunimos según la lista de la oficina."
                        },
                        {
                            "title": "Cumplimentación de formularios",
                            "description": "Rellenamos formularios con los datos del cliente y los preparamos para su firma."
                        },
                        {
                            "title": "Contacto con las oficinas",
                            "description": "Contactamos con las oficinas sobre documentos, organización de citas y estado de las solicitudes presentadas."
                        }
                    ]
                }
            },
        },
        about: {
            eyebrow: "Sobre nosotros",
            title: "Conoce al equipo de E&B Partners",
            description: "Combinamos experiencia internacional con un enfoque organizado de los documentos y trámites administrativos.",
            coFounder: "Co-Founder",
            members: [
                {
                    "name": "Chido Bennadette Hanyani",
                    "shortName": "Benna",
                    "paragraphs": [
                        "Benna cuenta con más de 8 años de experiencia profesional internacional, incluyendo trabajo en Malasia, Sudáfrica y Polonia.",
                        "Tiene un LLB Laws por la University of London y un LLM en Derecho Internacional y Europeo por la Universidad de Wrocław."
                    ]
                },
                {
                    "name": "Ewelina Bojczuk",
                    "shortName": "Ewelina",
                    "paragraphs": [
                        "Ewelina cuenta con más de 9 años de experiencia trabajando con particulares y empresas. En E&B Partners ayuda a organizar documentos y trámites administrativos.",
                        "Tiene un máster en Derecho por la Universidad de Silesia en Katowice."
                    ]
                }
            ],
        },
        contact: {
            eyebrow: "Contacto",
            title: "Cuéntanos qué necesitas resolver.",
            description: "Indícanos el trámite, el plazo señalado por la oficina y los documentos que ya tienes.",
            emailLabel: "E-mail",
            openMap: "Abrir mapa",
            form: {
                name: "Nombre y apellidos *",
                phone: "Teléfono",
                email: "E-mail *",
                message: "Mensaje *",
                placeholder: "Cuéntanos brevemente qué ocurrió, qué plazo aplica y qué tipo de apoyo necesitas.",
                requiredError: "Completa los campos obligatorios: nombre, e-mail y mensaje.",
                success: "Tu aplicación de correo debería abrir un mensaje preparado.",
                send: "Enviar",
                subject: "Solicitud de ayuda con trámites E&B Partners",
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
            business: "Vane Mabhizinesi",
            businessShort: "Bhizinesi",
            about: "Nezvedu",
            contact: "Taura nesu",
            faq: "FAQ",
            services: "Masevhisi",
            language: "Sarudza mutauro",
        },
        hero: {
            eyebrow: "Rubatsiro nemagwaro ekugara",
            title: "Tinobatsira Vatorwa nemakambani nemagwaro muPoland.",
            body: "Tinounganidza magwaro, tinozadza mafomu nemashoko amunotipa uye tinotaura nemahofisi nezvekuronga mabasa.",
            selectPath: "Sarudza nzira yako",
            meetTeam: "Sangana nechikwata",
            teamEyebrow: "Chikwata cheE&B Partners",
            coFounder: "Co-Founder",
        },
        process: {
            eyebrow: "Sarudza nzira yako",
            title: "Support yakagadzirirwa Mamiriro ako",
            selectedPath: "Nzira yawasarudza",
            servicesCta: "Masevhisi",
            faqCta: "Ona Mibvunzo",
            audienceTitles: {
                individual: "Mutengi wega",
                business: "Vane Mabhizinesi",
            },
            groups: {
                "individual": {
                    "key": "individual",
                    "title": "Mutengi wega",
                    "headline": "Kune Vatorwa vanoda rubatsiro nemagwaro nemafomu.",
                    "description": "Tinounganidza magwaro, tinozadza mafomu nemashoko amunotipa uye tinotaura nemahofisi nezvekuronga mabasa.",
                    "points": [
                        {
                            "title": "Kuunganidza magwaro",
                            "lead": "",
                            "description": "Tinoronga magwaro amunotipa tichiashandisa pamwe nerondedzero inodiwa nehofisi."
                        },
                        {
                            "title": "Kuzadza mafomu",
                            "lead": "",
                            "description": "Tinozadza mafomu nemashoko anopiwa nemutengi toagadzirira kusainwa."
                        },
                        {
                            "title": "Kutaurirana nemahofisi",
                            "lead": "",
                            "description": "Tinotaura nemahofisi pamusoro pemagwaro, kuronga nguva dzekushanya uye mamiriro emaapplication akaendeswa."
                        }
                    ]
                },
                "business": {
                    "key": "business",
                    "title": "Vane Mabhizinesi",
                    "headline": "Kumakambani anoda rubatsiro nemagwaro evashandi vekune dzimwe nyika.",
                    "description": "Tinounganidza magwaro, tinozadza mafomu nemashoko amunotipa uye tinotaura nemahofisi nezvekuronga mabasa.",
                    "points": [
                        {
                            "title": "Kuunganidza magwaro",
                            "lead": "",
                            "description": "Tinoronga magwaro amunotipa tichiashandisa pamwe nerondedzero inodiwa nehofisi."
                        },
                        {
                            "title": "Kuzadza mafomu",
                            "lead": "",
                            "description": "Tinozadza mafomu nemashoko anopiwa nemutengi toagadzirira kusainwa."
                        },
                        {
                            "title": "Kutaurirana nemahofisi",
                            "lead": "",
                            "description": "Tinotaura nemahofisi pamusoro pemagwaro, kuronga nguva dzekushanya uye mamiriro emaapplication akaendeswa."
                        }
                    ]
                }
            },
        },
        faq: {
            eyebrow: "FAQ",
            title: "Mibvunzo inowanzo bvunzwa",
            groups: {
                "individual": {
                    "items": [
                        {
                            "question": "Munobatsira nei?",
                            "answer": "Tinobatsira kuunganidza magwaro, kuzadza mafomu nekutaurirana nemahofisi. Tiudzei kuti munoda rubatsiro papi pamabasa emahofisi."
                        },
                        {
                            "question": "Ndogadzirira magwaro api?",
                            "answer": "Tumirai rondedzero inodiwa nehofisi nemagwaro amuinawo. Tinobatsira kuaronga nekuona zvisipo parondedzero yacho."
                        },
                        {
                            "question": "Munogona kutaura nehofisi here?",
                            "answer": "Hongu. Tinotaura nezvekuronga mabasa, magwaro nemamiriro emaapplication. Tinotanga tawirirana pamusoro pemvumo inodiwa."
                        }
                    ]
                },
                "business": {
                    "items": [
                        {
                            "question": "Munobatsira makambani nguva dzose here?",
                            "answer": "Hongu. Tinowirirana nekambani yega yega pamusoro pebasa uye kuti rubatsiro rwemagwaro, mafomu nekutaurirana nemahofisi runodiwa kangani."
                        },
                        {
                            "question": "Ndogadzirira magwaro api?",
                            "answer": "Tumirai rondedzero inodiwa nehofisi nemagwaro amuinawo. Tinobatsira kuaronga nekuona zvisipo parondedzero yacho."
                        },
                        {
                            "question": "Munogona kutaura nehofisi here?",
                            "answer": "Hongu. Tinotaura nezvekuronga mabasa, magwaro nemamiriro emaapplication. Tinotanga tawirirana pamusoro pemvumo inodiwa."
                        }
                    ]
                }
            },
        },
        services: {
            eyebrow: "Offer",
            title: "Masevhisi",
            groups: {
                "individual": {
                    "intro": "Tinounganidza magwaro, tinozadza mafomu nemashoko amunotipa uye tinotaura nemahofisi nezvekuronga mabasa.",
                    "items": [
                        {
                            "title": "Kuunganidza magwaro",
                            "description": "Tinoronga magwaro amunotipa tichiashandisa pamwe nerondedzero inodiwa nehofisi."
                        },
                        {
                            "title": "Kuzadza mafomu",
                            "description": "Tinozadza mafomu nemashoko anopiwa nemutengi toagadzirira kusainwa."
                        },
                        {
                            "title": "Kutaurirana nemahofisi",
                            "description": "Tinotaura nemahofisi pamusoro pemagwaro, kuronga nguva dzekushanya uye mamiriro emaapplication akaendeswa."
                        }
                    ]
                },
                "business": {
                    "intro": "Tinounganidza magwaro, tinozadza mafomu nemashoko amunotipa uye tinotaura nemahofisi nezvekuronga mabasa.",
                    "items": [
                        {
                            "title": "Kuunganidza magwaro",
                            "description": "Tinoronga magwaro amunotipa tichiashandisa pamwe nerondedzero inodiwa nehofisi."
                        },
                        {
                            "title": "Kuzadza mafomu",
                            "description": "Tinozadza mafomu nemashoko anopiwa nemutengi toagadzirira kusainwa."
                        },
                        {
                            "title": "Kutaurirana nemahofisi",
                            "description": "Tinotaura nemahofisi pamusoro pemagwaro, kuronga nguva dzekushanya uye mamiriro emaapplication akaendeswa."
                        }
                    ]
                }
            },
        },
        about: {
            eyebrow: "Nezvedu",
            title: "Sangana nechikwata cheE&B Partners",
            description: "Tinosanganisa ruzivo rwekushanda munyika dzakasiyana nekurongeka kwemagwaro nemabasa emahofisi.",
            coFounder: "Co-Founder",
            members: [
                {
                    "name": "Chido Bennadette Hanyani",
                    "shortName": "Benna",
                    "paragraphs": [
                        "Benna ane makore anopfuura 8 eruzivo rwebasa munyika dzakasiyana, kusanganisira Malaysia, South Africa nePoland.",
                        "Ane LLB Laws kubva kuUniversity of London uye LLM in International and European Law kubva kuUniversity of Wroclaw."
                    ]
                },
                {
                    "name": "Ewelina Bojczuk",
                    "shortName": "Ewelina",
                    "paragraphs": [
                        "Ewelina ane makore anopfuura 9 eruzivo rwekushanda nevanhu nemakambani. MuE&B Partners anobatsira kuronga magwaro nemabasa emahofisi.",
                        "Ane Master's degree in Law kubva kuUniversity of Silesia in Katowice."
                    ]
                }
            ],
        },
        contact: {
            eyebrow: "Contact",
            title: "Tiudze zvaunoda kugadzirisa.",
            description: "Tiudzei basa rehofisi ramunoda, zuva rakatarwa nehofisi nemagwaro amuinawo.",
            emailLabel: "E-mail",
            openMap: "Vhura map",
            form: {
                name: "Zita nesurname *",
                phone: "Phone",
                email: "E-mail *",
                message: "Message *",
                placeholder: "Nyora muchidimbu zvakaitika, deadline iripo uye support yaunoda.",
                requiredError: "Ndapota zadza fields dzinodiwa: zita, e-mail ne message.",
                success: "E-mail app yako inofanira kuvhura message yakagadzirirwa.",
                send: "Send",
                subject: "Chikumbiro cherubatsiro nemagwaro E&B Partners",
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
            eyebrow: "Oturum evrakları için destek",
            title: "Yabancıların ve şirketlerin Polonya’daki evrak işlemlerine yardımcı oluyoruz.",
            body: "Belgeleri topluyor, sağladığınız bilgilerle formları dolduruyor ve organizasyon konularında kurumlarla iletişim kuruyoruz.",
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
                "individual": {
                    "key": "individual",
                    "title": "Bireysel müşteri",
                    "headline": "Belge ve formlar için yardıma ihtiyaç duyan yabancılar için.",
                    "description": "Belgeleri topluyor, sağladığınız bilgilerle formları dolduruyor ve organizasyon konularında kurumlarla iletişim kuruyoruz.",
                    "points": [
                        {
                            "title": "Belgelerin toplanması",
                            "lead": "",
                            "description": "Sağlanan belgeleri düzenliyor ve kurumun listesindeki belgelere göre topluyoruz."
                        },
                        {
                            "title": "Formların doldurulması",
                            "lead": "",
                            "description": "Müşterinin verdiği bilgilerle formları dolduruyor ve imzaya hazırlıyoruz."
                        },
                        {
                            "title": "Kurumlarla iletişim",
                            "lead": "",
                            "description": "Belgeler, randevu düzenlemeleri ve sunulan başvuruların durumu hakkında kurumlarla iletişim kuruyoruz."
                        }
                    ]
                },
                "business": {
                    "key": "business",
                    "title": "Kurumsal müşteri",
                    "headline": "Yabancı çalışanların evrakları için yardıma ihtiyaç duyan şirketler için.",
                    "description": "Belgeleri topluyor, sağladığınız bilgilerle formları dolduruyor ve organizasyon konularında kurumlarla iletişim kuruyoruz.",
                    "points": [
                        {
                            "title": "Belgelerin toplanması",
                            "lead": "",
                            "description": "Sağlanan belgeleri düzenliyor ve kurumun listesindeki belgelere göre topluyoruz."
                        },
                        {
                            "title": "Formların doldurulması",
                            "lead": "",
                            "description": "Müşterinin verdiği bilgilerle formları dolduruyor ve imzaya hazırlıyoruz."
                        },
                        {
                            "title": "Kurumlarla iletişim",
                            "lead": "",
                            "description": "Belgeler, randevu düzenlemeleri ve sunulan başvuruların durumu hakkında kurumlarla iletişim kuruyoruz."
                        }
                    ]
                }
            },
        },
        faq: {
            eyebrow: "FAQ",
            title: "Sık sorulan sorular",
            groups: {
                "individual": {
                    "items": [
                        {
                            "question": "Hangi konularda yardımcı oluyorsunuz?",
                            "answer": "Belgeleri toplama, formları doldurma ve kurumlarla iletişim kurma konusunda yardımcı oluyoruz. Hangi idari işlem için yardıma ihtiyacınız olduğunu belirtin."
                        },
                        {
                            "question": "Hangi belgeleri hazırlamalıyım?",
                            "answer": "Kurumun belge listesini ve mevcut belgelerinizi gönderin. Bunları düzenlemeye ve listedeki eksikleri belirlemeye yardımcı oluyoruz."
                        },
                        {
                            "question": "Kurumla iletişime geçebilir misiniz?",
                            "answer": "Evet. Organizasyon, belgeler ve başvuru durumu hakkında iletişim kuruyoruz. Öncesinde gerekli izin veya yetkilendirmeyi belirliyoruz."
                        }
                    ]
                },
                "business": {
                    "items": [
                        {
                            "question": "Şirketlere düzenli destek veriyor musunuz?",
                            "answer": "Evet. Belge, form ve kurumlarla iletişim desteğinin kapsamını ve sıklığını her şirketle ayrı ayrı belirliyoruz."
                        },
                        {
                            "question": "Hangi belgeleri hazırlamalıyım?",
                            "answer": "Kurumun belge listesini ve mevcut belgelerinizi gönderin. Bunları düzenlemeye ve listedeki eksikleri belirlemeye yardımcı oluyoruz."
                        },
                        {
                            "question": "Kurumla iletişime geçebilir misiniz?",
                            "answer": "Evet. Organizasyon, belgeler ve başvuru durumu hakkında iletişim kuruyoruz. Öncesinde gerekli izin veya yetkilendirmeyi belirliyoruz."
                        }
                    ]
                }
            },
        },
        services: {
            eyebrow: "Teklif",
            title: "Hizmetler",
            groups: {
                "individual": {
                    "intro": "Belgeleri topluyor, sağladığınız bilgilerle formları dolduruyor ve organizasyon konularında kurumlarla iletişim kuruyoruz.",
                    "items": [
                        {
                            "title": "Belgelerin toplanması",
                            "description": "Sağlanan belgeleri düzenliyor ve kurumun listesindeki belgelere göre topluyoruz."
                        },
                        {
                            "title": "Formların doldurulması",
                            "description": "Müşterinin verdiği bilgilerle formları dolduruyor ve imzaya hazırlıyoruz."
                        },
                        {
                            "title": "Kurumlarla iletişim",
                            "description": "Belgeler, randevu düzenlemeleri ve sunulan başvuruların durumu hakkında kurumlarla iletişim kuruyoruz."
                        }
                    ]
                },
                "business": {
                    "intro": "Belgeleri topluyor, sağladığınız bilgilerle formları dolduruyor ve organizasyon konularında kurumlarla iletişim kuruyoruz.",
                    "items": [
                        {
                            "title": "Belgelerin toplanması",
                            "description": "Sağlanan belgeleri düzenliyor ve kurumun listesindeki belgelere göre topluyoruz."
                        },
                        {
                            "title": "Formların doldurulması",
                            "description": "Müşterinin verdiği bilgilerle formları dolduruyor ve imzaya hazırlıyoruz."
                        },
                        {
                            "title": "Kurumlarla iletişim",
                            "description": "Belgeler, randevu düzenlemeleri ve sunulan başvuruların durumu hakkında kurumlarla iletişim kuruyoruz."
                        }
                    ]
                }
            },
        },
        about: {
            eyebrow: "Hakkımızda",
            title: "E&B Partners ekibiyle tanışın",
            description: "Uluslararası deneyimi, belgelere ve idari evrak işlemlerine düzenli bir yaklaşımla birleştiriyoruz.",
            coFounder: "Co-Founder",
            members: [
                {
                    "name": "Chido Bennadette Hanyani",
                    "shortName": "Benna",
                    "paragraphs": [
                        "Benna, Malezya, Güney Afrika ve Polonya dahil olmak üzere 8 yılı aşkın uluslararası mesleki deneyime sahiptir.",
                        "University of London'dan LLB Laws ve Wrocław Üniversitesi'nden Uluslararası ve Avrupa Hukuku alanında LLM derecesine sahiptir."
                    ]
                },
                {
                    "name": "Ewelina Bojczuk",
                    "shortName": "Ewelina",
                    "paragraphs": [
                        "Ewelina, bireyler ve şirketlerle çalışmada 9 yılı aşkın deneyime sahiptir. E&B Partners’ta belgelerin ve idari evrak işlemlerinin düzenlenmesine yardımcı olur.",
                        "Katowice'deki Silezya Üniversitesi'nden Hukuk alanında yüksek lisans derecesine sahiptir."
                    ]
                }
            ],
        },
        contact: {
            eyebrow: "İletişim",
            title: "Çözmeniz gereken konuyu bize anlatın.",
            description: "İşlemi, kurumun belirttiği son tarihi ve elinizdeki belgeleri bize bildirin.",
            emailLabel: "E-mail",
            openMap: "Haritayı aç",
            form: {
                name: "Ad ve soyad *",
                phone: "Telefon",
                email: "E-mail *",
                message: "Mesaj *",
                placeholder: "Ne olduğunu, hangi son tarihin geçerli olduğunu ve ne tür desteğe ihtiyacınız olduğunu kısaca yazın.",
                requiredError: "Lütfen zorunlu alanları doldurun: ad, e-mail ve mesaj.",
                success: "E-posta uygulamanız hazırlanmış bir mesajla açılmalıdır.",
                send: "Gönder",
                subject: "E&B Partners evrak desteği talebi",
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

export const navLinks = [
    {
        "href": "#uslugi",
        "label": "Usługi"
    },
    {
        "href": "#o-firmie",
        "label": "O Nas"
    },
    {
        "href": "#opinie",
        "label": "Opinie klientów"
    },
    {
        "href": "#faq",
        "label": "FAQ"
    },
    {
        "href": "#kontakt",
        "label": "Kontakt"
    }
];
export const processGroups = [
    {
        "key": "individual",
        "title": "Individual Client",
        "headline": "For foreign nationals who need help with documents and forms.",
        "description": "We collect documents, fill in forms using the information you provide, and contact offices about organizational matters.",
        "cta": "Let us talk about your case",
        "points": [
            {
                "title": "Document collection",
                "lead": "",
                "description": "We organize the documents you provide and collect them according to the checklist issued by the office."
            },
            {
                "title": "Form filling",
                "lead": "",
                "description": "We fill in forms using the information supplied by the client and prepare them for signature."
            },
            {
                "title": "Contact with offices",
                "lead": "",
                "description": "We contact offices about documents, appointment arrangements and the status of submitted applications."
            }
        ]
    },
    {
        "key": "business",
        "title": "Business Client",
        "headline": "For businesses that need help with paperwork for foreign employees.",
        "description": "We collect documents, fill in forms using the information you provide, and contact offices about organizational matters.",
        "cta": "Ask about B2B cooperation",
        "points": [
            {
                "title": "Document collection",
                "lead": "",
                "description": "We organize the documents you provide and collect them according to the checklist issued by the office."
            },
            {
                "title": "Form filling",
                "lead": "",
                "description": "We fill in forms using the information supplied by the client and prepare them for signature."
            },
            {
                "title": "Contact with offices",
                "lead": "",
                "description": "We contact offices about documents, appointment arrangements and the status of submitted applications."
            }
        ]
    }
] as const;
export type AudienceKey = (typeof processGroups)[number]["key"];
export const serviceGroups = {
    "individual": {
        "intro": "We collect documents, fill in forms using the information you provide, and contact offices about organizational matters.",
        "items": [
            {
                "title": "Document collection",
                "description": "We organize the documents you provide and collect them according to the checklist issued by the office."
            },
            {
                "title": "Form filling",
                "description": "We fill in forms using the information supplied by the client and prepare them for signature."
            },
            {
                "title": "Contact with offices",
                "description": "We contact offices about documents, appointment arrangements and the status of submitted applications."
            }
        ]
    },
    "business": {
        "intro": "We collect documents, fill in forms using the information you provide, and contact offices about organizational matters.",
        "items": [
            {
                "title": "Document collection",
                "description": "We organize the documents you provide and collect them according to the checklist issued by the office."
            },
            {
                "title": "Form filling",
                "description": "We fill in forms using the information supplied by the client and prepare them for signature."
            },
            {
                "title": "Contact with offices",
                "description": "We contact offices about documents, appointment arrangements and the status of submitted applications."
            }
        ]
    }
} satisfies Record<AudienceKey, {
    intro: string;
    items: Array<{
        title: string;
        description: string;
    }>;
}>;
export const faqGroups = {
    "individual": {
        "items": [
            {
                "question": "What can you help me with?",
                "answer": "We help collect documents, fill in forms and contact offices. Tell us which administrative formality you need help with."
            },
            {
                "question": "Which documents should I prepare?",
                "answer": "Send us the checklist issued by the office and the documents you already have. We help organize them and identify missing items from that checklist."
            },
            {
                "question": "Can you contact the office?",
                "answer": "Yes. We contact offices about organizational matters, documents and application status. We establish the necessary consent or authorization before contacting them."
            }
        ]
    },
    "business": {
        "items": [
            {
                "question": "Do you provide ongoing support for businesses?",
                "answer": "Yes. We agree the scope and frequency of assistance with documents, forms and office communication individually with each business."
            },
            {
                "question": "Which documents should I prepare?",
                "answer": "Send us the checklist issued by the office and the documents you already have. We help organize them and identify missing items from that checklist."
            },
            {
                "question": "Can you contact the office?",
                "answer": "Yes. We contact offices about organizational matters, documents and application status. We establish the necessary consent or authorization before contacting them."
            }
        ]
    }
};

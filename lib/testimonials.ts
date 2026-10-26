import type { Locale } from "@/lib/i18n";

export const testimonials = [
  {
    file: "1.png", width: 861, height: 291,
    alt: 'WhatsApp conversation: a client thanks the team and writes, "I am so happy mam".',
  },
  {
    file: "2.jpeg", width: 886, height: 295,
    alt: 'WhatsApp conversation: after receiving news of a positive decision for three years, a client replies, "Thank you so much maam i am so happy".',
  },
  {
    file: "3.jpeg", width: 870, height: 187,
    alt: 'WhatsApp conversation: a client thanks the team after a successful administrative court complaint and writes, "I will definitely recommend my friends to come to you for help".',
  },
  {
    file: "4.jpeg", width: 836, height: 175,
    alt: 'WhatsApp conversation: a client writes, "Thank you so much for your assistance, guidance and patience", and says they will recommend the team to others.',
  },
  {
    file: "4.png", width: 881, height: 401,
    alt: 'WhatsApp conversation: after receiving a positive decision, a client replies, "Thank you so much", with emotional emojis and a heart.',
  },
  {
    file: "6.png", width: 869, height: 244,
    alt: 'WhatsApp conversation: a client asks about their decision. The team confirms a positive draft decision and thanks the client for their cooperation, patience and trust.',
  },
] as const;

type TestimonialsCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  source: string;
  open: string;
  note: string;
  contact: string;
  conversation: string;
  close: string;
  previous: string;
  next: string;
  swipe: string;
};

export const testimonialCopy: Record<Locale, TestimonialsCopy> = {
  en: {
    eyebrow: "Client reviews",
    title: "Your messages.",
    titleAccent: "Our greatest reward.",
    description: "Behind every case is a person. These messages from our clients remind us why we do what we do.",
    source: "From our WhatsApp conversations",
    open: "View conversation",
    note: "Original messages, in our clients’ own words.",
    contact: "Let’s talk about your case",
    conversation: "WhatsApp conversation",
    close: "Close conversation",
    previous: "Previous conversation",
    next: "Next conversation",
    swipe: "Swipe sideways to read the full conversation.",
  },
  pl: {
    eyebrow: "Opinie klientów",
    title: "Wasze wiadomości.",
    titleAccent: "Nasza największa satysfakcja.",
    description: "Za każdą sprawą stoi człowiek. Takie wiadomości od klientów przypominają nam, dlaczego robimy to, co robimy.",
    source: "Z naszych rozmów na WhatsApp",
    open: "Powiększ rozmowę",
    note: "Oryginalne wiadomości, słowami naszych klientów.",
    contact: "Porozmawiajmy o Twojej sprawie",
    conversation: "Rozmowa na WhatsApp",
    close: "Zamknij rozmowę",
    previous: "Poprzednia rozmowa",
    next: "Następna rozmowa",
    swipe: "Przesuń w bok, aby przeczytać całą rozmowę.",
  },
  uk: {
    eyebrow: "Відгуки клієнтів",
    title: "Ваші повідомлення.",
    titleAccent: "Наша найбільша винагорода.",
    description: "За кожною справою стоїть людина. Такі повідомлення від клієнтів нагадують нам, заради чого ми працюємо.",
    source: "З наших розмов у WhatsApp",
    open: "Переглянути розмову",
    note: "Оригінальні повідомлення наших клієнтів.",
    contact: "Обговорімо вашу справу",
    conversation: "Розмова у WhatsApp",
    close: "Закрити розмову",
    previous: "Попередня розмова",
    next: "Наступна розмова",
    swipe: "Проведіть убік, щоб прочитати всю розмову.",
  },
  ru: {
    eyebrow: "Отзывы клиентов",
    title: "Ваши сообщения.",
    titleAccent: "Наша главная награда.",
    description: "За каждым делом стоит человек. Такие сообщения от клиентов напоминают нам, ради чего мы работаем.",
    source: "Из наших бесед в WhatsApp",
    open: "Посмотреть беседу",
    note: "Оригинальные сообщения наших клиентов.",
    contact: "Обсудим ваше дело",
    conversation: "Беседа в WhatsApp",
    close: "Закрыть беседу",
    previous: "Предыдущая беседа",
    next: "Следующая беседа",
    swipe: "Проведите в сторону, чтобы прочитать всю беседу.",
  },
  es: {
    eyebrow: "Opiniones de clientes",
    title: "Sus mensajes.",
    titleAccent: "Nuestra mayor satisfacción.",
    description: "Detrás de cada caso hay una persona. Estos mensajes de nuestros clientes nos recuerdan por qué hacemos lo que hacemos.",
    source: "De nuestras conversaciones en WhatsApp",
    open: "Ver conversación",
    note: "Mensajes originales, en palabras de nuestros clientes.",
    contact: "Hablemos de su caso",
    conversation: "Conversación de WhatsApp",
    close: "Cerrar conversación",
    previous: "Conversación anterior",
    next: "Siguiente conversación",
    swipe: "Deslice hacia un lado para leer toda la conversación.",
  },
  sn: {
    eyebrow: "Zvinotaurwa nevatengi",
    title: "Mashoko enyu.",
    titleAccent: "Mufaro wedu mukuru.",
    description: "Panyaya imwe neimwe pane munhu. Mashoko aya anobva kuvatengi vedu anotirangaridza chikonzero chebasa redu.",
    source: "Kubva muhurukuro dzedu paWhatsApp",
    open: "Ona hurukuro",
    note: "Mashoko ekutanga, sezvaakanyorwa nevatengi vedu.",
    contact: "Ngatitaurei nezvenyaya yenyu",
    conversation: "Hurukuro yepaWhatsApp",
    close: "Vhara hurukuro",
    previous: "Hurukuro yapfuura",
    next: "Hurukuro inotevera",
    swipe: "Svedzerai padivi kuti muverenge hurukuro yose.",
  },
  tr: {
    eyebrow: "Müşteri yorumları",
    title: "Mesajlarınız.",
    titleAccent: "En büyük mutluluğumuz.",
    description: "Her dosyanın arkasında bir insan var. Müşterilerimizden gelen bu mesajlar, işimizi neden yaptığımızı bize hatırlatıyor.",
    source: "WhatsApp görüşmelerimizden",
    open: "Görüşmeyi görüntüle",
    note: "Müşterilerimizin kendi sözleriyle orijinal mesajlar.",
    contact: "Durumunuzu konuşalım",
    conversation: "WhatsApp görüşmesi",
    close: "Görüşmeyi kapat",
    previous: "Önceki görüşme",
    next: "Sonraki görüşme",
    swipe: "Görüşmenin tamamını okumak için yana kaydırın.",
  },
};

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EB Partners | Pomoc administracyjna",
  description:
    "Pomoc administracyjna dla cudzoziemców i pracodawców w Polsce. Dokumentacja pobytowa i związana z zatrudnieniem oraz kontakt z urzędami.",
  openGraph: {
    title: "EB Partners | Pomoc administracyjna",
    description:
      "Pomoc administracyjna dla cudzoziemców i pracodawców w Polsce. Dokumentacja pobytowa i związana z zatrudnieniem oraz kontakt z urzędami.",
    siteName: "EB Partners",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EB Partners | Pomoc administracyjna",
    description:
      "Pomoc administracyjna dla cudzoziemców i pracodawców w Polsce. Dokumentacja pobytowa i związana z zatrudnieniem oraz kontakt z urzędami.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

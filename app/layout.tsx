import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EB Partners | Pomoc w formalnościach",
  description:
    "Obsługa administracyjna dokumentacji związanej z pobytem i pracą cudzoziemców w Polsce. Kompletowanie załączników i przygotowanie do złożenia.",
  openGraph: {
    title: "EB Partners | Pomoc w formalnościach",
    description:
      "Obsługa administracyjna dokumentacji związanej z pobytem i pracą cudzoziemców w Polsce. Kompletowanie załączników i przygotowanie do złożenia.",
    siteName: "EB Partners",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EB Partners | Pomoc w formalnościach",
    description:
      "Obsługa administracyjna dokumentacji związanej z pobytem i pracą cudzoziemców w Polsce. Kompletowanie załączników i przygotowanie do złożenia.",
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

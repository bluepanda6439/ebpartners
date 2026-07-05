import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EB Partners | Doradztwo prawne",
  description:
    "Doradztwo prawne, migracyjne i administracyjne dla cudzoziemców oraz firm w Polsce.",
  openGraph: {
    title: "EB Partners | Doradztwo prawne",
    description:
      "Doradztwo prawne, migracyjne i administracyjne dla cudzoziemców oraz firm w Polsce.",
    siteName: "EB Partners",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EB Partners | Doradztwo prawne",
    description:
      "Doradztwo prawne, migracyjne i administracyjne dla cudzoziemców oraz firm w Polsce.",
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

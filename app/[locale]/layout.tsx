import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../Components/Navbar";
import MyCustomNextIntlClientProvider from "./MyCustomNextIntlClientProvider.tsx";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo portfolio",
  description:
    "Experienced developer with a passion for solving complex problems through elegant code. Proficient in multiple languages, frameworks, and tools. Committed to delivering quality and innovative solutions for business success.",
};

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
        <div className="px-6 lg:px-40" id="margins">
          {children}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
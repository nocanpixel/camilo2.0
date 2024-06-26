import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../Components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo portfolio",
  description:
    "Experienced developer with a passion for solving complex problems through elegant code. Proficient in multiple languages, frameworks, and tools. Committed to delivering quality and innovative solutions for business success.",
  openGraph: {
    images: 'https://portfolio.cambe.app/_next/image?url=%2Fimages%2Feye.gif&w=1080&q=75',
  }
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
        <SpeedInsights/>
        <Analytics/>
          {children}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
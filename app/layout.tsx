import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camilo portfolio",
  description:
    "Experienced developer with a passion for solving complex problems through elegant code. Proficient in multiple languages, frameworks, and tools. Committed to delivering quality and innovative solutions for business success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5326726221343916"
        crossOrigin="anonymous"
      ></script>
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        <div className="px-6 lg:px-40" id="margins">
          {children}
        </div>
      </body>
    </html>
  );
}

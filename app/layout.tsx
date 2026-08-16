import type { Metadata } from "next";
import { Fraunces, Literata, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DisclosureRail from "@/components/DisclosureRail";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Architecture of Anonymous Confession",
    template: "%s · The Architecture of Anonymous Confession",
  },
  description:
    "A close and distant reading of 50,000 posts from r/confession, a community that judges no one.",
  authors: [{ name: "Gyan Bhambhani" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${literata.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <DisclosureRail />
        <Nav />
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-16 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { DM_Serif_Display, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata = {
  title: "Jann Inc — Building software that matters",
  description:
    "Jann Inc is a product studio creating focused software tools across finance, health, education, and beyond.",
  openGraph: {
    title: "Jann Inc — Building software that matters",
    description:
      "A product studio creating focused software tools across finance, health, education, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${caveat.variable} ${dmSans.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

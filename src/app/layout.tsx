import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "James Edeoghon — Author of British Natasha and the Ashewo Doctor",
  description:
    "Official portfolio of James Edeoghon: medical doctor by profession, storyteller by calling. His debut novel, British Natasha and the Ashewo Doctor, is out now.",
  keywords: [
    "James Edeoghon",
    "British Natasha and the Ashewo Doctor",
    "author",
    "Nigerian writer",
    "debut novel",
    "romance fiction",
    "medical doctor",
  ],
  authors: [{ name: "James Edeoghon" }],
  openGraph: {
    title: "James Edeoghon — Author",
    description:
      "Doctor by profession. Storyteller by calling. The debut novel British Natasha and the Ashewo Doctor is out now.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Edeoghon — Author",
    description:
      "Doctor by profession. Storyteller by calling. The debut novel British Natasha and the Ashewo Doctor is out now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

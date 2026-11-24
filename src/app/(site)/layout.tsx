import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Nav } from "@/components/portfolio/nav";
import { Footer } from "@/components/portfolio/footer";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "James Edeoghon — Author of British Natasha and the Ashewo Doctor",
    template: "%s — James Edeoghon",
  },
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
        className={`${josefin.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col overflow-x-clip">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

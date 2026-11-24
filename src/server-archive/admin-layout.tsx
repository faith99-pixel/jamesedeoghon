import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "../app/globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Private admin area — no site navigation, no footer, not indexed.
export const metadata: Metadata = {
  title: "Letter List — Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefin.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

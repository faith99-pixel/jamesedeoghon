import type { Metadata } from "next";
import { SubscribersAdmin } from "@/components/portfolio/subscribers-admin";

export const metadata: Metadata = {
  title: "Letter List — Admin",
  robots: { index: false, follow: false },
};

export default function LettersAdminPage() {
  return <SubscribersAdmin />;
}

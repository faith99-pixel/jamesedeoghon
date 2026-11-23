import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { BookContent } from "@/components/portfolio/book-content";

export const metadata: Metadata = {
  title: "The Book",
  description:
    "British Natasha and the Ashewo Doctor — the debut novel by James Edeoghon. Synopsis, reviews and details. Out now, October 2026.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        kicker="The debut novel"
        title={
          <>
            British Natasha{" "}
            <span className="italic text-accent">&amp;</span> the Ashewo
            Doctor
          </>
        }
        description="A story of love, desire, migration, identity and difficult choices — told through the complicated relationship between a Nigerian doctor and a British single mother."
      />
      <BookContent />
    </>
  );
}

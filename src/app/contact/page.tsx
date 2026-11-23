import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { ContactContent } from "@/components/portfolio/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with James Edeoghon — enquiries about the book, press and media, or general messages.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="05"
        kicker="Contact"
        title={
          <>
            Say <span className="italic text-accent">hello</span>
          </>
        }
        description="For official enquiries, interviews, features and speaking engagements — or simply to share your thoughts on the book."
      />
      <ContactContent />
    </>
  );
}

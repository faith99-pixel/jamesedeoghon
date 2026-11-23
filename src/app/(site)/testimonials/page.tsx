import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { TestimonialsContent } from "@/components/portfolio/testimonials-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What critics and early readers are saying about British Natasha and the Ashewo Doctor — from Pulse Nigeria's review and the cover endorsements.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        kicker="Testimonials"
        title={
          <>
            Kind words{" "}
            <span className="italic">&amp;</span> critical
            acclaim
          </>
        }
        description="What critics and early readers are saying about James Edeoghon's debut novel, British Natasha and the Ashewo Doctor."
      />
      <TestimonialsContent />
    </>
  );
}

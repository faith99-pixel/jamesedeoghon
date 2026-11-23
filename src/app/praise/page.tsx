import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { PraiseContent } from "@/components/portfolio/praise-content";

export const metadata: Metadata = {
  title: "Praise",
  description:
    "Early praise for British Natasha and the Ashewo Doctor — from Pulse Nigeria's review and the cover endorsements by early readers.",
};

export default function PraisePage() {
  return (
    <>
      <PageHeader
        index="03"
        kicker="Praise"
        title={
          <>
            Kind words{" "}
            <span className="italic">&amp;</span> critical
            acclaim
          </>
        }
        description="What critics and early readers are saying about James Edeoghon's debut novel, British Natasha and the Ashewo Doctor."
      />
      <PraiseContent />
    </>
  );
}

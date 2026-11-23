import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { AboutContent } from "@/components/portfolio/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "James Edeoghon is a medical doctor and writer. Learn about the man behind the pen and the stethoscope, author of British Natasha and the Ashewo Doctor.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="01"
        kicker="About the author"
        title={
          <>
            The man behind <span className="italic">the pen</span>{" "}
            and the stethoscope
          </>
        }
        description="Physician, storyteller, and chronicler of Nigerians abroad — get to know James Edeoghon."
      />
      <AboutContent />
    </>
  );
}

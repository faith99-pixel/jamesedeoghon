import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { EventsContent } from "@/components/portfolio/events-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Photos from the Abuja book reading at Akara Café, plus upcoming readings, signings and festival appearances for James Edeoghon's British Natasha and the Ashewo Doctor.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        kicker="Events"
        title={
          <>
            Readings <span className="italic">&amp;</span>{" "}
            signings
          </>
        }
        description="Highlights from the road — starting with the Abuja book reading — plus upcoming appearances for British Natasha and the Ashewo Doctor."
      />
      <EventsContent />
    </>
  );
}

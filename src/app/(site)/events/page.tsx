import type { Metadata } from "next";
import { PageHeader } from "@/components/portfolio/page-header";
import { EventsContent } from "@/components/portfolio/events-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming readings, signings and festival appearances for James Edeoghon's British Natasha and the Ashewo Doctor. Coming soon.",
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
        description="Book launches, readings, festivals and virtual conversations — upcoming appearances for British Natasha and the Ashewo Doctor."
      />
      <EventsContent />
    </>
  );
}

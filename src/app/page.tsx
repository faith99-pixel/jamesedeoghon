import { Hero } from "@/components/portfolio/hero";
import { PraiseMarquee } from "@/components/portfolio/praise-marquee";
import { AboutTeaser } from "@/components/portfolio/about-teaser";
import { BookTeaser } from "@/components/portfolio/book-teaser";
import { EventsTeaser } from "@/components/portfolio/events-teaser";
import { Newsletter } from "@/components/portfolio/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <PraiseMarquee />
      <AboutTeaser />
      <BookTeaser />
      <EventsTeaser />
      <Newsletter />
    </>
  );
}

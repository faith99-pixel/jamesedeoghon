import { Hero } from "@/components/portfolio/hero";
import { TestimonialMarquee } from "@/components/portfolio/testimonial-marquee";
import { AboutTeaser } from "@/components/portfolio/about-teaser";
import { BookTeaser } from "@/components/portfolio/book-teaser";
import { EventsTeaser } from "@/components/portfolio/events-teaser";
import { Newsletter } from "@/components/portfolio/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialMarquee />
      <AboutTeaser />
      <BookTeaser />
      <EventsTeaser />
      <Newsletter />
    </>
  );
}

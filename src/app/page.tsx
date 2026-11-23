import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { PraiseMarquee } from "@/components/portfolio/praise-marquee";
import { About } from "@/components/portfolio/about";
import { BookShowcase } from "@/components/portfolio/book";
import { Press } from "@/components/portfolio/press";
import { Newsletter } from "@/components/portfolio/newsletter";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Nav />
      <main className="flex-1">
        <Hero />
        <PraiseMarquee />
        <About />
        <BookShowcase />
        <Press />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

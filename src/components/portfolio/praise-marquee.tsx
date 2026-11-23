import { Star } from "lucide-react";

const praise = [
  { quote: "Captivating", source: "Sarah Haluwa" },
  { quote: "Sizzling", source: "Tomilola Coco Adeyemo" },
  { quote: "Intense", source: "Deborah Kira" },
  { quote: "A smart writer", source: "Pulse Nigeria" },
  { quote: "Dialogue happening right in front of you", source: "Pulse Nigeria" },
  { quote: "Out in October 2026", source: "Debut novel" },
];

export function PraiseMarquee() {
  const items = [...praise, ...praise];
  return (
    <section
      aria-label="Early praise"
      className="marquee-mask relative border-y border-border/60 bg-secondary/40 py-6"
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap px-5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <Star
                className="h-3.5 w-3.5 shrink-0 fill-primary/70 text-primary/70"
                aria-hidden="true"
              />
              <span className="font-display text-lg italic text-foreground/90 sm:text-xl">
                “{item.quote}”
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                — {item.source}
              </span>
            </div>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-teal/50"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

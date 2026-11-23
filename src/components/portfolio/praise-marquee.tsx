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
      className="marquee-mask relative overflow-hidden border-b border-border py-5"
    >
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap px-5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <p className="flex items-baseline gap-3">
              <span className="font-display text-base italic text-foreground/85 sm:text-lg">
                &ldquo;{item.quote}&rdquo;
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {item.source}
              </span>
            </p>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
          </div>
        ))}
      </div>
    </section>
  );
}

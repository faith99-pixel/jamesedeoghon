import { Reveal } from "./reveal";

export function PageHeader({
  index,
  kicker,
  title,
  description,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-32 md:px-10 md:pb-20 md:pt-44">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              {kicker}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
            <span
              aria-hidden="true"
              className="font-display text-sm italic text-muted-foreground/80"
            >
              {index}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-10 max-w-4xl font-display font-light text-5xl leading-[1.02] tracking-[-0.01em] text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

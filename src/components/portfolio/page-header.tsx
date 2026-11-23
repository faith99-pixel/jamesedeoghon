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
    <section className="grain relative overflow-hidden bg-[radial-gradient(ellipse_60%_70%_at_85%_0%,oklch(0.5_0.095_70/0.06),transparent),radial-gradient(ellipse_45%_50%_at_5%_100%,oklch(0.46_0.08_195/0.05),transparent)] pb-14 pt-32 md:pb-20 md:pt-44">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 select-none font-display text-[22rem] italic leading-none text-foreground/[0.035]"
      >
        {index}
      </span>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            <span className="font-display text-sm italic normal-case tracking-normal text-muted-foreground/70">
              {index}
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

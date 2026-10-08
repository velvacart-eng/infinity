interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Connecting line — hidden on mobile */}
      <div
        className="absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
        aria-hidden="true"
      />
      <div className="grid gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((item) => (
          <div key={item.step} className="group relative">
            {/* Step number bubble */}
            <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-card font-mono text-sm font-semibold text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
              {item.step}
            </div>
            <h3 className="mt-5 text-h3 font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

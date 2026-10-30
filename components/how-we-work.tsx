import { workStepsData } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Workflow Process
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-foreground">
            How We Work With <span className="text-gradient-gold">You</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            A clear, collaborative 3-step framework designed to deliver strategic clarity, high-speed execution, and
            sustainable growth.
          </p>
        </Reveal>

        {/* 3-Step Process Flow with Connected Desktop Progression */}
        <div className="relative">
          {/* Subtle connecting line across cards on desktop */}
          <div className="pointer-events-none absolute left-[15%] right-[15%] top-14 -z-10 hidden border-t border-dashed border-primary/25 lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
            {workStepsData.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  <div>
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between">
                      <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 font-heading text-xl font-black text-accent shadow-sm transition-transform duration-300 group-hover:scale-105">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        Phase {index + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-6 font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>

                    {/* Step Main Description */}
                    <p className="mt-3 text-base font-medium leading-relaxed text-foreground/90">
                      {item.description}
                    </p>

                    {/* Actionable Details */}
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.details}
                    </p>
                  </div>

                  {/* Milestone Tag */}
                  <div className="mt-8 flex items-center gap-2 pt-4 border-t border-white/10">
                    <span className="size-2 rounded-full bg-primary" />
                    <span className="text-xs font-semibold text-muted tracking-wide">
                      Key Milestone {index + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

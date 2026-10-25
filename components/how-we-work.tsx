import { workStepsData } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Workflow Process
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
            How We Work With <span className="text-gradient-gold">You</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            A clear, collaborative 3-step framework designed to deliver strategic clarity, high-speed execution, and
            sustainable growth.
          </p>
        </Reveal>

        {/* Timeline Layout: Horizontal on desktop (grid-cols-3 with connectors), Vertical on mobile */}
        <div className="relative">
          {/* Desktop horizontal connector line behind step cards */}
          <div className="pointer-events-none absolute left-[15%] right-[15%] top-1/2 -z-10 hidden -translate-y-6 border-t-2 border-dashed border-primary/25 lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
            {workStepsData.map((item, index) => (
              <Reveal key={item.step} delay={index * 120}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.08] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  <div>
                    {/* Step Number Badge */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 font-heading text-xl font-black text-accent shadow-inner transition-transform group-hover:scale-105">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/70">
                        Phase {index + 1}
                      </span>
                    </div>

                    <h3 className="mb-3 font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm font-medium leading-relaxed text-foreground/90">
                      {item.description}
                    </p>
                    <p className="text-xs leading-relaxed text-muted">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/5">
                    <div className="size-2 rounded-full bg-primary" />
                    <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                      Collaborative Milestone
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

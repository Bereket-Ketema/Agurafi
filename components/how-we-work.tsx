import { workStepsData } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-foreground">
            How We Work With <span className="text-gradient-gold">You</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            A clear, collaborative 3-step framework designed to deliver strategic clarity, high-speed execution, and
            sustainable growth.
          </p>
        </Reveal>

        {/* Clean, Simple 3-Step Workflow Cards with Standard Restrained Radius */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {workStepsData.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <div className="group relative flex h-full flex-col justify-between rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)]">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-heading text-3xl font-black text-accent">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted/80">
                      Phase {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>

                  {/* Main Description */}
                  <p className="mt-2.5 text-sm font-medium leading-relaxed text-foreground/90">
                    {item.description}
                  </p>

                  {/* Actionable Details */}
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.details}
                  </p>
                </div>

                {/* Bottom Milestone */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/10">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-muted">
                    Collaborative Milestone {index + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

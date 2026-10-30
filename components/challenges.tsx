import { challengesData } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function Challenges() {
  return (
    <section id="challenges" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden bg-white/[0.01] border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Problem &amp; Resolution
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-foreground">
            Client Challenges &amp; <span className="text-gradient-gold">Strategic Solutions</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            How we systematically eliminate growth bottlenecks and turn market friction into competitive momentum.
          </p>
        </Reveal>

        {/* 4 Challenges & Solutions in High-Clarity Comparative Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {challengesData.map((item, index) => (
            <Reveal key={item.challenge} delay={index * 80}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06] hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)]">
                
                {/* The Bottleneck / Hurdle */}
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-rose-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-400 border border-rose-500/20">
                    <span>Bottleneck</span>
                  </div>
                  
                  <h3 className="mt-3.5 font-heading text-lg font-bold text-foreground">
                    {item.challenge}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.challengeDetail}
                  </p>
                </div>

                {/* Arrow Connector Indicator */}
                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary border border-primary/30">
                    <ArrowRight className="size-3.5 rotate-90 sm:rotate-0" />
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* The Agurafi Solution */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                  <div className="flex items-center gap-1.5 text-accent">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Agurafi Solution</span>
                  </div>
                  <h4 className="mt-2 font-heading text-base font-bold text-foreground">
                    {item.solution}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-muted">
                    {item.solutionDetail}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

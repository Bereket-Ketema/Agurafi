import { challengesData } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Challenges() {
  return (
    <section id="challenges" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2.5 inline-block rounded-full border border-primary/25 bg-primary/10 px-3.5 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Problem &amp; Resolution
          </span>
          <h2 className="text-balance font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Client Challenges &amp; <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            How we systematically eliminate growth bottlenecks for our clients.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challengesData.map((item, index) => (
            <Reveal key={item.challenge} delay={index * 60}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-card p-5 transition-all duration-300 hover:border-white/20">
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="size-4 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Hurdle</span>
                  </div>
                  <h3 className="mt-2 font-heading text-sm font-bold text-foreground">
                    {item.challenge}
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {item.challengeDetail}
                  </p>
                </div>

                {/* Solution */}
                <div className="mt-4 pt-3.5 border-t border-white/5">
                  <div className="flex items-center gap-2 text-accent">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Solution</span>
                  </div>
                  <h4 className="mt-1.5 font-heading text-xs font-bold text-foreground">
                    {item.solution}
                  </h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
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

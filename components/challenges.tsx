import { challengesData } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function Challenges() {
  return (
    <section id="challenges" className="relative py-20 lg:py-28 overflow-hidden bg-white/[0.01] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground">
            Client Challenges &amp; <span className="text-gradient-gold">Strategic Solutions</span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
            How we systematically eliminate growth bottlenecks and turn market friction into competitive momentum.
          </p>
        </Reveal>

        {/* Clean, Simple, Highly Readable 4-Card Comparative Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {challengesData.map((item, index) => (
            <Reveal key={item.challenge} delay={index * 70}>
              <div className="group flex h-full flex-col justify-between rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 sm:p-5.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)]">
                
                {/* Hurdle / Challenge */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    The Hurdle
                  </span>
                  <h3 className="mt-2 font-heading text-base sm:text-[17px] font-bold text-foreground">
                    {item.challenge}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted">
                    {item.challengeDetail}
                  </p>
                </div>

                {/* Direct Strategic Solution */}
                <div className="mt-5 pt-4.5 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-accent">
                    <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                      Strategic Solution
                    </span>
                  </div>
                  <h4 className="mt-2 font-heading text-sm sm:text-[15px] font-bold text-foreground group-hover:text-white transition-colors">
                    {item.solution}
                  </h4>
                  <p className="mt-1.5 text-[11.5px] sm:text-xs leading-relaxed text-muted">
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

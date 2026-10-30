import { whyChooseUsData, aboutStats } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#09352e] via-[#062923] to-[#04201c] p-7 sm:p-10 lg:p-14 shadow-2xl">
          
          {/* Subtle gold ambient glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 size-[400px] rounded-full opacity-15 blur-[90px]"
            style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
          />

          <Reveal className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Core Differentiators
            </span>
            <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[42px] text-foreground">
              Why Partner With <span className="text-gradient-gold">Agurafi</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Creative ambition paired with engineering and performance discipline. We treat your growth as our mandate.
            </p>
          </Reveal>

          {/* 4 Differentiators */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whyChooseUsData.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="flex h-full flex-col justify-start rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07]">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-accent shadow-sm">
                    <item.icon className="size-5.5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Experience & Credibility Bar */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur-md">
            {aboutStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col text-center sm:text-left ${
                  i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : "sm:pl-4"
                }`}
              >
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-accent">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

import { whyChooseUsData } from "@/lib/data"
import { Reveal } from "@/components/reveal"

const differentiatorThemes = [
  { iconBox: "bg-primary/15 text-primary border-primary/30", borderHover: "hover:border-primary/50" },
  { iconBox: "bg-[#3b82f6]/15 text-[#60a5fa] border-[#3b82f6]/30", borderHover: "hover:border-[#3b82f6]/50" },
  { iconBox: "bg-[#ff6b4a]/15 text-[#ff8f75] border-[#ff6b4a]/30", borderHover: "hover:border-[#ff6b4a]/50" },
  { iconBox: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", borderHover: "hover:border-emerald-500/50" },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] border border-white/15 bg-gradient-to-br from-[#0c433b] via-[#07302a] to-[#04201c] p-6 sm:p-10 lg:p-14 shadow-2xl">
          {/* Curved Ambient Ribbons in Background */}
          <div
            className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full opacity-20 blur-[100px]"
            style={{ background: "radial-gradient(circle, #3b82f6, transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-32 size-[420px] rounded-full opacity-18 blur-[100px]"
            style={{ background: "radial-gradient(circle, #ff6b4a, transparent 65%)" }}
          />

          <Reveal className="mb-10 max-w-xl">
            <span className="mb-2.5 inline-block rounded-full border border-primary/25 bg-primary/10 px-3.5 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Differentiators
            </span>
            <h2 className="text-balance font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Why Partner With <span className="text-gradient-gold">Agurafi</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Creative ambition paired with engineering and performance discipline.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUsData.map((item, index) => {
              const theme = differentiatorThemes[index % differentiatorThemes.length]
              return (
                <Reveal key={item.title} delay={index * 60}>
                  <div
                    className={`flex h-full flex-col justify-start rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md transition-all duration-300 ${theme.borderHover} hover:-translate-y-1.5 hover:shadow-lg`}
                  >
                    <div className={`mb-3.5 flex size-10 items-center justify-center rounded-xl border ${theme.iconBox}`}>
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="mb-1.5 font-heading text-sm font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

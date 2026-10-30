import Link from "next/link"
import { ArrowRight, Search, Palette, Code2, Rocket } from "lucide-react"
import { Reveal } from "@/components/reveal"

const capabilities = [
  {
    step: "STEP ONE",
    num: "01",
    title: "Research & Analyze",
    description:
      "Deep audit of existing workflows, market positioning, and audience data to map a high-ROI digital architecture.",
    icon: Search,
    href: "/services#paid-advertising",
    elevationClass: "lg:translate-y-9",
    highlight: false,
  },
  {
    step: "STEP TWO",
    num: "02",
    title: "Concept & Design",
    description:
      "Designing memorable brand identities, intuitive interfaces, and cinematic assets tailored for maximum conversion.",
    icon: Palette,
    href: "/services#branding-identity",
    elevationClass: "lg:translate-y-6",
    highlight: false,
  },
  {
    step: "STEP THREE",
    num: "03",
    title: "Engine & Integrate",
    description:
      "Building high-speed web apps and targeted performance ad funnels across TikTok, Google, and Meta Ads.",
    icon: Code2,
    href: "/services#web-mobile-development",
    elevationClass: "lg:translate-y-3",
    highlight: false,
  },
  {
    step: "STEP FOUR",
    num: "04",
    title: "Deploy & Scale",
    description:
      "Launching live campaigns, monitoring real-time performance, and scaling revenue operations without friction.",
    icon: Rocket,
    href: "/services#marketing-strategy-growth",
    elevationClass: "lg:translate-y-0",
    highlight: true,
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl text-left">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-foreground leading-tight">
            Solutions Designed for <span className="text-gradient-gold">Your Business</span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
            Structured capabilities engineered to solve core growth bottlenecks and drive sustainable business results.
          </p>
        </Reveal>

        {/* Stepped Reference Layout from Image 2 */}
        <div className="relative pt-4 pb-8">
          {/* Subtle horizontal connector guide behind cards on desktop */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[85px] -z-10 hidden border-t border-white/10 lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 items-end">
            {capabilities.map((item, index) => (
              <Reveal key={item.step} delay={index * 90} className={`w-full ${item.elevationClass}`}>
                <div
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${
                    item.highlight
                      ? "border border-primary/60 bg-gradient-to-b from-[#0e483e] to-[#072d26] shadow-[0_20px_50px_rgba(228,172,35,0.2)]"
                      : "border border-white/10 bg-gradient-to-b from-[#0a352f]/90 to-[#052621]/95 shadow-[0_16px_36px_rgba(0,0,0,0.35)] hover:border-primary/50"
                  }`}
                  style={{ minHeight: "360px" }}
                >
                  {/* Subtle Corner HUD Marks */}
                  <span className="pointer-events-none absolute top-3 left-3 size-2.5 border-t border-l border-white/25 transition-colors group-hover:border-primary/60" />
                  <span className="pointer-events-none absolute top-3 right-3 size-2.5 border-t border-r border-white/25 transition-colors group-hover:border-primary/60" />
                  <span className="pointer-events-none absolute bottom-3 left-3 size-2.5 border-b border-l border-white/25 transition-colors group-hover:border-primary/60" />
                  <span className="pointer-events-none absolute bottom-3 right-3 size-2.5 border-b border-r border-white/25 transition-colors group-hover:border-primary/60" />

                  {/* Faded Watermark Number in Bottom Right */}
                  <div className="pointer-events-none absolute -bottom-6 -right-2 select-none font-heading text-[100px] font-black leading-none text-white/[0.04] transition-colors group-hover:text-primary/[0.08]">
                    {item.num}
                  </div>

                  {/* Top Row: Step Tag & Icon */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted/80">
                        {item.step}
                      </span>
                      <div
                        className={`flex size-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                          item.highlight
                            ? "border-primary/50 bg-primary/20 text-accent shadow-[0_0_16px_rgba(228,172,35,0.25)]"
                            : "border-white/15 bg-white/5 text-accent group-hover:border-primary/40 group-hover:bg-primary/10"
                        }`}
                      >
                        <item.icon className="size-4" />
                      </div>
                    </div>

                    {/* Big Bold Number */}
                    <div className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-primary transition-colors group-hover:text-accent">
                      {item.num}
                    </div>

                    {/* Title */}
                    <h3 className="mt-3.5 font-heading text-base sm:text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action: EXPLORE -> */}
                  <div className="relative z-10 mt-6 pt-3.5 border-t border-white/5">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent transition-all duration-200 group-hover:translate-x-1 group-hover:text-white"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
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

import Link from "next/link"
import { ArrowRight, Zap, Palette, Code2, Rocket } from "lucide-react"
import { Reveal } from "@/components/reveal"

const capabilities = [
  {
    step: "STEP ONE",
    num: "01",
    title: "Targeted Customer Acquisition",
    description:
      "Transform digital ad spend into predictable revenue with precision-targeted campaigns across TikTok, Google, and Meta Ads that reach ready-to-buy audiences.",
    icon: Zap,
    href: "/services#paid-advertising",
    elevationClass: "lg:translate-y-9",
    highlight: false,
    colorTheme: {
      accentText: "text-primary group-hover:text-accent",
      borderHover: "hover:border-primary/50",
      iconBox: "border-primary/40 bg-primary/15 text-accent shadow-[0_0_16px_rgba(228,172,35,0.25)]",
      corner: "group-hover:border-primary/70",
      watermark: "group-hover:text-primary/[0.09]",
      cta: "text-primary hover:text-accent",
    },
  },
  {
    step: "STEP TWO",
    num: "02",
    title: "Brand Authority & Visual Excellence",
    description:
      "Stand out in competitive markets with premium visual identities, professional video editing, and impactful graphic design that build lasting credibility.",
    icon: Palette,
    href: "/services#branding-identity",
    elevationClass: "lg:translate-y-6",
    highlight: false,
    colorTheme: {
      accentText: "text-[#3b82f6] group-hover:text-[#60a5fa]",
      borderHover: "hover:border-[#3b82f6]/50",
      iconBox: "border-[#3b82f6]/40 bg-[#3b82f6]/15 text-[#60a5fa] shadow-[0_0_16px_rgba(59,130,246,0.25)]",
      corner: "group-hover:border-[#3b82f6]/70",
      watermark: "group-hover:text-[#3b82f6]/[0.09]",
      cta: "text-[#3b82f6] hover:text-[#60a5fa]",
    },
  },
  {
    step: "STEP THREE",
    num: "03",
    title: "High-Performance Digital Products",
    description:
      "Turn digital touchpoints into 24/7 business engines with ultra-fast modern websites and interactive applications built for conversion and scalability.",
    icon: Code2,
    href: "/services#web-mobile-development",
    elevationClass: "lg:translate-y-3",
    highlight: false,
    colorTheme: {
      accentText: "text-[#ff6b4a] group-hover:text-[#ff8f75]",
      borderHover: "hover:border-[#ff6b4a]/50",
      iconBox: "border-[#ff6b4a]/40 bg-[#ff6b4a]/15 text-[#ff8f75] shadow-[0_0_16px_rgba(255,107,74,0.25)]",
      corner: "group-hover:border-[#ff6b4a]/70",
      watermark: "group-hover:text-[#ff6b4a]/[0.09]",
      cta: "text-[#ff6b4a] hover:text-[#ff8f75]",
    },
  },
  {
    step: "STEP FOUR",
    num: "04",
    title: "Strategic Growth & Market Expansion",
    description:
      "Connect marketing initiatives to bottom-line business metrics through data-backed roadmaps, SEO compound growth, and cross-channel optimization.",
    icon: Rocket,
    href: "/services#marketing-strategy-growth",
    elevationClass: "lg:translate-y-0",
    highlight: true,
    colorTheme: {
      accentText: "text-accent",
      borderHover: "hover:border-primary/80",
      iconBox: "border-primary/40 bg-primary/25 text-accent shadow-[0_0_20px_rgba(228,172,35,0.35)]",
      corner: "group-hover:border-primary/80",
      watermark: "group-hover:text-primary/[0.12]",
      cta: "text-accent hover:text-white",
    },
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
      {/* Background multi-color ambient curved glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 size-[600px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(228,172,35,0.08), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute left-10 top-1/2 -z-10 size-[500px] rounded-full opacity-15 blur-[110px]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 -z-10 size-[500px] rounded-full opacity-15 blur-[110px]"
        style={{ background: "radial-gradient(circle, #ff6b4a, transparent 65%)" }}
      />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Strategic Capabilities
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[44px]">
            Solutions Designed for <span className="text-gradient-gold">Your Business</span>
          </h2>
          <p className="mt-3 text-pretty text-sm text-muted sm:text-base">
            Structured capabilities engineered to solve core growth bottlenecks and drive sustainable business results.
          </p>
        </Reveal>

        {/* Stepped Ranked Cards Layout */}
        <div className="relative pt-4 pb-8">
          {/* Subtle horizontal connector guide behind cards */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[85px] -z-10 hidden border-t border-white/10 lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 items-end">
            {capabilities.map((item, index) => (
              <Reveal key={item.step} delay={index * 100} className={`w-full ${item.elevationClass}`}>
                <div
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${
                    item.highlight
                      ? "border border-primary/60 bg-gradient-to-b from-[#0f4d43] to-[#08352e] shadow-[0_20px_50px_rgba(228,172,35,0.2)]"
                      : `border border-white/10 bg-gradient-to-b from-surface/90 to-surface-2/90 shadow-[0_16px_36px_rgba(0,0,0,0.35)] ${item.colorTheme.borderHover} hover:bg-surface-2`
                  }`}
                  style={{ minHeight: "390px" }}
                >
                  {/* Technical HUD Corner Brackets */}
                  <span className={`pointer-events-none absolute top-3 left-3 size-2.5 border-t border-l border-white/30 transition-colors ${item.colorTheme.corner}`} />
                  <span className={`pointer-events-none absolute top-3 right-3 size-2.5 border-t border-r border-white/30 transition-colors ${item.colorTheme.corner}`} />
                  <span className={`pointer-events-none absolute bottom-3 left-3 size-2.5 border-b border-l border-white/30 transition-colors ${item.colorTheme.corner}`} />
                  <span className={`pointer-events-none absolute bottom-3 right-3 size-2.5 border-b border-r border-white/30 transition-colors ${item.colorTheme.corner}`} />

                  {/* Huge Faded Watermark Number in Bottom Right */}
                  <div className={`pointer-events-none absolute -bottom-6 -right-3 select-none font-heading text-[120px] font-black leading-none text-white/[0.04] transition-colors ${item.colorTheme.watermark}`}>
                    {item.num}
                  </div>

                  {/* Top Row: Step Label & Circular Icon */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted/80">
                        {item.step}
                      </span>
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl border transition-all duration-300 ${item.colorTheme.iconBox}`}
                      >
                        <item.icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Big Bold Number */}
                    <div className={`mt-5 font-heading text-4xl font-extrabold tracking-tight transition-colors ${item.colorTheme.accentText}`}>
                      {item.num}
                    </div>

                    {/* Real Agurafi Solution Title */}
                    <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-white">
                      {item.title}
                    </h3>

                    {/* Real Agurafi Solution Description */}
                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-muted line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action: EXPLORE -> */}
                  <div className="relative z-10 mt-8 pt-4 border-t border-white/5">
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:translate-x-1 ${item.colorTheme.cta}`}
                    >
                      EXPLORE
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

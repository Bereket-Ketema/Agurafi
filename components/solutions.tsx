import Link from "next/link"
import { ArrowRight, Zap, Palette, Code2, Rocket } from "lucide-react"
import { Reveal } from "@/components/reveal"

const capabilities = [
  {
    num: "01",
    title: "Targeted Customer Acquisition",
    description:
      "Transform digital ad spend into predictable revenue with precision-targeted campaigns across TikTok, Google, and Meta Ads that reach ready-to-buy audiences.",
    icon: Zap,
    href: "/services#paid-advertising",
  },
  {
    num: "02",
    title: "Brand Authority & Visual Excellence",
    description:
      "Stand out in competitive markets with premium visual identities, professional video editing, and impactful graphic design that build lasting credibility.",
    icon: Palette,
    href: "/services#branding-identity",
  },
  {
    num: "03",
    title: "High-Performance Digital Products",
    description:
      "Turn digital touchpoints into 24/7 business engines with ultra-fast modern websites and interactive applications built for conversion and scalability.",
    icon: Code2,
    href: "/services#web-mobile-development",
  },
  {
    num: "04",
    title: "Strategic Growth & Market Expansion",
    description:
      "Connect marketing initiatives to bottom-line business metrics through data-backed roadmaps, SEO compound growth, and cross-channel optimization.",
    icon: Rocket,
    href: "/services#marketing-strategy-growth",
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Strategic Capabilities
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-foreground">
            Solutions Designed for <span className="text-gradient-gold">Your Business</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Structured capabilities engineered to solve core growth bottlenecks and drive sustainable business results.
          </p>
        </Reveal>

        {/* 4-Pillar Grid with Balanced Hierarchy and Consistent Alignment */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {capabilities.map((item, index) => (
            <Reveal key={item.num} delay={index * 80}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div>
                  {/* Top: Sequence Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-black text-primary/70 transition-colors group-hover:text-accent">
                      {item.num}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="size-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Description: Readable font size, comfortable line height */}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-5 border-t border-white/10">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent transition-all duration-200 group-hover:gap-2.5 group-hover:text-primary"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

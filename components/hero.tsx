import { ArrowRight, TrendingUp, Users2, Sparkles } from "lucide-react"
import { heroStats } from "@/lib/data"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-40 lg:pb-36 lg:pt-56">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1000px 600px at 78% 22%, rgba(228,172,35,0.16), transparent 60%), radial-gradient(700px 500px at 15% 85%, rgba(228,172,35,0.08), transparent 60%), linear-gradient(180deg, #083731 0%, #062a25 60%, #04201c 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 70% 30%, black 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-accent">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
            Full Digital Marketing Service
          </div>

          <h1 className="mb-6 max-w-xl text-balance font-heading text-[42px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[68px]">
            Increase Your <span className="text-gradient-gold">Reach,</span> Elevate Your Brand, and Drive More
            Sales
          </h1>

          <p className="mb-10 max-w-lg text-pretty text-lg leading-relaxed text-muted">
            Agurafi empowers brands to grow through creative visuals, strategic marketing, and data-driven
            solutions that deliver measurable results.
          </p>

          <div className="mb-14 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-[14.5px] font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(228,172,35,0.5)]"
            >
              View Our Services
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#portfolio"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Case Studies
            </a>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-12">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <h3 className="font-heading text-2xl font-extrabold sm:text-[28px]">{stat.value}</h3>
                <span className="text-[13px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[500px] lg:h-[600px]">
          <div
            className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm"
            style={{
              background: "radial-gradient(circle at 35% 30%, rgba(228,172,35,0.32), rgba(228,172,35,0.02) 70%)",
            }}
          />

          <div className="glass animate-float absolute left-0 top-4 z-30 w-[250px] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:left-2 sm:top-10 sm:w-[280px]">
            <div className="mb-1 text-[11px] uppercase tracking-wide text-muted">Campaign Performance</div>
            <div className="flex items-end justify-between">
              <span className="font-heading text-xl font-bold">Traffic Overview</span>
              <TrendingUp className="size-4 text-accent" />
            </div>
            <div className="mt-3.5 flex h-[70px] items-end gap-1.5">
              {[40, 55, 48, 70, 60, 85, 72, 95].map((height, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-[4px] bg-gradient-to-t from-primary/15 to-primary"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div
            className="glass animate-float absolute right-0 top-0 z-40 w-[170px] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:right-2 sm:top-2 sm:w-[190px]"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="mb-1 text-[11px] uppercase tracking-wide text-muted">Avg. ROI</div>
            <h4 className="font-heading text-[26px] font-bold text-accent">6.8x</h4>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-bold text-accent">
              <Sparkles className="size-3" /> +18% this quarter
            </span>
          </div>

          <div
            className="glass animate-float absolute bottom-24 right-0 z-20 w-[190px] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:bottom-32 sm:right-0 sm:w-[210px]"
            style={{ animationDelay: "2s" }}
          >
            <div className="mb-1 text-[11px] uppercase tracking-wide text-muted">Social Reach</div>
            <div className="flex items-center justify-between">
              <span className="font-heading text-xl font-bold">248K</span>
              <Users2 className="size-4 text-accent" />
            </div>
            <div className="mt-2.5 flex">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="-ml-2 size-6 rounded-full border-2 border-surface-2 bg-gradient-to-br from-primary to-[#c68c12] first:ml-0"
                />
              ))}
            </div>
          </div>

          <div
            className="glass animate-float absolute bottom-8 left-8 z-30 w-[210px] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:left-10"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="mb-1 text-[11px] uppercase tracking-wide text-muted">SEO Score</div>
            <div className="flex items-center justify-between">
              <span className="font-heading text-xl font-bold">94/100</span>
            </div>
            <span className="text-xs text-muted-foreground">Top 3% in industry</span>
          </div>
        </div>
      </div>
    </section>
  )
}

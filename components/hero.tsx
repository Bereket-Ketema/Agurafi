import { ArrowRight } from "lucide-react"

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

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-16">
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-[13px] font-semibold text-accent">
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
          Full Digital Marketing Service
        </div>

        <h1 className="mx-auto mb-6 max-w-3xl text-balance font-heading text-[42px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[68px]">
          Increase Your <span className="text-gradient-gold">Reach,</span> Elevate Your Brand, and Drive More Sales
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-pretty text-lg leading-relaxed text-muted">
          Agurafi empowers brands to grow through creative visuals, strategic marketing, and data-driven solutions
          that deliver measurable results.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  )
}

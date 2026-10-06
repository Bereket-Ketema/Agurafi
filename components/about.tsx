import { aboutHighlights, aboutStats } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="px-6 pb-20 pt-10 lg:px-16 lg:pb-28 lg:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
            About Agurafi
          </span>
          <h2 className="mb-6 text-balance font-heading text-[32px] font-extrabold leading-tight lg:text-[42px]">
            Data-driven growth through strategic branding
          </h2>
          <p className="mb-4 text-pretty text-[16.5px] leading-relaxed text-muted">
            Agurafi is a digital marketing agency focused on building strong brands and driving business growth
            through creative and data-driven marketing strategies.
          </p>
          <p className="text-pretty text-[16.5px] leading-relaxed text-muted">
            We help businesses increase their sales, improve brand awareness, and connect with their target
            audience through modern digital solutions. Our services include social media content creation, video
            editing, graphic design, logo and brand identity design, digital advertising, and Meta Ads management.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 sm:gap-10">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <h3 className="font-heading text-3xl font-extrabold text-accent">{stat.value}</h3>
                <span className="text-[13px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-surface to-surface-2 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(228,172,35,0.22), transparent 65%)" }}
            />
            <div className="relative">
              <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
                Why Agurafi
              </span>
              <h3 className="mb-8 font-heading text-2xl font-extrabold leading-tight lg:text-[28px]">
                Built on strategy, technology, and scalability
              </h3>

              <div className="flex flex-col gap-6">
                {aboutHighlights.map((highlight) => (
                  <div key={highlight.title} className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <highlight.icon className="size-5" strokeWidth={2.25} />
                    </div>
                    <div>
                      <h4 className="mb-1 text-[16px] font-bold leading-snug">{highlight.title}</h4>
                      <p className="text-sm leading-relaxed text-muted">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

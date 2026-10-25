import { whyChooseUsData } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-2 p-6 sm:p-10 lg:p-12 shadow-xl">
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
            {whyChooseUsData.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="flex h-full flex-col justify-start rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                  <div className="mb-3.5 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

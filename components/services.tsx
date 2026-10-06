import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="services" className="px-6 pb-16 lg:px-16 lg:pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-surface via-[#0a3a33] to-[#062924] px-6 py-16 text-foreground sm:rounded-[48px] lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-surface-2/60 blur-3xl"
          />

          <div className="relative mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-3 text-balance font-heading text-[34px] font-extrabold leading-tight text-foreground lg:text-[44px]">
              What We Do
            </h2>
            <p className="text-balance text-[15px] font-semibold uppercase tracking-[0.08em] text-primary lg:text-[16px]">
              Full-service digital marketing &amp; development
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.07] hover:shadow-[0_14px_32px_rgba(0,0,0,0.25)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h4 className="mb-1.5 text-[16px] font-bold leading-snug text-foreground">{service.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

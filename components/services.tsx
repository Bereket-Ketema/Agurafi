import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="services" className="px-6 pb-16 lg:px-16 lg:pb-24">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[32px] bg-cream px-6 py-16 text-ink sm:rounded-[48px] lg:px-16 lg:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-3 text-balance font-heading text-[34px] font-extrabold leading-tight text-ink lg:text-[44px]">
              What We Do
            </h2>
            <p className="text-balance text-[15px] font-semibold uppercase tracking-[0.08em] text-[#8a6410] lg:text-[16px]">
              Full-service digital marketing &amp; development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/30 p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:bg-white/50 hover:shadow-[0_14px_32px_rgba(8,55,49,0.08)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.06] text-ink transition-colors group-hover:border-primary/30 group-hover:bg-primary/15">
                  <service.icon className="size-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h4 className="mb-1.5 text-[16px] font-bold leading-snug text-ink">{service.title}</h4>
                  <p className="text-sm leading-relaxed text-[#5c6b62]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

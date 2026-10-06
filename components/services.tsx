import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="services" className="px-4 pb-16 lg:px-10 lg:pb-24">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[32px] bg-cream px-6 py-16 text-ink sm:rounded-[48px] lg:px-16 lg:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.12em] text-[#b5820d]">
              What We Do
            </span>
            <h2 className="text-balance font-heading text-[30px] font-extrabold leading-tight text-ink lg:text-[38px]">
              Full-service digital marketing &amp; development
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-black/5 bg-white/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-[0_18px_40px_rgba(8,55,49,0.12)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-ink shadow-[0_4px_14px_rgba(228,172,35,0.4)]">
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

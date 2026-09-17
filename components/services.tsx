import { Check, Laptop, Smartphone, BarChart2 } from "lucide-react"
import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="services" className="px-4 pb-24 lg:px-10 lg:pb-36">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[32px] bg-cream px-6 py-16 text-ink sm:rounded-[48px] lg:px-16 lg:py-28">
          <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.12em] text-[#b5820d]">
            What We Do
          </span>

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl bg-[#0a2b25] shadow-[0_40px_90px_rgba(8,55,49,0.35)]">
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex flex-col gap-1">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="flex items-start gap-4 rounded-2xl p-4 transition-all hover:translate-x-1.5 hover:bg-[#eef3f1]"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-ink shadow-[0_4px_14px_rgba(228,172,35,0.4)]">
                      <Check className="size-4" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="mb-0.5 text-[16px] font-bold leading-snug text-ink">{service.title}</h4>
                      <p className="text-sm text-[#5c6b62]">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

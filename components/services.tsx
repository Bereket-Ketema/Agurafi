import { Check } from "lucide-react"
import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="services" className="px-4 pb-24 lg:px-10 lg:pb-36">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[32px] bg-cream px-6 py-16 text-ink sm:rounded-[48px] lg:px-16 lg:py-28">
          <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
            <h2 className="text-balance font-heading text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[64px]">
              What We Do
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[16.5px] leading-relaxed text-[#5c6b62]">
              Full-funnel digital marketing services built to grow your brand, your traffic, and your revenue.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-1 sm:grid-cols-2">
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
      </Reveal>
    </section>
  )
}

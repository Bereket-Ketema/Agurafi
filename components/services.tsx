import { Check, Laptop, Smartphone, BarChart2, TrendingUp } from "lucide-react"
import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

const devices = [
  { Icon: Smartphone, label: "Mobile" },
  { Icon: Laptop, label: "Desktop" },
  { Icon: BarChart2, label: "Analytics" },
]

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
                <div className="flex items-center gap-2 bg-[#082019] px-4 py-3">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/40">
                    agurafi.com/dashboard
                  </span>
                </div>
                <div className="bg-gradient-to-br from-[#0a2b25] to-[#082019] p-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.3fr_1fr]">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wide text-muted">Traffic Overview</span>
                        <TrendingUp className="size-4 text-accent" />
                      </div>
                      <svg viewBox="0 0 200 70" preserveAspectRatio="none" className="h-[70px] w-full">
                        <defs>
                          <linearGradient id="trafficFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#E4AC23" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#E4AC23" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polyline
                          points="0,55 25,40 50,48 75,25 100,35 125,15 150,28 175,10 200,20 200,70 0,70"
                          fill="url(#trafficFill)"
                          stroke="none"
                        />
                        <polyline
                          points="0,55 25,40 50,48 75,25 100,35 125,15 150,28 175,10 200,20"
                          fill="none"
                          stroke="#E4AC23"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                      <div>
                        <div className="mb-2.5 text-[11px] uppercase tracking-wide text-muted">SEO Score</div>
                        <h4 className="font-heading text-2xl font-bold text-accent">94/100</h4>
                        <span className="text-xs text-muted-foreground">Top 3% in industry</span>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: "94%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {devices.map(({ Icon, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-6 transition-colors hover:bg-white/10"
                      >
                        <Icon className="size-6 text-accent/80" />
                        <span className="text-[11px] text-white/50">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
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

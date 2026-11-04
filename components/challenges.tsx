import Image from "next/image"
import Link from "next/link"
import { challengesData } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react"

// Map each challenge to its corresponding service destination
const serviceLinks = [
  { href: "/services#paid-advertising", label: "Paid Ads & SEO" },
  { href: "/services#branding-identity", label: "Branding & Identity" },
  { href: "/services#web-mobile-development", label: "Web & Mobile Dev" },
  { href: "/services#marketing-strategy-growth", label: "Growth Strategy" },
]

export function Challenges() {
  return (
    <section id="challenges" className="relative py-14 sm:py-16 lg:py-20 overflow-hidden border-t border-white/10">
      {/* Dynamic Background Image & Subtle 3D Logo Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/showcase/workflow-pipeline-bg.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center opacity-30 lg:opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/80 to-[#04201c]" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-primary/10 via-transparent to-transparent" />
        {/* Alternative Watermark: Tech Terminal HUD Diagnostic Circuit */}
        <div className="absolute -right-12 -top-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-accent">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <rect x="25" y="25" width="150" height="150" rx="12" strokeWidth="1.5" />
            <line x1="25" y1="60" x2="175" y2="60" strokeWidth="1" />
            <circle cx="45" cy="42" r="4" fill="currentColor" />
            <circle cx="60" cy="42" r="4" fill="currentColor" />
            <circle cx="75" cy="42" r="4" fill="currentColor" />
            {/* Terminal prompt >_ */}
            <path d="M 45,95 L 65,110 L 45,125" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="75" y1="125" x2="105" y2="125" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="140" cy="110" r="16" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="mb-12 lg:mb-16 max-w-2xl text-left">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-foreground leading-[1.18]">
            Client Challenges &amp; <span className="text-gradient-gold">Strategic Solutions</span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted max-w-xl">
            How we solve common digital hurdles and turn business friction into predictable, compounding growth.
          </p>
        </Reveal>

        {/* 4 COMPACT INDIVIDUAL COMPUTER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {challengesData.map((item, index) => {
            const serviceLink = serviceLinks[index] || { href: "/services", label: "Explore Services" }
            return (
              <Reveal key={item.challenge} delay={index * 60}>
                {/* COMPACT COMPUTER CARD */}
                <div className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-white/15 bg-gradient-to-b from-[#0a352f] via-[#062621] to-[#041d19] p-2.5 sm:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(228,172,35,0.14)]">
                  
                  {/* Clean Minimalist Tech Window Top Bar */}
                  <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2 px-1">
                    
                    {/* Clean Minimalist Header */}
                    <div className="flex items-center gap-1.5 text-accent">
                      <span className="font-mono text-xs font-bold">&gt;_</span>
                      <span className="text-[11px] font-semibold tracking-wide text-foreground/85">
                        Common Growth Hurdle
                      </span>
                    </div>

                    {/* Step Marker */}
                    <span className="text-[10px] font-mono font-medium text-muted/70">
                      Case 0{index + 1}
                    </span>
                  </div>

                  {/* COMPUTER SCREEN DISPLAY (COMPACT FORMATTED TEXT) */}
                  <div className="relative flex-1 flex flex-col justify-between rounded-lg border border-white/10 bg-[#031714]/95 p-3 sm:p-3.5 text-left overflow-hidden">
                    
                    {/* Subtle ambient grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.025]"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />

                    <div>
                      {/* Top Hurdle Marker */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[11px] font-bold text-accent">
                            0{index + 1}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-amber-500/15 border border-amber-500/25 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-amber-300">
                            <span>The Challenge</span>
                          </span>
                        </div>
                      </div>

                      {/* Challenge Title & Context */}
                      <div className="mt-2.5">
                        <h3 className="font-heading text-base sm:text-[17px] font-bold text-white group-hover:text-accent transition-colors leading-snug">
                          {item.challenge}
                        </h3>
                        <p className="mt-1 text-xs text-muted leading-relaxed">
                          {item.challengeDetail}
                        </p>
                      </div>

                      {/* Transition Divider */}
                      <div className="my-2.5 flex items-center gap-2">
                        <div className="h-px flex-1 bg-white/10 group-hover:bg-primary/30 transition-colors" />
                        <span className="text-[9.5px] font-mono uppercase tracking-widest text-primary/80 flex items-center gap-1 font-semibold">
                          <ArrowRight className="size-2.5 text-primary" />
                          <span>How We Fix It</span>
                        </span>
                        <div className="h-px flex-1 bg-white/10 group-hover:bg-primary/30 transition-colors" />
                      </div>

                      {/* Agurafi Solution */}
                      <div className="rounded-md border border-primary/25 bg-primary/[0.04] p-2.5 sm:p-3 transition-colors group-hover:border-primary/40 group-hover:bg-primary/[0.06]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                          <CheckCircle2 className="size-3 text-primary" />
                          <span>Agurafi Solution</span>
                        </div>
                        <h4 className="font-heading text-sm sm:text-[15px] font-bold text-white">
                          {item.solution}
                        </h4>
                        <p className="mt-0.5 text-xs text-foreground/85 leading-relaxed">
                          {item.solutionDetail}
                        </p>
                      </div>
                    </div>

                    {/* Action Button inside screen */}
                    <div className="mt-3 pt-2.5 border-t border-white/10">
                      <Link
                        href={serviceLink.href}
                        className="group/link flex items-center justify-between w-full rounded-md border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-accent transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                      >
                        <span className="font-mono text-[10.5px] sm:text-xs">
                          Execute: {serviceLink.label}
                        </span>
                        <ArrowRight className="size-3 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    </div>

                  </div>

                  {/* Minimalist Hardware Notch */}
                  <div className="mx-auto mt-1.5 h-0.5 w-14 rounded-b-md bg-neutral-600/50" />

                </div>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}

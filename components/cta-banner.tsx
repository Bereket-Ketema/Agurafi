import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function CtaBanner() {
  return (
    <section id="insights" className="px-4 pb-24 lg:px-10 lg:pb-36">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#062a25] via-[#0b4238] to-[#0a4d3c] px-6 py-20 text-center sm:rounded-[40px] lg:px-16 lg:py-28">
          <div
            className="absolute left-1/2 top-[-250px] -z-0 size-[600px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.22), transparent 65%)" }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-balance font-heading text-[28px] font-extrabold leading-tight sm:text-4xl lg:text-[44px]">
              Partner with Agurafi for Digital Success
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              Tell us your goals, and we will create a strategic roadmap for your growth.
            </p>
            <a
              href="#contact"
              className="animate-pulse-glow mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-10 py-4 text-[15.5px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

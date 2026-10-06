import { Reveal } from "@/components/reveal"

export function Headline() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-16 lg:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(900px 480px at 50% 0%, rgba(228,172,35,0.1), transparent 65%)",
        }}
      />
      <Reveal className="mx-auto max-w-5xl text-center">
        <span className="mx-auto mb-6 block h-px w-16 bg-primary/50" />
        <h2 className="text-balance font-heading text-[34px] font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[58px]">
          Increase Your <span className="text-gradient-gold">Reach,</span> Elevate Your Brand, and Drive More Sales
        </h2>
        <span className="mx-auto mt-6 block h-px w-16 bg-primary/50" />
      </Reveal>
    </section>
  )
}

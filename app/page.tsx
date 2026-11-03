import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { ServicesOverview } from "@/components/services-overview"
import { SocialProof } from "@/components/social-proof"
import { Challenges } from "@/components/challenges"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowWeWork } from "@/components/how-we-work"
import { Team } from "@/components/team"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Distinct Pavilion Background: Rich Obsidian-Forest between Hero and Social Proof */}
        <div className="relative border-y border-white/10 bg-gradient-to-b from-[#021310] via-[#031814] to-[#021310] overflow-hidden">
          {/* Subtle ambient lighting */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/4 -z-0 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[150px]"
            style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute right-10 bottom-1/4 -z-0 size-[500px] rounded-full opacity-10 blur-[130px]"
            style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }}
          />
          <Solutions />
          <ServicesOverview />
        </div>

        <Challenges />
        <WhyChooseUs />
        <HowWeWork />
        <SocialProof />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

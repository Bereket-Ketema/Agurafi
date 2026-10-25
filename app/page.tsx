import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { ServicesOverview } from "@/components/services-overview"
import { Challenges } from "@/components/challenges"
import { WhyChooseUs } from "@/components/why-choose-us"
import { SocialProof } from "@/components/social-proof"
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
        <Solutions />
        <ServicesOverview />
        <Challenges />
        <WhyChooseUs />
        <SocialProof />
        <HowWeWork />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

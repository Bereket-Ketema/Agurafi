import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Clients } from "@/components/clients"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Clients />
      <CtaBanner />
      <Footer />
    </main>
  )
}

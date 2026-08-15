import Image from "next/image"
import { Linkedin, Instagram, Twitter, Music2 } from "lucide-react"
import { navLinks } from "@/lib/data"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com/@heni_tech19" },
]

const serviceLinks = ["Paid Advertising", "Social Media Management", "Branding & Identity", "SEO"]

export function Footer() {
  return (
    <footer id="contact" className="px-6 pb-10 pt-24 lg:px-16 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-border pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          <div>
            <Image
              src="/images/agurafi-logo.jpg"
              alt="AGURAFI Digital Marketing"
              width={160}
              height={56}
              className="h-12 w-auto rounded-md"
            />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-muted">
              A digital marketing agency helping brands grow through creative, data-driven marketing strategy.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-[10px] border border-border bg-card transition-all hover:-translate-y-0.5 hover:bg-primary/15"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Site navigation">
            <h5 className="mb-5 text-sm font-bold">Navigate</h5>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14.5px] text-muted transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h5 className="mb-5 text-sm font-bold">Services</h5>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-[14.5px] text-muted transition-colors hover:text-primary">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h5 className="mb-5 text-sm font-bold">Contact</h5>
            <ul className="flex flex-col gap-3 text-[14.5px] text-muted">
              <li>agurafidigitals@gmail.com</li>
              <li>+251 94 019 5438</li>
              <li>Addis Ababa, Bole Olompiyad</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-[13.5px] text-muted sm:flex-row">
          <span>&copy; 2026 Agurafi Digital Marketing. All rights reserved.</span>
          <span className="flex gap-2">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <span aria-hidden="true">&middot;</span>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

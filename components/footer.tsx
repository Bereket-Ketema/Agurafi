import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { navLinks, services } from "@/lib/data"

const socialLinks = [
  {
    icon: Mail,
    label: "Email Agurafi",
    href: "mailto:Agurafidigitalmarketing@gmail.com",
    containerClass: "bg-[#EA4335] text-white hover:scale-105 transition-transform shadow-md",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/agurafi_digitalmarketing?igsh=anh5ZHY4ZGxiMmpt&igsi=anh5ZHY4ZGxiMmpt",
    containerClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-105 transition-transform shadow-md",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://www.tiktok.com/@agurafidigitalmarketing?_r=1&_t=ZS-98vgRwyQPXs",
    containerClass: "bg-[#010101] text-white border border-white/20 hover:scale-105 transition-transform shadow-md",
  },
]

export function Footer() {
  const footerServices = services.slice(0, 6)

  return (
    <footer className="border-t border-white/10 bg-[#031815] text-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block" aria-label="AGURAFI Home">
              <Image
                src="/images/agurafi-logo.jpg"
                alt="AGURAFI Digital Marketing"
                width={160}
                height={56}
                style={{ width: "auto" }}
                className="h-11 w-auto rounded-md"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A digital marketing and engineering agency helping brands grow through creative visuals, targeted ads,
              and data-driven strategy.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex size-10 items-center justify-center rounded-xl ${social.containerClass}`}
                >
                  <social.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <nav className="lg:col-span-2 lg:col-start-5" aria-label="Footer Navigation">
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-accent">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Column */}
          <nav className="lg:col-span-3" aria-label="Services Navigation">
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-accent">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-muted transition-colors hover:text-foreground line-clamp-1"
                  >
                    {service.title.split("(")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-accent">Contact Details</h3>
            <ul className="flex flex-col gap-3.5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#EA4335]" />
                <a
                  href="mailto:Agurafidigitalmarketing@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  Agurafidigitalmarketing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:+251953464729" className="hover:text-primary transition-colors">
                  +251 95 346 4729
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Addis Ababa, Bole Olympia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Agurafi Digital Marketing. All rights reserved.</span>
          <span className="text-muted/70">
            Strategy &bull; Technology &bull; Scalability
          </span>
        </div>
      </div>
    </footer>
  )
}
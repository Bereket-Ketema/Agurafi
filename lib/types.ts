import type { LucideIcon } from "lucide-react"

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export interface TeamMember {
  name: string
  role: string
  imageSrc: string
}

export interface ClientLogo {
  name: string
  imageSrc: string
}

export interface Stat {
  value: string
  label: string
}

export interface Highlight {
  title: string
  description: string
  icon: LucideIcon
}

import type { LucideIcon } from "lucide-react"

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  imageSrc?: string
  videoSrc?: string
  videoPoster?: string
  problem?: string
  solution?: string
  deliverables?: string[]
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

export interface SolutionItem {
  title: string
  description: string
  icon: LucideIcon
  badge: string
}

export interface ChallengeSolutionItem {
  challenge: string
  challengeDetail: string
  solution: string
  solutionDetail: string
  icon: LucideIcon
}

export interface WhyChooseUsItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface WorkStepItem {
  step: string
  title: string
  description: string
  details: string
}

export interface ProductItem {
  id: string
  title: string
  category: string
  description: string
  features: string[]
  badge?: string
  turnaround?: string
  icon: LucideIcon
  imageSrc?: string
}

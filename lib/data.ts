import type { ClientLogo, NavLink, Service, Stat, TeamMember } from "@/lib/types"

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export const heroStats: Stat[] = [
  { value: "120+", label: "Brands We Work With" },
  { value: "6.8x", label: "Avg. ROAS Lift" },
  { value: "98%", label: "Client Retention" },
]

export const aboutStats: Stat[] = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Specialists on Team" },
  { value: "10", label: "Industries Served" },
]

export const services: Service[] = [
  {
    title: "Paid Advertising (TikTok, Google & Meta Ads)",
    description: "Creating and managing performance campaigns to increase reach, leads, and sales.",
  },
  {
    title: "Social Media Management",
    description: "Content calendars, community management, and platform-native creative.",
  },
  {
    title: "Social Media Marketing",
    description: "Creating and managing engaging content to grow your online presence and reach your audience.",
  },
  {
    title: "Branding & Brand Identity",
    description: "Strong brand strategies, logos, visual identities, and designs that help businesses stand out.",
  },
  {
    title: "Video Editing & Motion Design",
    description: "Editing high-quality promotional videos, advertisements, and social media content.",
  },
  {
    title: "Graphic Design",
    description: "Designing posters, marketing materials, social media posts, and other visual assets.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Technical, content, and authority-building strategies that compound organic visibility.",
  },
  {
    title: "Marketing Strategy & Growth Solutions",
    description: "Data-driven strategies to improve brand awareness, customer engagement, and business growth.",
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: "Zeyid Alem",
    role: "Founder & General Manager",
    imageSrc: "/images/Ziyad_Alem.jpg",
  },
  {
    name: "Henok Fasika",
    role: "Website Developer & Digital Marketer",
    imageSrc: "/images/Henok_Fasika.jpg",
  },
  {
    name: "Abubeker",
    role: "Graphic Designer & Video Editor",
    imageSrc: "/images/Abubeker2.jpg",
  },
  {
    name: "Abubeker",
    role: "Video Editor & Graphic Designer",
    imageSrc: "/images/Abubeker_graphics.jpg",
  },
]

export const clientLogos: ClientLogo[] = [
  { name: "Simple", imageSrc: "/images/Simple.png" },
  { name: "Mela", imageSrc: "/images/mela.png" },
  { name: "Yegna", imageSrc: "/images/Yegna.png" },
  { name: "Zefir", imageSrc: "/images/Zefir.png" },
  { name: "Eye", imageSrc: "/images/eye.png" },
  { name: "Visa", imageSrc: "/images/visa.png" },
]

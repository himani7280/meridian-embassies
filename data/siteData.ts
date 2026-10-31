export interface NavLink {
  label: string;
  href: string;
}

export interface SiteData {
  brand: { name: string; tagline: string };
  nav: NavLink[];
  cta: NavLink;
  quickLinks: NavLink[];
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    address: string;
    officeAddress: string;
    mapLink: string;
    mapEmbed: string;
    replyTime: string;
    ctaPhone: string;
    ctaPhoneHref: string;
  };
  social: { name: "Facebook" | "Instagram" | "LinkedIn"; href: string }[];
  legal: NavLink[];
}

export interface HomeData {
  hero: {
    titleLine1: string;
    titleAccent: string;
    button: NavLink;
  };
  about: {
    eyebrow: string;
    title: string;
    titleLine2: string;
    titleAccent: string;
    text: string;
    statValue: number;
    statSuffix: string;
    statLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
    button: NavLink;
  };
  process: { eyebrow: string; title: string; titleAccent: string };
  testimonials: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
  };
  cta: {
    watermark: string;
    titleLine1: string;
    titleAccent: string;
    titleEnd: string;
    text: string;
    label: string;
  };
}

export type IconName =
  | "graduation"
  | "file-user"
  | "file-check"
  | "signpost"
  | "users"
  | "globe"
  | "clipboard-user"
  | "clipboard-list"
  | "home"
  | "building"
  | "headset"
  | "trending-up"
  | "message";

export interface HighlightService {
  id: number;
  icon: IconName;
  title: string;
  text: string;
  href: string;
}

export interface CounsellingItem extends HighlightService {
  image: string;
  side: "left" | "right";
}

export interface ServicesData {
  highlights: HighlightService[];
  counselling: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
    items: CounsellingItem[];
  };
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface ServiceDetailData {
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
    image: string;
    features: { icon: IconName; label: string }[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
    items: { icon: IconName; title: string; text: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    steps: { number: string; icon: IconName; title: string; text: string }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
    image: string;
    points: string[];
  };
  cta: {
    eyebrow: string;
    title: string;
    titleLine2: string;
    titleAccent: string;
    text: string;
    image: string;
    button: NavLink;
  };
}

export interface VisaSection {
  id: number;
  eyebrow: string;
  title: string;
  titleLine2?: string;
  titleAccent: string;
  titleEnd?: string;
  text: string;
  image: string;
  alt: string;
  imageSide: "left" | "right";
  tone: "white" | "tint";
}

export interface NewsSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface NewsPost {
  id: number;
  slug: string;
  date: string;
  title: string;
  titleAccent: string;
  excerpt: string;
  image: string;
  cover: string;
  sections: NewsSection[];
}

export interface ContactSubmission {
  id: string;
}

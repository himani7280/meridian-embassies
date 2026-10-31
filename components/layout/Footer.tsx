"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import type { SiteData } from "@/data/siteData";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { Reveal } from "@/components/motion/Reveal";

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function Footer({ site }: { site: SiteData }) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  function isActive(href: string) {
    if (href === "/") return pathname === "/" || pathname === "/home";
    return pathname === href || pathname.startsWith(href);
  }

  return (
    <footer className="bg-(color:--color-navy-900) text-white/80">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_1fr_1.35fr] lg:gap-0 lg:px-10 lg:py-16">
        <Reveal className="lg:pr-12">
          <Link href="/" aria-label="The Meridian - Home" className="inline-block">
            <Image
              src="/img/logo-w.webp"
              alt="The Meridian - Embassies & Consulates"
              width={1853}
              height={462}
              className="h-14 w-auto sm:h-16"
            />
          </Link>
          <p className="mt-8 max-w-[300px] text-[15px] leading-7 text-white/70">
            {site.brand.tagline}
          </p>
          <ul className="mt-6 flex items-center gap-3">
            {site.social.map((s) => {
              const Cmp = SOCIAL_ICONS[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/35 text-white transition-all duration-300 hover:-translate-y-1 hover:border-(color:--color-brand) hover:bg-(color:--color-brand)"
                  >
                    <Cmp className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:border-l lg:border-white/15 lg:px-14">
          <h3 className="font-(family-name:--family-title) text-xl font-bold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {site.quickLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={
                      active
                        ? "relative inline-block pb-1 text-[15px] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-(color:--color-brand)"
                        : "relative inline-block pb-1 text-[15px] text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-(color:--color-brand) after:transition-all after:duration-200 hover:after:w-full"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="lg:border-l lg:border-white/15 lg:pl-14">
          <h3 className="font-(family-name:--family-title) text-xl font-bold text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-5">
            <li className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-(color:--color-brand-400) text-white">
                <Phone className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={1.5} />
              </span>
              <a href={site.contact.phoneHref} className="text-[15px] text-white hover:underline">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-(color:--color-brand-400) text-white">
                <Mail className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <a
                href={`mailto:${site.contact.email}`}
                className="break-all text-[15px] text-white hover:underline"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-(color:--color-brand-400) text-white">
                <MapPin className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={1.5} />
              </span>
              <address className="max-w-[280px] pt-0.5 text-[15px] not-italic leading-7 text-white">
                {site.contact.address}
              </address>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/70 sm:flex-row sm:px-6 lg:px-10">
          <p>
            © {year} {site.brand.name}. All Rights Reserved. Powered by{" "}
            <a
              href="https://lestow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white hover:underline"
            >
              Lestow
            </a>
          </p>
          <ul className="flex items-center">
            {site.legal.map((l, i) => (
              <li
                key={l.label}
                className={i > 0 ? "ml-5 border-l border-white/25 pl-5" : undefined}
              >
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

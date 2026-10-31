"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import type { NavLink } from "@/data/siteData";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

interface HeaderProps {
  nav: NavLink[];
  cta: NavLink;
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "/home";
  return pathname === href || pathname.startsWith(href);
}

export function Header({ nav, cta }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-(color:--color-brand)"
      />
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300",
          scrolled ? "shadow-(--shadow-soft)" : "shadow-none",
        )}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[90px] lg:gap-5 lg:px-6 xl:h-[100px] xl:gap-6 xl:px-10">
          <Link href="/" aria-label="The Meridian - Home" className="shrink-0">
            <Image
              src="/img/logo.webp"
              alt="The Meridian - Embassies & Consulates"
              width={1853}
              height={462}
              priority
              className="h-11 w-auto sm:h-[52px] lg:h-[50px] xl:h-[64px]"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden min-w-0 lg:block">
            <ul className="flex items-center gap-2 lg:gap-2 xl:gap-6">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "block whitespace-nowrap py-2 text-[13px] font-medium transition-colors duration-200 xl:text-[15px]",
                        active ? "text-(color:--color-brand)" : "text-(color:--color-navy-900) hover:text-(color:--color-brand)",
                      )}
                    >
                      {item.label}
                    </Link>
                    {active ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-[2px] left-0 h-[2px] w-full rounded bg-(color:--color-brand)"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href={cta.href}
              className="group hidden items-center gap-2 rounded-md xl:gap-3 bg-gradient-to-b from-(color:--color-brand-400) to-(color:--color-brand-700) whitespace-nowrap px-5 py-3 mr-2 text-sm font-medium text-white shadow-(--shadow-glow) xl:px-5 xl:py-3 xl:text-[15px] transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              {cta.label}
              <ArrowRight
                className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-md border border-(color:--color-navy)/15 text-(color:--color-navy) transition-colors hover:bg-(color:--color-navy-50) lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

      </header>
      <AnimatePresence>
        {open ? (
          <div key="mobile-menu" className="lg:hidden">
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] bg-black/50"
            />
            <motion.aside
              role="dialog"
              aria-label="Main navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 top-0 z-[90] flex h-full w-[82%] max-w-[340px] flex-col bg-white shadow-2xl"
            >
              <div className="flex h-[76px] items-center justify-between border-b border-(color:--color-navy)/10 px-4">
                <Link href="/" aria-label="The Meridian - Home">
                  <Image
                    src="/img/logo.webp"
                    alt="The Meridian - Embassies & Consulates"
                    width={1853}
                    height={462}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-md border border-(color:--color-navy)/15 text-(color:--color-navy) transition-colors hover:bg-(color:--color-navy-50)"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
                {[...nav, cta].map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium",
                          active
                            ? "bg-(color:--color-brand-50) text-(color:--color-brand)"
                            : "text-(color:--color-navy-900) hover:bg-(color:--color-navy-50)",
                        )}
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 opacity-60" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

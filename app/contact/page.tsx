import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { getSite, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about visa, passport or travel services? Get in touch with The Meridian team.",
};

export default async function ContactPage() {
  const { contact } = await getSite();

  const rows = [
    {
      icon: Phone,
      label: "Call Us",
      value: contact.phone,
      href: contact.phoneHref,
      note: undefined,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: contact.email,
      href: `mailto:${contact.email}`,
      note: contact.replyTime,
    },
    {
      icon: MapPin,
      label: "Our Location",
      value: contact.officeAddress,
      href: contact.mapLink,
      note: undefined,
    },
  ];

  return (
    <>
      <PageBanner title={pageBanners.contact.title} />

      <section className="pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <SectionHeading
            eyebrow="Contact Us"
            title="Get in Touch"
            accent="With Us"
            text="Have questions about visa, passport or travel services? Our team is ready to assist you with accurate information and guidance."
            textClassName="max-w-[520px] text-lg"
            className="lg:[&_h2]:text-[3.4rem]"
          />

          <Stagger className="divide-y divide-(color:--color-navy)/10" stagger={0.12}>
            {rows.map((r) => (
              <StaggerItem key={r.label}>
                <a
                  href={r.href}
                  {...(r.label === "Our Location"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-5 py-5 first:pt-0 last:pb-0"
                >
                  <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-(color:--color-navy-100) text-(color:--color-brand) transition-all duration-300 group-hover:bg-(color:--color-brand) group-hover:text-white sm:h-[74px] sm:w-[74px]">
                    <r.icon className="h-7 w-7" fill="currentColor" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] text-(color:--color-mute)">{r.label}</span>
                    <span className="block break-words font-(family-name:--family-title) text-xl font-bold text-(color:--color-navy) transition-colors group-hover:text-(color:--color-brand) sm:text-[1.5rem]">
                      {r.value}
                    </span>
                    {r.note ? (
                      <span className="block text-[15px] text-(color:--color-mute)">{r.note}</span>
                    ) : null}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto grid w-full max-w-[1320px] gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <Reveal direction="left">
            <div className="h-full rounded-sm bg-[#f3f6fb] p-6 sm:p-9">
              <SectionHeading
                eyebrow="Send Us a Message"
                title="We’d Love to"
                accent="Hear from You"
                inline
                text="Fill out the form and our team will get back to you soon with the information you need."
                className="mb-7"
              />
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="group relative min-h-[320px] overflow-hidden rounded-sm shadow-(--shadow-soft) lg:h-full">
              <Image
                src="/img/contact-passport.webp"
                alt="Indian passport and boarding pass on a world map"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Our Location"
              title="Visit Our"
              accent="Office"
              inline
              text="You can visit our office for in-person support and guidance regarding visa, passport and other travel services."
              textClassName="max-w-[460px] text-lg"
            />
            <Reveal delay={0.2} className="mt-7">
              <div className="flex items-center gap-5 bg-[#f1f5fa] p-5 sm:p-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-(color:--color-navy-100) text-(color:--color-brand)">
                  <MapPin className="h-7 w-7" fill="currentColor" strokeWidth={1.5} />
                </span>
                <address className="not-italic">
                  <span className="block text-[15px] text-(color:--color-mute)">Address</span>
                  <span className="block font-(family-name:--family-title) text-lg font-bold leading-snug text-(color:--color-navy) sm:text-xl">
                    {contact.officeAddress}
                  </span>
                </address>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="relative aspect-[663/398] overflow-hidden rounded-sm shadow-(--shadow-soft)">
              <iframe
                title="Map showing our office location in New York, USA"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}





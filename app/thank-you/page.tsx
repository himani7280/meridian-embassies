import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting us. We will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-20 text-center">
      <div className="max-w-[520px]">
        <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
        </span>

        <h1 className="font-(family-name:--family-title) text-4xl font-extrabold tracking-tight text-(color:--color-navy) sm:text-5xl">
          Thank You!
        </h1>
        <p className="mt-4 text-lg leading-7 text-(color:--color-mute)">
          Your message has been received. Our team will get back to you within{" "}
          <strong className="text-(color:--color-navy)">24 hours</strong>.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-(color:--color-brand-400) to-(color:--color-brand-700) px-6 py-3 text-sm font-semibold text-white shadow-(--shadow-glow) transition-all duration-300 hover:-translate-y-0.5"
          >
            Back to Home
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-(color:--color-navy)/20 px-6 py-3 text-sm font-semibold text-(color:--color-navy) transition-all duration-300 hover:bg-(color:--color-navy-50)"
          >
            Contact Again
          </Link>
        </div>
      </div>
    </section>
  );
}


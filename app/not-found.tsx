import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-20 text-center">
      <div>
        <p className="font-[family-name:Manrope,system-ui,sans-serif] text-7xl font-extrabold text-[#dc3a1f] sm:text-8xl">404</p>
        <h1 className="mt-4 font-[family-name:Manrope,system-ui,sans-serif] text-3xl font-extrabold text-[#043468] sm:text-4xl">
          This page took a different flight
        </h1>
        <p className="mx-auto mt-3 max-w-md text-[#6b7384]">
          The page you are looking for does not exist or has moved. Let us get you back on
          track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <Link href="/contact" className="font-semibold text-[#043468] underline-offset-4 hover:underline">
            Contact our team
          </Link>
        </div>
      </div>
    </section>
  );
}

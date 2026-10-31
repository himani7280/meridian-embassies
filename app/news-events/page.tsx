import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getNews, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function currentDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Latest news, travel updates and important information related to visa, passport and international travel.",
};

export default async function BlogPage() {
  const posts = await getNews();

  return (
    <>
      <PageBanner title={pageBanners.blog.title} />

      <section className="pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="News & Events"
            title="Latest"
            accent="News & Updates"
            inline
            text="Stay informed with the latest news, travel updates and important information related to visa, passport and international travel."
            textClassName="max-w-[640px] text-lg"
          />

          <Stagger className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:mt-14" stagger={0.12}>
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <article className="group">
                  <Link
                    href={`/news-events-details?slug=${post.slug}`}
                    className="block overflow-hidden rounded-sm shadow-(--shadow-card)"
                    aria-label={`${post.title} ${post.titleAccent}`}
                  >
                    <span className="relative block aspect-[613/363]">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 640px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </span>
                  </Link>
                  <time dateTime={new Date().toISOString()} className="mt-5 block px-1 text-[15px] text-(color:--color-mute)">
                    {currentDate()}
                  </time>
                  <h3 className="mt-2 max-w-[460px] px-1 font-(family-name:--family-title) text-[1.4rem] font-bold leading-snug text-(color:--color-navy) transition-colors group-hover:text-(color:--color-brand) sm:text-[1.6rem]">
                    <Link href={`/news-events-details?slug=${post.slug}`}>
                      {post.title} {post.titleAccent}
                    </Link>
                  </h3>
                  <Link
                    href={`/news-events-details?slug=${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 px-1 font-semibold text-(color:--color-brand)"
                  >
                    Read More
                    <ArrowRight
                      className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1.5"
                      strokeWidth={2}
                    />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}




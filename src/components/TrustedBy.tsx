import { CLIENT_LOGOS, STATS, TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function TrustedBy() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="section-pad border-t border-border">
      <div className="container-x">
        <SectionHeading
          eyebrow="Trusted by businesses"
          title="Built for Indian SMBs that want real results"
          description="From clinics and classrooms to factories and storefronts — we help businesses adopt AI with clarity and confidence."
        />

        <div className="mt-12 overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-10">
            {logos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-12 min-w-[140px] items-center justify-center text-sm font-bold tracking-[0.14em] text-primary/35 uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-surface/60 px-5 py-6 text-center">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary">
            <span className="text-accent">★★★★★</span>
            <span>4.9 Google Reviews</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-muted">
            Based on verified client feedback
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 2).map((item) => (
            <figure
              key={item.name}
              className="rounded-[1.5rem] border border-border bg-white p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.initials}
                </div>
                <div>
                  <figcaption className="text-sm font-semibold text-primary">
                    {item.name}
                  </figcaption>
                  <p className="text-xs text-muted">
                    {item.role}, {item.company}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5 text-accent" aria-label="5 star rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                “{item.review}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

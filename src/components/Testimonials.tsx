import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What business owners say"
          description="Real feedback from founders and operators who trust us with their growth."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(11,11,11,0.4)] md:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-sm font-bold text-primary ring-1 ring-border">
                  {item.initials}
                </div>
                <div>
                  <figcaption className="font-semibold text-primary">{item.name}</figcaption>
                  <p className="text-sm text-muted">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-0.5 text-accent" aria-label={`${item.rating} star rating`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <blockquote className="mt-4 text-[15px] leading-relaxed text-muted">
                “{item.review}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

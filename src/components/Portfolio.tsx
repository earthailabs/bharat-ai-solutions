import { PORTFOLIO } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Portfolio() {
  return (
    <section id="work" className="section-pad bg-surface/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent work across industries"
          description="Modern builds with clear timelines and measurable client outcomes."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.5rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-34px_rgba(11,11,11,0.45)]"
            >
              <div
                className="relative h-44 overflow-hidden p-5"
                style={{
                  background: `linear-gradient(145deg, ${project.accent} 0%, #111827 100%)`,
                }}
              >
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 35%), radial-gradient(circle at 80% 0%, rgba(37,99,235,0.45), transparent 40%)",
                  }}
                />
                <div className="relative h-full rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-[2px] transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-2/3 rounded-full bg-white/35" />
                    <div className="h-2 w-1/2 rounded-full bg-white/20" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-lg bg-white/15" />
                      <div className="h-10 rounded-lg bg-white/10" />
                      <div className="h-10 rounded-lg bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                    {project.industry}
                  </p>
                  <p className="text-xs text-muted">{project.timeline}</p>
                </div>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

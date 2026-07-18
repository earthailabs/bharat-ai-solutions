import { PROCESS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-pad bg-surface/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from idea to launch"
          description="Seven simple steps. Transparent communication at every stage."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROCESS.map((item) => (
            <li
              key={item.step}
              className="rounded-[1.5rem] border border-border bg-white p-6"
            >
              <p className="text-sm font-bold tracking-wide text-accent">{item.step}</p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import {
  Bot,
  Clapperboard,
  Globe2,
  MapPinned,
  Sparkles,
  Workflow,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const ICONS = [Globe2, Clapperboard, Workflow, Bot, MapPinned, Sparkles];

export function Services() {
  return (
    <section id="services" className="section-pad bg-surface/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to grow with AI"
          description="Clear offerings. Practical outcomes. No unnecessary complexity."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index] ?? Sparkles;
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_24px_50px_-30px_rgba(37,99,235,0.45)] md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppButton
                    location={`service-${service.id}`}
                    label="Talk on WhatsApp"
                    variant="outline"
                    message={`Hi Bharat AI Solutions, I'm interested in ${service.title}.`}
                    className="w-full"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

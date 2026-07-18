import {
  BadgeIndianRupee,
  Building2,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

const ICONS = [Sparkles, BadgeIndianRupee, Rocket, ShieldCheck, Headphones, Building2];

export function WhyUs() {
  return (
    <section id="why-us" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Bharat AI Solutions"
          title="A reliable partner for AI that actually ships"
          description="Premium craft, practical pricing, and support that stays close after launch."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, index) => {
            const Icon = ICONS[index] ?? Sparkles;
            return (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-white p-6 transition-colors duration-300 hover:border-accent/25 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

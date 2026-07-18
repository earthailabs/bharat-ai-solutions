import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent packages. Premium delivery."
          description="Start simple or scale into automation — every plan is designed for Indian businesses."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {PRICING.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-[1.5rem] border p-6 transition-all duration-300 hover:-translate-y-1 md:p-7 ${
                plan.featured
                  ? "border-accent bg-primary text-white shadow-[0_30px_60px_-35px_rgba(37,99,235,0.65)]"
                  : "border-border bg-white hover:border-accent/20"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                  Most popular
                </span>
              )}

              <h3
                className={`text-lg font-bold tracking-tight ${
                  plan.featured ? "text-white" : "text-primary"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.featured ? "text-white/65" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6">
                <p className="text-3xl font-bold tracking-tight">{plan.price}</p>
                <p
                  className={`mt-1 text-xs ${
                    plan.featured ? "text-white/50" : "text-muted"
                  }`}
                >
                  {plan.period}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured ? "text-[#7dffb0]" : "text-accent"
                      }`}
                      strokeWidth={2.25}
                    />
                    <span className={plan.featured ? "text-white/85" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <WhatsAppButton
                  location={`pricing-${plan.id}`}
                  label={plan.id === "enterprise" ? "Get a custom quote" : "Get started"}
                  variant={plan.featured ? "whatsapp" : "outline"}
                  message={`Hi Bharat AI Solutions, I'm interested in the ${plan.name} package.`}
                  fullWidth
                  className={
                    plan.featured
                      ? ""
                      : "border-border hover:border-accent/30"
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

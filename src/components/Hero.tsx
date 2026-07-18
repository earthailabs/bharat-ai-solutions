import { SITE } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-24 md:pt-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            {SITE.name}
          </p>
          <h1
            className="animate-fade-up mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl md:leading-[1.05]"
            style={{ animationDelay: "80ms" }}
          >
            AI Solutions That Grow Your Business
          </h1>
          <p
            className="animate-fade-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            We build AI-powered websites, marketing content, automation systems,
            chatbots and business solutions that save time, increase revenue and
            reduce manual work.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <WhatsAppButton location="hero" size="lg" />
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-6 text-[15px] font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-surface"
            >
              View Our Work
            </a>
          </div>

          <p
            className="animate-fade-up mt-5 text-sm font-medium text-muted"
            style={{ animationDelay: "320ms" }}
          >
            Starting from{" "}
            <span className="font-bold text-primary">{SITE.startingPrice}</span>
          </p>
        </div>

        <div
          className="animate-fade-up relative mx-auto mt-14 max-w-5xl md:mt-16"
          style={{ animationDelay: "400ms" }}
        >
          <div className="animate-float pointer-events-none absolute -inset-x-10 -top-8 -z-10 h-40 rounded-full bg-accent/10 blur-3xl" />
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[0_40px_80px_-40px_rgba(11,11,11,0.35)] md:rounded-[2rem]">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 rounded-full bg-white px-3 py-1 text-center text-[11px] text-muted">
          bharataisolutions.com
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">
            Business dashboard
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-primary">
            Grow faster with AI that works for you
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Websites, automation, and intelligent agents — designed for Indian
            businesses that want results, not complexity.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { label: "Leads this week", value: "128" },
              { label: "Automation saved", value: "42 hrs" },
              { label: "Conversion rate", value: "18.4%" },
              { label: "Response time", value: "< 1 min" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-surface/80 p-4"
              >
                <p className="text-xs text-muted">{item.label}</p>
                <p className="mt-1 text-xl font-bold tracking-tight text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[linear-gradient(160deg,#0B0B0B_0%,#1a1a1a_55%,#0B0B0B_100%)] p-6 text-white md:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/70">AI Agent Activity</p>
            <span className="rounded-full bg-whatsapp/20 px-2.5 py-1 text-[11px] font-semibold text-[#7dffb0]">
              Live
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {[
              {
                title: "WhatsApp bot qualified a lead",
                meta: "Restaurant inquiry · just now",
              },
              {
                title: "Appointment booked for clinic",
                meta: "Healthcare · 2 min ago",
              },
              {
                title: "Follow-up sequence started",
                meta: "Real estate · 8 min ago",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-white/55">{item.meta}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold">
            Average client result: more leads, less manual work
          </div>
        </div>
      </div>
    </div>
  );
}

import { SITE } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const FOOTER_SERVICES = [
  "AI Websites",
  "AI Marketing Videos",
  "Business Automation",
  "AI Agents & Chatbots",
  "SEO & Google Business",
  "Custom AI Software",
];

const QUICK_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/80">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-[11px] font-bold text-white">
                BA
              </span>
              <span className="font-bold tracking-tight text-primary">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline}. Helping Indian businesses adopt AI to grow faster.
            </p>
            <div className="mt-5">
              <WhatsAppButton location="footer" size="md" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-muted transition hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-primary">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-primary">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.location}</li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <SocialLink href="#" label="LinkedIn" />
                  <SocialLink href="#" label="Instagram" />
                  <SocialLink href="#" label="X" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="transition hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 items-center rounded-full border border-border bg-white px-3 text-xs font-semibold text-primary transition hover:border-primary/20"
    >
      {label}
    </a>
  );
}

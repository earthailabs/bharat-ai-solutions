import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-x py-16 md:py-24">
        <Link href="/" className="text-sm font-semibold text-accent hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 18, 2026</p>

        <div className="mt-10 max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            By using the {SITE.name} website and engaging our services, you agree to
            these terms.
          </p>
          <h2 className="text-xl font-bold text-primary">Services</h2>
          <p>
            We provide AI-powered websites, marketing content, automation systems,
            chatbots, SEO support, and custom software. Scope, pricing, and timelines
            are confirmed in writing before work begins.
          </p>
          <h2 className="text-xl font-bold text-primary">Payments</h2>
          <p>
            Project fees are due according to the agreed payment schedule. Custom and
            enterprise work may require milestones or deposits.
          </p>
          <h2 className="text-xl font-bold text-primary">Intellectual property</h2>
          <p>
            Upon full payment, you own the final deliverables created specifically for
            your project, except for third-party tools, fonts, libraries, or reusable
            frameworks that remain owned by their respective owners.
          </p>
          <h2 className="text-xl font-bold text-primary">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.name} is not liable for
            indirect or consequential damages arising from use of our website or
            services.
          </p>
          <h2 className="text-xl font-bold text-primary">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="font-medium text-accent" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

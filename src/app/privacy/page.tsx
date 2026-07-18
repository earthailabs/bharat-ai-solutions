import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-x py-16 md:py-24">
        <Link href="/" className="text-sm font-semibold text-accent hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 18, 2026</p>

        <div className="prose-custom mt-10 max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            {SITE.name} (“we”, “us”) respects your privacy. This policy explains what
            information we collect when you use our website and how we use it.
          </p>
          <h2 className="text-xl font-bold text-primary">Information we collect</h2>
          <p>
            When you contact us through WhatsApp or our inquiry form, we may receive
            your name, business name, phone number, and the message you send. We may
            also collect basic analytics data such as pages visited and device type if
            Google Analytics is enabled.
          </p>
          <h2 className="text-xl font-bold text-primary">How we use information</h2>
          <p>
            We use your information to respond to inquiries, deliver services, improve
            our website, and communicate about projects. We do not sell your personal
            information.
          </p>
          <h2 className="text-xl font-bold text-primary">WhatsApp communication</h2>
          <p>
            Conversations started via WhatsApp are subject to WhatsApp’s own terms and
            privacy practices in addition to this policy.
          </p>
          <h2 className="text-xl font-bold text-primary">Contact</h2>
          <p>
            For privacy questions, email{" "}
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

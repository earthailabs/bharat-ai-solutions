import type { Metadata } from "next";
import { Check, Clock3, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { DownloadProposalButton } from "@/components/DownloadProposalButton";
import styles from "./proposal.module.css";

export const metadata: Metadata = {
  title: "Website & PMS Proposal — Vidhya Skin & Aesthetic Clinic",
  description:
    "Website and patient management system proposal prepared by Bharat AI Solutions.",
  robots: { index: false, follow: false },
};

const scope = [
  "Premium, mobile-friendly clinic website",
  "Doctor and clinic profile with treatment pages",
  "Appointment enquiry and booking workflow",
  "Patient Management System (PMS)",
  "Patient records and appointment management",
  "WhatsApp and click-to-call integration",
  "Lead and enquiry dashboard",
  "Basic local SEO and Google-ready structure",
  "SSL, security setup and launch support",
  "Admin training and handover",
];

const process = [
  ["01", "Discovery", "Content, services and workflow finalisation"],
  ["02", "Design", "Clinic-focused visual design and approval"],
  ["03", "Build", "Website and PMS development"],
  ["04", "Launch", "Testing, training and production release"],
];

export default function VidhyaClinicProposalPage() {
  return (
    <main className={`${styles.page} min-h-screen px-4 py-8 text-[#17302d] md:py-12`}>
      <div className={`${styles.toolbar} mx-auto mb-5 flex max-w-[900px] justify-end`}>
        <DownloadProposalButton />
      </div>

      <article
        className={`${styles.sheet} mx-auto max-w-[900px] overflow-hidden rounded-[28px] border border-[#d8e4e1] bg-white`}
      >
        <header className="relative overflow-hidden bg-[#143f3a] px-7 py-9 text-white md:px-12 md:py-12">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[44px] border-white/5" />
          <div className="absolute -bottom-24 right-28 h-52 w-52 rounded-full bg-[#d9b56d]/10" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                <Sparkles aria-hidden="true" size={14} />
                Digital Transformation Proposal
              </div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
                Clinic Website
                <span className="block text-[#e1c180]">&amp; Patient Management</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                A modern digital experience designed to help your clinic attract patients,
                simplify appointments and manage everyday operations.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                Prepared for
              </p>
              <p className="mt-2 max-w-52 text-lg font-bold">
                Vidhya Skin &amp; Aesthetic Clinic
              </p>
              <div className="my-4 h-px bg-white/15" />
              <p className="text-sm text-white/70">22 July 2026</p>
            </div>
          </div>
        </header>

        <div className="space-y-10 px-7 py-9 md:px-12 md:py-12">
          <section className={`${styles.avoidBreak} grid gap-5 md:grid-cols-3`}>
            {[
              [HeartPulse, "Built for clinics", "Clear, trusted patient experience"],
              [ShieldCheck, "Secure workflow", "Responsible handling of clinic data"],
              [Clock3, "10-day delivery", "Focused execution from brief to launch"],
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof HeartPulse;
              return (
                <div key={title as string} className="rounded-2xl bg-[#f1f6f4] p-5">
                  <CardIcon aria-hidden="true" className="text-[#2e746a]" size={23} />
                  <h2 className="mt-4 font-extrabold">{title as string}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#61736f]">{text as string}</p>
                </div>
              );
            })}
          </section>

          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2e746a]">
              Project scope
            </p>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {scope.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#dcece8] text-[#21645b]">
                    <Check aria-hidden="true" size={13} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.avoidBreak} rounded-3xl border border-[#dce7e4] p-6 md:p-8`}>
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2e746a]">
                  Commercial proposal
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                  Clear and transparent pricing
                </h2>
              </div>
              <p className="text-sm text-[#687a76]">All prices in INR</p>
            </div>

            <div className="mt-6 divide-y divide-[#e3ece9]">
              <div className="flex items-start justify-between gap-5 py-4">
                <div>
                  <p className="font-bold">Clinic Website + PMS</p>
                  <p className="mt-1 text-sm text-[#687a76]">Design, development and launch</p>
                </div>
                <p className="shrink-0 text-lg font-extrabold">₹13,999</p>
              </div>
              <div className="flex items-start justify-between gap-5 py-4">
                <div>
                  <p className="font-bold">Annual Maintenance</p>
                  <p className="mt-1 text-sm text-[#687a76]">Updates, support and minor fixes</p>
                </div>
                <p className="shrink-0 text-lg font-extrabold">₹5,999</p>
              </div>
              <div className="flex items-start justify-between gap-5 py-4">
                <div>
                  <p className="font-bold">Hosting &amp; Domain</p>
                  <p className="mt-1 text-sm text-[#687a76]">Charged at actual cost</p>
                </div>
                <p className="shrink-0 text-lg font-extrabold">~₹2,500</p>
              </div>
            </div>

            <div className="mt-3 flex items-end justify-between gap-5 rounded-2xl bg-[#143f3a] p-5 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                  Estimated first-year total
                </p>
                <p className="mt-1 text-xs text-white/55">Hosting and domain may vary at actuals</p>
              </div>
              <p className="shrink-0 text-3xl font-extrabold text-[#e1c180]">₹22,498</p>
            </div>
          </section>

          <section className={`${styles.avoidBreak} grid gap-6 md:grid-cols-2`}>
            <div className="rounded-3xl bg-[#f4f7f6] p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2e746a]">
                Payment plan
              </p>
              <h2 className="mt-3 text-xl font-extrabold">50% upfront · 50% on delivery</h2>
              <p className="mt-3 text-sm leading-6 text-[#62736f]">
                The payment schedule applies to the website and PMS implementation fee.
                Annual maintenance and third-party hosting/domain charges are billed separately.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f4f7f6] p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2e746a]">
                Delivery timeline
              </p>
              <h2 className="mt-3 text-xl font-extrabold">10 working days</h2>
              <p className="mt-3 text-sm leading-6 text-[#62736f]">
                Timeline begins after the upfront payment and receipt of final clinic content,
                branding assets and required approvals.
              </p>
            </div>
          </section>

          <section className={styles.avoidBreak}>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2e746a]">
              Delivery process
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([number, title, description]) => (
                <div key={number} className="rounded-2xl border border-[#dfe9e6] p-4">
                  <p className="text-xs font-extrabold text-[#b68d3e]">{number}</p>
                  <h3 className="mt-3 font-extrabold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#687a76]">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.avoidBreak} rounded-3xl bg-[#fbf8f1] p-6 md:p-8`}>
            <h2 className="text-xl font-extrabold">Proposal validity &amp; notes</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#64736f]">
              <li>• This proposal is valid for 15 days from the date of issue.</li>
              <li>• Client will provide treatment information, photographs, logo and legal content.</li>
              <li>• Major scope additions or third-party paid integrations will be quoted separately.</li>
              <li>• Patient data access and operational responsibility remain with the clinic.</li>
            </ul>
          </section>
        </div>

        <footer className="border-t border-[#dde7e4] px-7 py-7 md:px-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xl font-extrabold text-[#143f3a]">Bharat AI Solutions</p>
              <p className="mt-1 text-sm text-[#687a76]">AI solutions for modern businesses</p>
            </div>
            <p className="max-w-md text-xs leading-5 text-[#7a8986] sm:text-right">
              Bharat AI Solutions is an initiative by Openrootai Innovations Pvt. Ltd.
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
}

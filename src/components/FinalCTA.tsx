"use client";

import { FormEvent, useState } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppUrl, SITE } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-primary px-6 py-12 text-white md:px-12 md:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/55 uppercase">
                Ready to grow with AI?
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1]">
                Let&apos;s build your next website or automation system.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
                Tell us about your business. We&apos;ll recommend the right
                package, timeline, and approach — starting from {SITE.startingPrice}.
              </p>
              <div className="mt-8">
                <WhatsAppButton location="final-cta" size="lg" />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const composed = [
      "Hi Bharat AI Solutions,",
      `My name is ${name || "—"}.`,
      `Business: ${business || "—"}.`,
      message ? `Message: ${message}` : "I'd like to discuss AI solutions for my business.",
    ].join("\n");

    trackWhatsAppClick("contact-form");
    window.open(getWhatsAppUrl(composed), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-7"
    >
      <h3 className="text-lg font-bold tracking-tight">Send a quick inquiry</h3>
      <p className="mt-1 text-sm text-white/55">
        We&apos;ll continue the conversation on WhatsApp.
      </p>

      <div className="mt-6 space-y-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Business</span>
          <input
            required
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition focus:border-accent"
            placeholder="Business name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent"
            placeholder="What do you need help with?"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-whatsapp text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
      >
        Continue on WhatsApp
      </button>
    </form>
  );
}

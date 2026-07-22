"use client";

import { Download } from "lucide-react";

export function DownloadProposalButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-[#173f3a] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f302c]"
    >
      <Download aria-hidden="true" size={17} />
      Download PDF
    </button>
  );
}

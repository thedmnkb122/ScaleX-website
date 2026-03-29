"use client";

import { useState } from "react";

export function BookForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    data.append("access_key", "92c57eeb-0bb7-4e37-b9de-21d0f06a706e");
    data.append("subject", "New Strategy Call Request – ScaleX Marketing");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto text-center py-8">
        <div className="text-green-400 text-5xl mb-4">✓</div>
        <p className="text-white font-semibold text-xl">Request sent!</p>
        <p className="text-slate-400 mt-2">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="max-w-md mx-auto flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <input name="firstName" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500" placeholder="First name" required />
        <input name="lastName" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500" placeholder="Last name" required />
      </div>
      <input name="email" type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500" placeholder="Business email" required />
      <input name="phone" type="tel" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500" placeholder="Phone number" />
      <input name="business" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500" placeholder="Your business / industry" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 mt-2"
      >
        {status === "sending" ? "Sending..." : "Book My Free Strategy Call →"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
      )}
      <p className="text-xs text-slate-500 text-center">We&apos;ll reach out within 24 hours to confirm your slot.</p>
    </form>
  );
}

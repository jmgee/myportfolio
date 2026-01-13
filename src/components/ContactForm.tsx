"use client";

import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Card>
      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="text-sm text-zinc-300">Name</label>
          <input
            name="name"
            required
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 text-sm outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Your name"
          />
        </div>

        <div className="md:col-span-1">
          <label className="text-sm text-zinc-300">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 text-sm outline-none focus:ring-2 focus:ring-white/20"
            placeholder="you@company.com"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm text-zinc-300">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Tell me what you’re building and your timeline."
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-zinc-400">
            {status === "idle" && "Response SLA: within 24–48 hours (template default)."}
            {status === "loading" && "Submitting…"}
            {status === "success" && "Submitted successfully. You can now wire this to email/CRM."}
            {status === "error" && "Submission failed. Please try again."}
          </div>
          <Button type="submit" variant="primary" disabled={status === "loading"}>
            Send message
          </Button>
        </div>
      </form>
    </Card>
  );
}
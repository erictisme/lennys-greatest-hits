"use client";

import { useState } from "react";

export default function EmailSignup({ heading }: { heading?: string } = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await res.json();

      if (data.status === "duplicate") {
        setStatus("duplicate");
      } else if (data.status === "success") {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-1">{heading || "More songs coming"}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Get notified when new albums drop.
      </p>

      {status === "success" ? (
        <p className="text-sm text-emerald-400">You&apos;re in! We&apos;ll let you know.</p>
      ) : status === "duplicate" ? (
        <p className="text-sm text-amber-400">You&apos;re already subscribed!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-border/50 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-amber-500/50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Notify me"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 mt-2">Something went wrong. Try again.</p>
      )}
    </div>
  );
}

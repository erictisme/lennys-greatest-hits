"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("sending");
    trackEvent("feedback_submitted", { has_email: !!email });

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, email }),
      });
      if (res.ok) {
        setStatus("sent");
        setMessage("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-16 max-w-xl mx-auto w-full">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Home
      </Link>

      <h1 className="text-3xl font-bold tracking-tight mb-2">Feedback</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Love a song? Hate one? Have an idea? Let us know.
      </p>

      {status === "sent" ? (
        <div className="rounded-lg border border-border/50 bg-white/[0.02] p-6 text-center">
          <p className="text-lg font-medium mb-1">Thanks for your feedback!</p>
          <p className="text-sm text-muted-foreground">We read every message.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm underline text-muted-foreground hover:text-foreground"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's on your mind?"
              rows={5}
              className="w-full px-4 py-3 text-sm bg-white/[0.06] border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-border/60 transition-colors resize-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional, if you want a reply)"
              className="w-full px-4 py-2.5 text-sm bg-white/[0.06] border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-border/60 transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending" || !message.trim()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full text-black transition-opacity disabled:opacity-50"
              style={{ backgroundColor: "#f59e0b" }}
            >
              <Send className="w-3.5 h-3.5" />
              {status === "sending" ? "Sending..." : "Send Feedback"}
            </button>
            <span className="text-xs text-muted-foreground/40">or</span>
            <a
              href="mailto:erictansongyi@gmail.com?subject=Lenny's Greatest Hits Feedback"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Email directly
            </a>
          </div>
          {status === "error" && (
            <p className="text-sm text-destructive">Something went wrong. Try emailing directly.</p>
          )}
        </form>
      )}
    </div>
  );
}

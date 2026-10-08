"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services-data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (response.ok && result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Business / Company</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      {/* Honeypot — hidden from humans, catches spam bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service of interest</Label>
        <Select name="service">
          <SelectTrigger id="service" aria-label="Service of interest">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.slug} value={service.slug}>
                {service.title}
              </SelectItem>
            ))}
            <SelectItem value="other">Other / Not sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project or needs."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="rounded-full bg-gradient-to-r from-primary to-brand-violet px-8 text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-right hover:shadow-xl hover:shadow-primary/25 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        . We will only use your information to respond to your inquiry.
      </p>

      {status === "success" && (
        <div
          className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
          role="status"
        >
          <p className="font-semibold">Thank you!</p>
          <p className="mt-1">
            Your message has been sent successfully. We have received your details and you
            will get a response from us shortly.
          </p>
        </div>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          Sorry, your message could not be sent right now. Please try again, or reach us
          directly by phone or email.
        </p>
      )}
    </form>
  );
}

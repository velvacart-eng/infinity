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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
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

      <Button type="submit" disabled={status === "submitting"}>
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
        <p className="text-sm text-green-700" role="status">
          Thank you. Your message has been received and we will respond shortly.
        </p>
      )}
    </form>
  );
}

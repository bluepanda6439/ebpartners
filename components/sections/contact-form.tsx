"use client";

import { FormEvent, useState } from "react";

import { contactEmail } from "@/lib/contact-data";
import type { SiteCopy } from "@/lib/i18n";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

type ContactFormProps = {
  copy: SiteCopy["contact"]["form"];
};

export function ContactForm({ copy }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(copy.requiredError);
      return;
    }

    setError("");
    setSubmitted(true);

    const subject = copy.subject;
    const body = [
      `${copy.bodyName}: ${form.name}`,
      `${copy.bodyEmail}: ${form.email}`,
      `${copy.bodyPhone}: ${form.phone || copy.bodyPhoneEmpty}`,
      "",
      `${copy.bodyMessage}:`,
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setForm(defaultState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-muted">
          {copy.name}
          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
          />
        </label>
        <label className="text-sm font-medium text-muted">
          {copy.phone}
          <input
            type="tel"
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, phone: event.target.value }))
            }
            autoComplete="tel"
            className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
          />
        </label>
      </div>

      <label className="text-sm font-medium text-muted">
        {copy.email}
        <input
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          autoComplete="email"
          className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
        />
      </label>

      <label className="text-sm font-medium text-muted">
        {copy.message}
        <textarea
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          rows={6}
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
          placeholder={copy.placeholder}
        />
      </label>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {submitted ? (
        <p className="text-sm text-green-700">
          {copy.success}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="w-full rounded-full bg-forest px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_-28px_rgba(12,52,39,0.9)] transition hover:bg-gold hover:text-black sm:w-auto"
        >
          {copy.send}
        </button>
      </div>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";

import { contactEmail } from "@/lib/contact-data";

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

export function ContactForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Uzupełnij wymagane pola: imię, e-mail i wiadomość.");
      return;
    }

    setError("");
    setSubmitted(true);

    const subject = "E&B Partners consultation request";
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      "",
      "Message:",
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
          Name and surname *
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
          Phone
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
        E-mail *
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
        Message *
        <textarea
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          rows={6}
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
          placeholder="Tell us briefly what happened, what deadline applies, and what kind of support you need."
        />
      </label>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {submitted ? (
        <p className="text-sm text-green-700">
          Your e-mail app should open with a prepared message.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="w-full rounded-full bg-forest px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_-28px_rgba(12,52,39,0.9)] transition hover:bg-gold hover:text-black sm:w-auto"
        >
          Send
        </button>
      </div>
    </form>
  );
}

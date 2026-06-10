"use client";

import { FormEvent, useState } from "react";

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
    setForm(defaultState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-muted">
          Imię i nazwisko *
          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-gold"
          />
        </label>
        <label className="text-sm text-muted">
          Telefon
          <input
            type="tel"
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, phone: event.target.value }))
            }
            className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-gold"
          />
        </label>
      </div>
      <label className="text-sm text-muted">
        E-mail *
        <input
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-gold"
        />
      </label>
      <label className="text-sm text-muted">
        Wiadomość *
        <textarea
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          rows={5}
          className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-gold"
        />
      </label>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {submitted ? (
        <p className="text-sm text-green-700">
          Formularz działa lokalnie. Podłączymy docelową wysyłkę w kolejnym
          kroku.
        </p>
      ) : null}

      <button
        type="submit"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-black"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

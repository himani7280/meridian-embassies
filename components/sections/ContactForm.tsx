"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2, Send } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

type Field = "name" | "email" | "phone" | "subject" | "message";
type Errors = Partial<Record<Field | "form", string>>;

const EMPTY: Record<Field, string> = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

function validate(v: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (v.subject.trim().length < 2) errors.subject = "Please add a subject.";
  if (v.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

const inputClass =
  "w-full rounded-md border border-[#043468]/15 bg-white px-4 text-[15px] text-[#043468] placeholder:text-[#6b7384]/70 outline-none transition focus:border-[#dc3a1f] focus:ring-4 focus:ring-[#dc3a1f]/10";

export function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const set = (field: Field) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrors({});

    const form = new FormData(e.currentTarget);
    if (String(form.get("company") ?? "").trim() !== "") {
      setValues(EMPTY);
      router.push("/thank-you");
      return;
    }

    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus("idle");
      return;
    }
    setValues(EMPTY);
    router.push("/thank-you");
  }

  const fieldError = (f: Field) =>
    errors[f] ? (
      <p role="alert" className="mt-1.5 text-[13px] text-[#dc3a1f]">
        {errors[f]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            className={cn(inputClass, "h-14", errors.name && "border-[#dc3a1f]")}
            type="text"
            name="name"
            placeholder="Full Name"
            aria-label="Full Name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
          />
          {fieldError("name")}
        </div>
        <div>
          <input
            className={cn(inputClass, "h-14", errors.email && "border-[#dc3a1f]")}
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email Address"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
          />
          {fieldError("email")}
        </div>
        <div>
          <input
            className={cn(inputClass, "h-14", errors.phone && "border-[#dc3a1f]")}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            aria-label="Phone Number"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
          />
          {fieldError("phone")}
        </div>
        <div>
          <input
            className={cn(inputClass, "h-14", errors.subject && "border-[#dc3a1f]")}
            type="text"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            value={values.subject}
            onChange={set("subject")}
          />
          {fieldError("subject")}
        </div>
      </div>

      <div>
        <textarea
          className={cn(inputClass, "min-h-[150px] resize-y py-4", errors.message && "border-[#dc3a1f]")}
          name="message"
          placeholder="Your Message"
          aria-label="Your Message"
          rows={5}
          value={values.message}
          onChange={set("message")}
        />
        {fieldError("message")}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md bg-gradient-to-b from-[#e8603f] to-[#c8401c] px-7 py-4 text-base font-medium text-white shadow-[0_12px_30px_-10px_rgba(220,58,31,0.55)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <AnimatePresence mode="wait">
        {errors.form ? (
          <motion.div
            key="error"
            role="alert"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 rounded-md border border-[#dc3a1f]/30 bg-[#fff4f1] p-4 text-[#c8401c]"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-[15px]">{errors.form}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

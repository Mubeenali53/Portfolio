import { useState } from "react";

// 1. Replace with your form's action URL (viewform -> formResponse)
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfIncLh7OuutHUQZgnoghvtJzGd5AoMdEoCQYH-8T5AEZsGkw/formResponse";

// 2. Replace each entry.XXXXXXXXX with the ID matching that field
//    (get these from Google Forms' "Get pre-filled link" feature)
const ENTRY_IDS = {
  name: "entry.664844565",
  email: "entry.2110167811",
  message: "entry.2098985299",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot: real users never see or fill this. If it's filled, it's a bot.
    if (e.target.elements.website?.value) {
      setStatus("sent"); // pretend success, don't actually submit
      setForm({ name: "", email: "", message: "" });
      return;
    }

    setStatus("sending");

    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, form.name);
    params.append(ENTRY_IDS.email, form.email);
    params.append(ENTRY_IDS.message, form.message);

    try {
      // Google Forms doesn't send CORS headers, so we submit "no-cors":
      // the request still goes through, but we can't read a real
      // success/failure response back — only network-level errors surface.
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl">
      <p className="text-muted leading-relaxed mb-8">
        Got an idea, a question, or just want to say hi? Drop me a message,
        and let's chat! I'm always open to new opportunities, collaborations,
        and interesting discussions.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <div>
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full bg-panel border border-panel-line px-4 py-3 text-sm text-text font-sans focus:border-signal outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="self-start inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest px-6 py-3 bg-copper text-bg hover:bg-signal transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" && (
          <p className="font-mono text-xs text-signal">
            Message sent — I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-xs text-copper">
            Something went wrong — mail me directly at syedmubeenali553@gmail.com.
          </p>
        )}
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-panel border border-panel-line px-4 py-3 text-sm text-text font-sans focus:border-signal outline-none transition-colors"
      />
    </div>
  );
}
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";

function ContactPage() {
  const nameRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const cvUrl = "/cv/CV - HUSNI RAMANDA LUBIS.pdf";

  // ✅ Auto-focus on mount
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // ✅ Optional: prefetch CV so download feels instant
  useEffect(() => {
    const prefetch = async () => {
      try {
        await fetch(cvUrl, { method: "GET" });
      } catch {
        // ignore prefetch errors (CV may not exist yet)
      }
    };
    prefetch();
  }, [cvUrl]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Download CV (hook-friendly)
  const downloadCV = useCallback(async () => {
    try {
      const res = await fetch(cvUrl);
      if (!res.ok) throw new Error("Failed to fetch CV");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Husni-Rama-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch {
      alert("CV file not found yet. Please add it to public/cv/.");
    }
  }, [cvUrl]);

  // ✅ Submit handler (replace with your backend later)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // For now: simulate sending
      await new Promise((r) => setTimeout(r, 600));

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      // Focus back to name after send
      nameRef.current?.focus();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <section className="mx-auto max-w-7xl px-12 py-24">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-white">Contact</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              Want to collaborate or discuss an opportunity? Send me a message,
              or reach out through email and social links.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Left: Contact info */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">
                Let’s Connect
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                I’m open to data-driven product work and full-stack development
                opportunities. Feel free to contact me and I’ll respond as soon
                as possible.
              </p>

              <div className="mt-6 space-y-3 text-white/80">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    className="text-red-400 hover:underline"
                    href="mailto:you@email.com"
                  >
                    you@email.com
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">LinkedIn:</span>{" "}
                  <a
                    className="text-red-400 hover:underline"
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">GitHub:</span>{" "}
                  <a
                    className="text-red-400 hover:underline"
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/your-username
                  </a>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={downloadCV}
                  className="rounded-full border-2 border-red-500 px-7 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-red-500/10"
                >
                  DOWNLOAD CV (PDF)
                </button>

                <a
                  href="mailto:you@email.com"
                  className="rounded-full bg-red-500 px-7 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-red-400"
                >
                  CONTACT ME
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">
                Send a Message
              </h3>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm text-white/80">Name</label>
                  <input
                    ref={nameRef}
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl bg-black/30 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                    type="email"
                    className="mt-2 w-full rounded-xl bg-black/30 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me what you want to build..."
                    rows={6}
                    className="mt-2 w-full resize-none rounded-xl bg-black/30 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-red-500 px-7 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {status === "sent" && (
                  <p className="text-sm text-green-400">
                    Message sent! I’ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-300">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ContactPage;

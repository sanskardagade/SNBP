import { useState } from "react";
import { subscribeNewsletter } from "../../services/api.js";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  async function submit(e) {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: "" });
    try {
      const { data } = await subscribeNewsletter({ email });
      setStatus({ loading: false, message: data.message, error: "" });
      setEmail("");
    } catch (err) {
      setStatus({
        loading: false,
        message: "",
        error: err.response?.data?.message || "Could not subscribe. Is the backend running?"
      });
    }
  }

  return (
    <section className="section-pad">
      <div className="container-width mx-auto max-w-xl text-center">
        <form onSubmit={submit} className="rounded-2xl border border-purplebrand/10 bg-white p-8 shadow-soft">
          <label className="block text-left text-sm font-bold text-purplebrand" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Stay updated with admissions, research, and student stories"
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-gold"
          />
          <button type="submit" disabled={status.loading} className="btn-primary mt-4 w-full disabled:opacity-60">
            {status.loading ? "Subscribing…" : "Subscribe"}
          </button>
          {status.message ? (
            <p className="mt-3 text-sm text-green-700" role="status">
              {status.message}
            </p>
          ) : null}
          {status.error ? (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {status.error}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

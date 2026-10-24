import { useMemo, useState } from "react";
import { programLinks } from "../../constants/navigation.js";
import { sendAdmissionEnquiry } from "../../services/api.js";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Bihar",
  "Delhi",
  "Goa",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal",
  "Other"
];

const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-purplebrand";

export default function AdmissionEnquiryForm({ compact = false }) {
  const schools = useMemo(
    () =>
      programLinks.map((s) => ({
        name: s.label,
        courses: s.children?.map((c) => c.label) ?? []
      })),
    []
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    school: schools[0]?.name ?? "",
    course: schools[0]?.courses[0] ?? "",
    consent: false
  });
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const coursesForSchool = schools.find((s) => s.name === form.school)?.courses ?? [];

  function updateField(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: type === "checkbox" ? checked : value };
      if (name === "school") {
        const list = schools.find((s) => s.name === value)?.courses ?? [];
        next.course = list[0] ?? "";
      }
      return next;
    });
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.consent) {
      setStatus({ loading: false, error: "Please agree to receive application updates.", success: "" });
      return;
    }
    setStatus({ loading: true, error: "", success: "" });
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        program: `${form.school} — ${form.course}`,
        message: `State: ${form.state}. City: ${form.city}.`
      };
      const { data } = await sendAdmissionEnquiry(payload);
      setStatus({
        loading: false,
        error: "",
        success: data.message || "Thank you. Our admissions team will contact you shortly."
      });
      setForm((prev) => ({
        ...prev,
        name: "",
        phone: "",
        email: "",
        state: "",
        city: "",
        consent: false
      }));
    } catch (err) {
      setStatus({
        loading: false,
        error: err.response?.data?.message || "Could not submit. Ensure the backend API is running.",
        success: ""
      });
    }
  }

  return (
    <form onSubmit={submit} className={`rounded-2xl bg-white shadow-soft ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
      <h2 className="font-heading text-2xl font-semibold text-purpledark">Admissions Open 2026</h2>
      <p className="mt-2 text-sm text-slate-600">Register your interest — fields marked * are required.</p>

      {status.success ? (
        <div role="status" className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
          {status.success}
        </div>
      ) : null}
      {status.error ? (
        <div role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {status.error}
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700 sm:col-span-2">
          Applicant Full Name *
          <input
            required
            name="name"
            value={form.name}
            onChange={updateField}
            className={fieldClass}
            placeholder="Enter Student Full Name*"
          />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Mobile No. *
          <input
            required
            name="phone"
            value={form.phone}
            onChange={updateField}
            className={fieldClass}
            placeholder="Enter Mobile No.*"
          />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Email Id *
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            className={fieldClass}
            placeholder="Enter Email Id*"
          />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Select State *
          <select required name="state" value={form.state} onChange={updateField} className={fieldClass}>
            <option value="">Select State*</option>
            {INDIAN_STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-700">
          Select City *
          <input
            required
            name="city"
            value={form.city}
            onChange={updateField}
            className={fieldClass}
            placeholder="Select City*"
          />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Select School *
          <select required name="school" value={form.school} onChange={updateField} className={fieldClass}>
            {schools.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-700">
          Select Course *
          <select required name="course" value={form.course} onChange={updateField} className={fieldClass}>
            {coursesForSchool.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 flex gap-3 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={updateField}
          className="mt-1 h-4 w-4 shrink-0 accent-purplebrand"
        />
        I agree to receive information regarding my submitted application by signing up with SNBP University via
        Email, SMS, Call and Whatsapp.*
      </label>

      <button
        type="submit"
        disabled={status.loading}
        className="btn-primary mt-6 w-full sm:w-auto disabled:cursor-wait disabled:opacity-60"
      >
        {status.loading ? "Submitting…" : "Register Now"}
      </button>
    </form>
  );
}

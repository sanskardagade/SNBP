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

export default function AdmissionEnquiryForm({ compact = false, variant = "default" }) {
  const isContactVariant = variant === "contact";
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

  const inputClass = isContactVariant
    ? "mt-2 w-full rounded-full border border-[#d4d4d4] bg-white px-4 py-2.5 text-sm font-normal outline-none transition focus:border-[#802030] focus:ring-2 focus:ring-[#802030]/10"
    : fieldClass;
  const labelClass = isContactVariant ? "" : "text-sm font-bold text-slate-700";
  const labelTextClass = isContactVariant ? "sr-only" : "";

  return (
    <form
      onSubmit={submit}
      className={
        isContactVariant
          ? "w-full overflow-hidden rounded-[24px] border border-[#2e1a47]/10 bg-white shadow-[0_24px_60px_rgba(46,26,71,0.18)]"
          : `rounded-2xl bg-white shadow-soft ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`
      }
    >
      {isContactVariant ? (
        <div className="bg-[#2e1a47] px-6 py-6 text-center sm:px-8 sm:py-7">
          <h2 className="placement-heading text-2xl font-medium text-white sm:text-[1.8rem]">Admissions Open 2026</h2>
          <div aria-hidden="true" className="mx-auto mt-3 h-px w-20 bg-[#c9a84c]" />
          <p className="mx-auto mt-3 max-w-[34ch] text-sm font-light leading-relaxed text-white/85">
            Share your details and our admissions team will get in touch with you.
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-heading text-2xl font-semibold text-purpledark">Admissions Open 2026</h2>
          <p className="mt-2 text-sm text-slate-600">Register your interest — fields marked * are required.</p>
        </>
      )}

      <div className={isContactVariant ? "p-5 sm:p-8" : ""}>
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

        <div className={`mt-5 grid gap-4 ${compact ? "grid-cols-2" : "sm:grid-cols-2"}`}>
          <label className={`${labelClass} ${compact ? "col-span-2" : "sm:col-span-2"} min-w-0`}>
            <span className={labelTextClass}>Applicant Full Name *</span>
            <input
              required
              name="name"
              value={form.name}
              onChange={updateField}
              className={inputClass}
              placeholder="Enter Student Full Name*"
            />
          </label>
          <label className={`${labelClass} min-w-0`}>
            <span className={labelTextClass}>Mobile No. *</span>
            <input
              required
              name="phone"
              value={form.phone}
              onChange={updateField}
              className={inputClass}
              placeholder="Enter Mobile No.*"
            />
          </label>
          <label className={`${labelClass} min-w-0`}>
            <span className={labelTextClass}>Email Id *</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              className={inputClass}
              placeholder="Enter Email Id*"
            />
          </label>
          <label className={`${labelClass} min-w-0`}>
            <span className={labelTextClass}>Select State *</span>
            <select required name="state" value={form.state} onChange={updateField} className={inputClass}>
              <option value="">Select State*</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </label>
          <label className={`${labelClass} min-w-0`}>
            <span className={labelTextClass}>Select City *</span>
            <input
              required
              name="city"
              value={form.city}
              onChange={updateField}
              className={inputClass}
              placeholder="Select City*"
            />
          </label>
          <label className={`${labelClass} min-w-0`}>
            <span className={labelTextClass}>Select School *</span>
            <select required name="school" value={form.school} onChange={updateField} className={inputClass}>
              {schools.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className={`${labelClass} min-w-0`}>
            <span className={labelTextClass}>Select Course *</span>
            <select required name="course" value={form.course} onChange={updateField} className={inputClass}>
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
          className={`btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-60 ${isContactVariant ? "" : "sm:w-auto"}`}
        >
          {status.loading ? "Submitting…" : "Register Now"}
        </button>
      </div>
    </form>
  );
}

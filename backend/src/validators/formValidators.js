export function validateContactPayload(body) {
  const base = validateCommon(body);
  if (base) return base;
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message || message.length > 5000) return "Please provide a message under 5,000 characters.";
  if (typeof body.subject === "string" && body.subject.length > 200) return "Subject is too long.";
  return null;
}

export function validateAdmissionPayload(body) {
  const base = validateCommon(body);
  if (base) return base;
  const phone = String(body.phone || "").trim();
  const program = String(body.program || "").trim();
  const message = String(body.message || "").trim();
  if (phone.length > 40 || program.length > 160 || message.length > 5000) {
    return "One or more fields are too long.";
  }
  return null;
}

export function validateNewsletterPayload(body) {
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return "Please provide a valid email address.";
  }
  return null;
}

function validateCommon(body) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!name || name.length > 120) return "Please provide a valid name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return "Please provide a valid email address.";
  }
  return null;
}

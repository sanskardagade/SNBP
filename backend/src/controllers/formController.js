import {
  admissionEnquiries,
  contactMessages,
  newsletterSubscriptions
} from "../services/submissionStore.js";
import {
  validateAdmissionPayload,
  validateContactPayload,
  validateNewsletterPayload
} from "../validators/formValidators.js";

export function postContact(req, res) {
  const error = validateContactPayload(req.body);
  if (error) return res.status(400).json({ message: error });

  const record = {
    id: Date.now(),
    name: req.body.name.trim(),
    email: req.body.email.trim(),
    subject: String(req.body.subject || "").trim(),
    message: req.body.message.trim(),
    createdAt: new Date().toISOString()
  };
  contactMessages.push(record);
  console.log(`Contact form received (${record.id})`);
  return res.status(201).json({
    message: "Thanks for contacting us. Your message has been received.",
    id: record.id
  });
}

export function postAdmission(req, res) {
  const error = validateAdmissionPayload(req.body);
  if (error) return res.status(400).json({ message: error });

  const record = {
    id: Date.now(),
    name: req.body.name.trim(),
    email: req.body.email.trim(),
    phone: String(req.body.phone || "").trim(),
    program: String(req.body.program || "").trim(),
    message: String(req.body.message || "").trim(),
    createdAt: new Date().toISOString()
  };
  admissionEnquiries.push(record);
  console.log(`Admission enquiry received (${record.id})`);
  return res.status(201).json({
    message: "Thank you. Your admission enquiry has been received.",
    id: record.id
  });
}

export function postNewsletter(req, res) {
  const error = validateNewsletterPayload(req.body);
  if (error) return res.status(400).json({ message: error });

  const email = req.body.email.trim();
  if (newsletterSubscriptions.some((s) => s.email === email)) {
    return res.status(200).json({ message: "You are already subscribed." });
  }

  const record = { id: Date.now(), email, createdAt: new Date().toISOString() };
  newsletterSubscriptions.push(record);
  console.log(`Newsletter subscription (${record.id})`);
  return res.status(201).json({
    message: "Thanks for subscribing. We'll keep you updated.",
    id: record.id
  });
}

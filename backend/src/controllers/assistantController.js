import { env } from "../config/env.js";
import { getPublishedAssistantAnswer, requestAssistantAnswer } from "../services/assistantService.js";
import { validateAssistantPayload } from "../validators/assistantValidator.js";

export function getAssistantStatus(_req, res) {
  res.json({
    configured: Boolean(env.aiApiKey),
    tested: false
  });
}

export async function postAssistant(req, res) {
  const error = validateAssistantPayload(req.body);
  if (error) return res.status(400).json({ message: error });

  const messages = req.body.messages.map(({ role, content }) => ({
    role,
    content: content.trim()
  }));
  const question = messages.at(-1).content;

  if (!env.aiApiKey) {
    const fallback = getPublishedAssistantAnswer(question);
    if (fallback) return res.json(fallback);

    return res.status(503).json({
      message: "AI responses are not configured yet. I can answer published FAQ questions, or you can contact the university team.",
      fallback: { label: "Contact the university", path: "/contact-us" }
    });
  }

  try {
    const answer = await requestAssistantAnswer(messages);
    return res.json({ answer, mode: "ai" });
  } catch (providerError) {
    console.error("SNBP assistant provider request failed:", providerError.message);
    return res.status(502).json({
      message: "The AI assistant is temporarily unavailable. Please try again or contact the university team.",
      fallback: { label: "Contact the university", path: "/contact-us" }
    });
  }
}

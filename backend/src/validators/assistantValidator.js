const MAX_MESSAGES = 8;
const MAX_MESSAGE_LENGTH = 1200;
const MAX_CONVERSATION_LENGTH = 5000;

export function validateAssistantPayload(body) {
  if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
    return "A conversation message is required.";
  }

  if (body.messages.length > MAX_MESSAGES) {
    return `A maximum of ${MAX_MESSAGES} messages is allowed.`;
  }

  let totalLength = 0;
  for (const message of body.messages) {
    if (
      !message ||
      !["user", "assistant"].includes(message.role) ||
      typeof message.content !== "string"
    ) {
      return "Conversation messages must contain a valid role and text.";
    }

    const content = message.content.trim();
    if (!content || content.length > MAX_MESSAGE_LENGTH) {
      return `Each message must be between 1 and ${MAX_MESSAGE_LENGTH} characters.`;
    }
    totalLength += content.length;
  }

  if (totalLength > MAX_CONVERSATION_LENGTH) {
    return "The conversation is too long. Please start a new one.";
  }
  if (body.messages.at(-1).role !== "user") {
    return "The latest conversation message must be a question.";
  }

  return null;
}

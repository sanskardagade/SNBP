export const env = {
  port: Number(process.env.PORT || 5000),
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  nodeEnv: process.env.NODE_ENV || "development",
  aiApiKey: process.env.AI_API_KEY?.trim() || "",
  aiBaseUrl: process.env.AI_BASE_URL || "https://api.openai.com/v1",
  aiModel: process.env.AI_MODEL || "gpt-4o-mini"
};

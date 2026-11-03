import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  headers: { "Content-Type": "application/json" }
});

export const getHomeContent = () => api.get("/api/home");
export const getPrograms = () => api.get("/api/programs");
export const getNews = () => api.get("/api/news");
export const getSchools = () => api.get("/api/schools");
export const getFaqs = () => api.get("/api/faqs");
export const getAssistantStatus = () => api.get("/api/assistant/status");
export const askAssistant = (messages) => api.post("/api/assistant", { messages });
export const sendContact = (payload) => api.post("/api/contact", payload);
export const sendAdmissionEnquiry = (payload) => api.post("/api/admissions", payload);
export const subscribeNewsletter = (payload) => api.post("/api/newsletter", payload);

export default api;

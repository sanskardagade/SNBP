import { Router } from "express";
import rateLimit from "express-rate-limit";
import { getAssistantStatus, postAssistant } from "../controllers/assistantController.js";
import contentRoutes from "./contentRoutes.js";
import formRoutes from "./formRoutes.js";

const router = Router();

router.get("/assistant/status", getAssistantStatus);
router.post(
  "/assistant",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: { message: "Too many assistant requests. Please try again in a few minutes." }
  }),
  postAssistant
);
router.use(contentRoutes);
router.use(formRoutes);

export default router;

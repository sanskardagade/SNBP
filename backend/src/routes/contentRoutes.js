import { Router } from "express";
import {
  getFaqs,
  getHealth,
  getHome,
  getNews,
  getPrograms,
  getSchools
} from "../controllers/contentController.js";

const router = Router();

router.get("/health", getHealth);
router.get("/home", getHome);
router.get("/programs", getPrograms);
router.get("/news", getNews);
router.get("/schools", getSchools);
router.get("/faqs", getFaqs);

export default router;

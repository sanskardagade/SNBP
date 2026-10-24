import { Router } from "express";
import {
  postAdmission,
  postContact,
  postNewsletter
} from "../controllers/formController.js";

const router = Router();

router.post("/contact", postContact);
router.post("/admissions", postAdmission);
router.post("/newsletter", postNewsletter);

export default router;

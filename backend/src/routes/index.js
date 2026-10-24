import { Router } from "express";
import contentRoutes from "./contentRoutes.js";
import formRoutes from "./formRoutes.js";

const router = Router();

router.use(contentRoutes);
router.use(formRoutes);

export default router;

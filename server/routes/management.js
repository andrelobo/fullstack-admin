import express from "express";
import cors from "cors";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();

router.use(cors({
  origin: "http://localhost:3000" // <- substitua esta origem pela do seu front-end
}));


router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;

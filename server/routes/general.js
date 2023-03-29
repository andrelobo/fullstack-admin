import express from "express";
import cors from "cors";

import { listUsers, getUser, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.use(cors({
  origin: "http://localhost:3000" // <- substitua esta origem pela do seu front-end
}));

router.get('/users/', listUsers)
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;

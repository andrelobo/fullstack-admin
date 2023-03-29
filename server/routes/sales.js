import express from "express";
import cors from "cors";
import { getSales } from "../controllers/sales.js";

const router = express.Router();

router.use(cors({
  origin: "http://localhost:3000" // <- substitua esta origem pela do seu front-end
}));


router.get("/sales", getSales);

export default router;

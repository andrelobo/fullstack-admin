import express from "express";
import cors from "cors";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.use(cors({
  origin: "http://localhost:3000" // <- substitua esta origem pela do seu front-end
}));

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;

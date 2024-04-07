import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

router.get("/", (req, res) => {
  res.json("Hello World");
});

router.post("/", createProduct);

router.put("/", (req, res) => {
  res.json("desde el put");
});

router.delete("/", (req, res) => {
  res.json("desde el delete");
});

export default router;

import { Router } from "express";



const router = Router();

router.get("/", (req, res) => {
  res.json("Hello World")
})

router.post("/", (req, res) => {
  res.json("desde el post")
})

router.put("/", (req, res) => {
  res.json("desde el put")
})

router.delete("/", (req, res) => {
  res.json("desde el delete")
})


export default router
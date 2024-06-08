import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from "./handlers/product";
import { handleInputError } from "./middleware";

const router = Router();

router.get("/", getProducts);

router.get(
  "/:id",
  param("id").isInt().withMessage("Id must be an integer"),
  handleInputError,
  getProductById
);

router.post(
  "/",
  // validando los campos usando express-validator
  body("name", "Name is required").not().isEmpty(),
  body("price", "Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),
  handleInputError,
  createProduct
);

router.put(
  "/:id",
  body("name", "Name is required").not().isEmpty(),
  body("price", "Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),
  body("availability", "Availability is required"),
  handleInputError,
  updateProduct
);

router.patch(
  "/:id",
  param("id").isInt().withMessage("Id must be an integer"),
  handleInputError,
  updateAvailability
);

router.delete(
  "/",
  param("id").isInt().withMessage("Id must be an integer"),
  handleInputError,
  deleteProduct
);

export default router;

import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [["price", "ASC"]],
    });
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  // revisando si existe el producto
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price, availability } = req.body;
  await product.update({ name, price, availability });
  await product.save();
  res.status(200).json({ product });
};

export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  // cambiar el estado con el patch
  product.availability =  !product.dataValues.availability
  await product.save();
  res.status(200).json({ product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  await product.destroy();
  res.status(200).json({ message: "Product deleted" });
};

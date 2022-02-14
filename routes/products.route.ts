import { Router } from "express";
import { ProductRepository } from "../repositories/product.repository";

const router = Router();

router.get("/", async (req, res) => {
  const productRepo = await ProductRepository();
  const products = await productRepo.find({ relations: ["etiquetas"] });
  return res.json(products);
});

router.post("/", async (req, res) => {
  const productRepo = await ProductRepository();
  const newProduct = await productRepo.createAndSave({
    nombre: req.body.nombre,
  });
  return res.json(newProduct);
});

router.delete("/:id", async (req, res) => {
  const productRepo = await ProductRepository();
  const deleteItem = await productRepo.delete(req.params.id);
  return res.json(deleteItem);
});

export default router;

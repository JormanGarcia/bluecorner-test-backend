import { Router } from "express";
import { TagRepository } from "../repositories/tag.repository";

const router = Router();

router.get("/", async (req, res) => {
  const tagRepository = await TagRepository();
  const tags = await tagRepository.find({ relations: ["producto"] });
  return res.json(tags);
});

router.post("/", async (req, res) => {
  const tagRepository = await TagRepository();
  const newTag = await tagRepository.createAndSave({
    nombre: req.body.nombre,
    producto: req.body.producto,
  });

  return res.json(newTag);
});

router.delete("/:id", async (req, res) => {
  const deletedTag = await TagRepository().delete(req.params.id);
  return res.send(deletedTag);
});

export default router;

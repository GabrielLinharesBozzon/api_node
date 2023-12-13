import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router()
routes.get("/livros",LivroController.ListarLivros);
routes.get("/livros/:id",LivroController.ListarLivrosPorId);
routes.post("/livros",LivroController.cadastro);
routes.put("/livros/:id",LivroController.atualizarLivro);
routes.delete("/livros/:id",LivroController.deletar);   

export default routes;



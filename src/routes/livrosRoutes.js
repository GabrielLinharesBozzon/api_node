import express from "express";
import LivroController from "../controllers/livroController.js";
import autorController from "../controllers/autorController.js";
const routes = express.Router()
routes.get("/livros",LivroController.ListarLivros);
routes.get("/livros/:id",LivroController.ListarLivrosPorId);
routes.post("/livros",LivroController.cadastro);
routes.put("/livros/:id",LivroController.atualizarLivro);
routes.delete("/livros/:id",LivroController.deletar);  
/*--*/ 
routes.get("/autor",autorController.ListarAutores);
routes.get("/autor/:id",autorController.ListarAutoresPorId);
routes.post("/autor",autorController.cadastroAutores);
routes.put("/autor/:id",autorController.atualizarAutores);
routes.delete("/autor/:id",autorController.deletarAutores);

export default routes;



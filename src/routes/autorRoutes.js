import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();
routes.get("/autor",autorController.ListarAutores);
routes.get("/autor/:id",autorController.ListarAutoresPorId);
routes.post("/autor",autorController.cadastroAutores);
routes.put("/autor/:id",autorController.atualizarAutores);
routes.delete("/autor/:id",autorController.deletarAutores);

export default routes;

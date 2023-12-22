import express from "express"
import livro from "../models/Livro.js"
import autores from "../controllers/autorController.js";

const routes = (app) =>{

    app.route("/").get((req,res)=>res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livro, autores)
};

export default routes;

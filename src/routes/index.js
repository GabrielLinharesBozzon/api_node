import express from "express";
import livro from "../routes/livrosRoutes.js";
import autor from "../routes/autorRoutes.js";

const routes = (app) =>{

    app.route("/").get((req,res)=>res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livro, autor)
};

export default routes;

import Express from "express";
import conectaNadatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNadatabase();//Função que conecta a ./config para conexao do banco de dados 

conexao.on("error",(erro)=>{
    console.error("Erro da conexao\n ",erro)
});

conexao.once("open",()=>{
    console.log("Conexao com o banco feita com sucesso !!!")
})

const app = Express();
routes(app);

//Apagar um registro
app.delete("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id)
    livro.splice(index,1);//o comando splice serve para deletar 
    res.status(200).send("Livro removido ") 
})
//exportando as funçoes do app 
    export default app 
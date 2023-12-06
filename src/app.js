import Express from "express";
import conectaNadatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";


const conexao = await conectaNadatabase();//Função que conecta a ./config para conexao do banco de dados 

conexao.on("error",(erro)=>{
    console.error("Erro da conexao\n ",erro)
});

conexao.once("open",()=>{
    console.log("Conexao com o banco feita com sucesso !!!")
})

const app = Express();
app.use(Express.json());//middleware:Pesquisar o que é ?

//construindo as rotas e fazendo a conexão entre as rotas e objs mostardo no navegador 
app.get("/",(req, res)=>{
    res.status(200).send("Curso de Node.js ")
});
//enviando dados para api 
app.post("/livros",(req,res)=>{
    livro.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso !!! ")
});
//pesquisar livros
app.get("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livro[index]);
});

//Alterar o titulo do livro
app.put("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id);
    livro[index].titulo=req.body.titulo;
    res.status(200).json(livro);

});

//Apagar um registro
app.delete("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id)
    livro.splice(index,1);//o comando splice serve para deletar 
    res.status(200).send("Livro removido ") 
})
//exportando as funçoes do app 
    export default app 
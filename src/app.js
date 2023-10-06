import Express from "express";

const app = Express();
app.use(Express.json());//middleware:Pesquisar o que é ?

//json de teste 
const livros =[
    {
        id:1,
        titulo:"O senhor dos Anéis"
    },
    {
        id:2,
        titulo:"O Hobbit"
    }

]
function buscaLivro(id){
    return livros.findIndex(livros =>{
        return livros.id === Number(id);
    })
};
//construindo as rotas e fazendo a conexão entre as rotas e objs mostardo no navegador 
app.get("/",(req, res)=>{
    res.status(200).send("Curso de Node.js ")
});
app.get("/livros",(req,res)=>{
    res.status(200).json(livros)

});
//enviando dados para api 
app.post("/livros",(req,res)=>{
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso !!! ")
});

//pesquisar livros
app.get("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

//Alterar o titulo do livro
app.put("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo=req.body.titulo;
    res.status(200).json(livros);

});

//Apagar um registro
app.delete("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id)
    livros.splice(index,1);//o comando splice serve para deletar 
    res.status(200).send("Livro removido ") 
})
//exportando as funçoes do app 
    export default app 
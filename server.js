import app from "./src/app.js";
const port = 80

const rotas ={
"/":"Curso de node",
"/livros":"Livros da biblioteca"
};

app.listen(port,()=>{
    console.log("Servidor na porta :",port)
})


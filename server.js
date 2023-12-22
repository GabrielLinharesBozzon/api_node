import"dotenv/config.js";
import app from "./src/app.js";
const port = 8080


const rotas ={
"/":"Curso de node",
"/livros":"Livros da biblioteca"
};


app.listen(port,()=>{
    console.log("Servidor na porta :",port)
})

 
//Passando através do node os parametros de armazenamento para o banco de dados 

import mongoose from "mongoose";//Fazendo o import do mongoose


const livroSchema = new mongoose.Schema({//Passando o formato/modelo dos dados para o envio da base 
 id:{type: mongoose.Schema.Types.ObjectId},
 titulos:{type:String, required:true},
 editora: {type:String },
 preco:{type:Number},
 paginas:{type:Number}
},

{
    versionKey:false//Não quero que seja versionado o mongo
});

const livro = mongoose.model("Livros", livroSchema);//Vai converte os parametros para o Schema

export default livro




import mongoose from "mongoose";

async function conectaNadatabase(){
mongoose.connect("mongodb+srv://gabriel:DJl5O0oGURE1CPxR@cluster0.hj59ihy.mongodb.net/livraria?retryWrites=true&w=majority");//rota de conexão para o banco de dados 

return mongoose.connection;
}

export default conectaNadatabase;
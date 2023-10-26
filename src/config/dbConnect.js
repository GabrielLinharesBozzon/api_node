import mongoose from "mongoose";

async function conectaNadatabase(){
mongoose.connect("mongodb+srv://Gabriel:Gabriel123456789@cluster0.n36ynig.mongodb.net/?retryWrites=true&w=majority");//rota de conexão para o banco de dados 

return mongoose.connection;
}

export default conectaNadatabase;
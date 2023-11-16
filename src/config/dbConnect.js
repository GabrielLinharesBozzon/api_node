import mongoose from "mongoose";

async function conectaNadatabase(){
mongoose.connect(process.env.DB_CONNECT_STRING);//rota de conexão para o banco de dados 

return mongoose.connection;
}

export default conectaNadatabase;
import"dotenv/config.js";
import app from "./src/app.js";
const port = 80

app.listen(port,()=>{
    console.log("Servidor na porta :",port)
})

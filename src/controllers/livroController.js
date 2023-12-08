// Controle de Cruds
import livro from "../models/Livro.js";

class LivroController{

    static async ListarLivros(req,res){
        const listaLivros = await livro.find({});
        
        res.status(200).json(listaLivros)
    };
    static async cadastro(req,res){
        
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message:"Criado com sucesso ",
                                  livro: novoLivro  }).send("Livro cadastrado")
        }catch(Erro){
            res.status(500).json({message:`${Erro.message}- Falha ao cadastrar livro`})
        }

    };
};


export default LivroController;
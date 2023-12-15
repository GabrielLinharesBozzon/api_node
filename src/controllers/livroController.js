// Controle de Cruds
import livro from "../models/Livro.js";

class LivroController{

    static async ListarLivros(req,res){
<<<<<<< Updated upstream
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)
        }catch(erro){
            res.status(500).json({message:`${erro.message}- FALHA NA REQUISIÇÃO`})
        }
        
    };
    static async ListarLivrosPorId(req,res){
        try {
            const id = req.params.id;
            const livroencontrado = await livro.findById(id);
            res.status(200).json(livroencontrado)
        }catch(erro){
            res.status(500).json({message:`${erro.message}- FALHA NA REQUISIÇÃO DO LIVRO`})
        }
        
=======
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros)
>>>>>>> Stashed changes
    };
    static async cadastro(req,res){
        
        try{
            const novoLivro = await livro.create(req.body);
<<<<<<< Updated upstream
            res.status(201).json({message:"Criado com sucesso ",
            livro: novoLivro  }).send("Livro cadastrado")
        }catch(erro){
=======
            res.status(201).json({message:"Criado com sucesso ", livro: novoLivro}).send("Livro cadastrado")
        }catch(Erro){
>>>>>>> Stashed changes
            res.status(500).json({message:`${Erro.message}- Falha ao cadastrar livro`})
        }
        
    };
    static async atualizarLivro(req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"LIvro atualizado",body});
        }catch(erro){
            res.status(500).json({message:`${erro.message}- FALHA NA ATUALIZAÇÃO`})
        }
    };
static async deletar(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({message:"Livro deletado"})
        } catch (error) {
            res.status(500).json({message:`${erro.message}- FALHA NA HORA DE DELETAR`});
            
        }
    };
};

export default LivroController;
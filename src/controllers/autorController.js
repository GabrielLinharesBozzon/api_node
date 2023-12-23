// Controle de Cruds
import {autor} from "../models/autor.js"

class autorController{

    static async ListarAutores(req,res){
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)
        }catch(erro){
            res.status(500).json({message:`${erro.message}- FALHA NA REQUISIÇÃO`})
        }
        
 
    static async ListarAutoresPorId(req,res){
        try {
            const id = req.params.id;
            const livroencontrado = await livro.findById(id);
            res.status(200).json(livroencontrado)
        }catch(erro){
            res.status(500).json({message:`${erro.message}- FALHA NA REQUISIÇÃO DO LIVRO`})
        }
        
    };
    static async cadastroAutores(req,res){
        
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message:"Criado com sucesso ",
            livro: novoLivro  }).send("Livro cadastrado")
        }catch(erro){
            res.status(500).json({message:`${Erro.message}- Falha ao cadastrar livro`})
        }
        
    };
    static async atualizarAutores(req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"LIvro atualizado",body});
        }catch(erro){
            res.status(500).json({message:`${erro.message}- FALHA NA ATUALIZAÇÃO`})
        }
    };
static async deletarAutores(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({message:"Livro deletado"})
        } catch (error) {
            res.status(500).json({message:`${erro.message}- FALHA NA HORA DE DELETAR`});
            
        }
    };

};
export default autorController;
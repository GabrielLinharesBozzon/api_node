// Controle de Cruds
import livro from "../models/Livro.js";
import { autor } from "../models/autor.js"

class LivroController {

    static async ListarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message}- FALHA NA REQUISIÇÃO` })
        }

    };

    static async ListarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroencontrado = await livro.findById(id);
            res.status(200).json(livroencontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message}- FALHA NA REQUISIÇÃO DO LIVRO` })
        }
    };

    static async cadastro(req, res) {
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);

            if (!autorEncontrado) {
                return res.status(400).json({ message: "Autor não encontrado" });
            }

            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);

            res.status(201).json({
                message: "Livro cadastrado com sucesso",
                livro: livroCriado
            });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message}- Falha ao cadastrar livro` });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "LIvro atualizado", body });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message}- FALHA NA ATUALIZAÇÃO` })
        }
    };

    static async deletar(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({ message: "Livro deletado" })
        } catch (error) {
            res.status(500).json({ message: `${erro.message}- FALHA NA HORA DE DELETAR` });

        }
    };

    static async lisstarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
             const livrosPorEditora = await livro.find({editora:editora});
             res.status(200).json(livrosPorEditora)
        } catch (error) {
            res.status(500).json({message:`${erro.message}-falha na busca`})
        }
    };
};

export default LivroController;

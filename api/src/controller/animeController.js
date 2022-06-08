import { inserirAnime, ListarAnimes } from "../repository/animeRepository.js";

import { Router } from 'express'

const server = Router();

// CONSULTAR ANIMES //

server.get('/anime', async (req, resp) =>{
    try
    {
        const resposta = await ListarAnimes();
        resp.send(resposta);
    }

    catch(err)
    {
        resp.status(400).send({
            erro: err.message
        })
    }
});

// INSERIR FILMES //

server.post('/anime', async (req, resp) => {
    try
    {
        const anime = req.body;

        if(!anime.nome) 
            throw new Error('Nome do anime é obrigatório!');
        
        const animeInserido = await inserirAnime(anime);

        resp.send(animeInserido);
    }

    catch (err)
    {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
import { con } from './connection.js'

// CONSULTAR ANIMES //

export async function ListarAnimes(){
    const comando =
    ` SELECT  id_anime      id,
              nm_ filme     nome
        FROM tb_anime`;

    const [resposta] = await con.query(comando);
    return resposta[0];
};

// INSERIR ANIMES //

export async function inserirAnime(anime){
    const comando =
    ` INSERT INTO tb_anime (id_anime, nm_anime)
	                VALUES (?, ?) `;

    const [resposta] = await con.query(comando, [anime.nome]);
    anime.id = resposta.insertId;

    return anime;
};
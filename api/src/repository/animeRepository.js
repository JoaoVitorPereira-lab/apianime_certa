import { con } from './connection.js'

// CONSULTAR ANIMES //

export async function ListarAnimes(){
    const comando =
    ` select * from tb_anime`;

    const [resposta] = await con.query(comando);
    return resposta[0];
};

// INSERIR ANIMES //

export async function inserirAnime(anime){
    const comando =
    ` insert into tb_anime (id_anime, nm_anime)
	                values (?, ?) `;

    const [resposta] = await con.query(comando, [anime.nome]);
    anime.id = resposta.insertId;

    return anime;
};
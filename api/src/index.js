import "dotenv/config";

import animeController from './controller/animeController.js'

import express from "express"
import cors from "cors"

const server = express();
server.use(cors());
server.use(express.json());

server.use(animeController);

server.listen(process.env.PORT, () => console.log(`API está rodando na Porta ${process.env.PORT}`));
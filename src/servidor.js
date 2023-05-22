import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const porta = process.env.PORTA || 1234;

const caminhoAtual = url.fileURLToPath((import.meta.url));
const diretorioPublico = path.join(caminhoAtual, '../..', 'public');
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app)

servidorHttp.listen(porta, () => console.log(`Servidor rodando na url http://localhost:${porta}`));

const io = new Server(servidorHttp);

io.on('connection', () => {
	console.log('foi')
});

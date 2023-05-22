import {atualizaTextoEditor} from './documento.js';

const socket = io();

function selecionarDocumento(nome) {
	socket.emit("selecionarDocumento", nome);
}

function emitirTextoEditor(texto, nomeDocumento) {
	socket.emit('textoEditor', texto, nomeDocumento);
}

socket.on('textoClient', (dado) => {
	atualizaTextoEditor(dado)
});

export {emitirTextoEditor, selecionarDocumento}

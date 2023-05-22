import {emitirTextoEditor, selecionarDocumento} from './socket-front-documento.js';

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textArea = document.getElementById('editor-texto');
const titulo = document.getElementById('titulo-documento');

titulo.innerText = nomeDocumento || 'Documento sem titulo';
selecionarDocumento(nomeDocumento);
textArea.addEventListener('keyup', () => {
	emitirTextoEditor(textArea.value, nomeDocumento)
});

function atualizaTextoEditor (dado) {
	textArea.value = dado
}

export {atualizaTextoEditor}

import io from './servidor.js'
io.on('connection', (socket) => {
	socket.on('selecionarDocumento', (nomeDocumento) => {
		socket.join(nomeDocumento);
	})
	
	socket.on('textoEditor', (dado, nomeDocumento) => {
		socket.to(nomeDocumento).emit('textoClient', dado);
	});
});

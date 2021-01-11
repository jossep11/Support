module.exports = {
	name: 'ping',
	description: 'this is a ping!',
	execute(message, args) {
        if(message.content==='hola'){
			message.channel.send('hola');
			
        }

		message.channel.send('Pong');
	}
}
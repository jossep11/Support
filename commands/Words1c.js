const path = require("../data.json");
const pagination = require('../pagination.js');

module.exports = {
	name: "Words1c",
	description: "here is where the chatbot works!",
	execute(message, args, contentss, Embed, client, Discord, ChannelIDs) {
		const palabras = path.contenido;
     
       
       //console.log(palabras);

     // saludos
    if(contentss.includes("hey") || contentss.includes("me puedes ayudar") || contentss.includes("hola como estas")|| contentss.startsWith("hola como es") || contentss.startsWith("necesito ayud")){
        let saludos = palabras.Saludos;
		let respuestas = saludos[1].respuestas;
        let aleatorio = Math.floor(Math.random() * respuestas.length);
        console.log(aleatorio);

        message.author.send(respuestas[aleatorio]);
        const ChannelAuditx =client.channels.cache.find(channel=> channel.id=== "864924179043450901"); 

        //ChannelAuditx.send(respuestas[aleatorio]+ '\n my answer');


    }

    else if(contentss.includes("hi") ){
        message.author.send("Hello sir, how can I help you?");
        
    }
    else if(contentss.includes("thank")){
        message.author.send("You're welcome, we're here for whatever you need.");   
    }    
    
    else if(contentss.includes("grac")){
        message.author.send("De nada, estamos aca para lo que necesites.");
        
    }
    
    
    
    //whenever you type '!ayuda' it'lll show some other keywords that the bot can understand
    //SpanishINFO
     else if (contentss.startsWith('!ayuda') && message.channel.id===ChannelIDs.SupportChannel){
        client.commands.get('SpanishInfo').execute(message, Discord, path, pagination);
    }
    else if(contentss.startsWith('!ayuda')){
        client.commands.get('SpanishInfo').execute(message, Discord, path, pagination);
    }

    //EnglishINFO
    
    else if(contentss.startsWith('!help') && message.channel.id===ChannelIDs.SupportChannelEnglish){
        client.commands.get('EnglishInfo').execute(message, Discord, path, pagination);
      }
    else if(contentss.startsWith('!help')){
        client.commands.get('EnglishInfo').execute(message, Discord, path, pagination);
    }



    //Default responses
    else{

        let RespuestaPred= palabras.RespuestasPred;
		let respuestas = RespuestaPred[0].respuestas;
        let aleatorio = Math.floor(Math.random() * respuestas.length);
        console.log(aleatorio);

        message.author.send(respuestas[aleatorio]);

    }
   
    }
    
};

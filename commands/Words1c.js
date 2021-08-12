const path = require("../data.json");
const pagination = require('../pagination.js');
const hellox = require('./data_fuctions');

module.exports = {
	name: "Words1c",
	description: "here is where the chatbot works!",
	execute(message, args, contentss, Embed, client, Discord, ChannelIDs, distance) {
		const palabras = path.contenido;
        
//SALUDOS
/* var saludos = ['hola','ayudar con algo', 'necesito ayuda', 'save', 'revert', 'select', 'copy', 'duplicate', 'subtract'];
var rated_Saludo    = [];

saludos.forEach(function(saludo) {
  rated_Saludo.push({
    saludo: saludo,
    distance: distance(message.content, saludo, { caseSensitive: false })
  });
});

rated_Saludo.sort(function(a, b) {
if (a.distance < b.distance) {
return 1;
} else if (a.distance > b.distance) {
  return -1;
} else {
 return 0;
}
}); 

//Despedidas
var Despedidas = ['chao','hasta luego', 'nos vemos', 'un placer', 'gracias'];
var rated_Despedida    = [];


Despedidas.forEach(function(despedida) {
    rated_Despedida.push({
    despedida: despedida,
    distance: distance(message.content, despedida, { caseSensitive: false })
    });
});
 *//* 
rated_Despedida.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
});  */


var values = hellox(contentss);
var first = values[0];
var second = values[1];

console.log(first[0]);



/* if (rated_Saludo[0].distance > 0.8 ) {
console.log(rated_Saludo[0].distance);
console.log("Running " + rated_Saludo[0].saludo + "!");

let saludos = palabras.Saludos;
let respuestas = saludos[1].respuestas;
let aleatorio = Math.floor(Math.random() * respuestas.length);
console.log(aleatorio);

message.author.send(respuestas[aleatorio]);
const ChannelAuditx =client.channels.cache.find(channel=> channel.id=== "864924179043450901"); 



} else if(rated_Despedida[0].distance>0.8){
console.log(rated_Despedida[0].distance);
console.log("Running " + rated_Despedida[0].despedida + "?");
}


 */

    





     if(contentss.includes("hi") ){
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

    //Default responses --PUT HERE ON THE DEFAULT ANSWER THE VERSION IN ENGLISH
    else{

        let RespuestaPred= palabras.RespuestasPred;
		let respuestas = RespuestaPred[0].respuestas;
        let aleatorio = Math.floor(Math.random() * respuestas.length);
        console.log(aleatorio);

        message.author.send(respuestas[aleatorio]);

    }
   
 


    }
    
};

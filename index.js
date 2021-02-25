const Discord = require('discord.js');
const pagination = require('discord.js-pagination');
const fs = require('fs');
const config = require("../token/config.json");
const path = require("./data.json");
const ChannelIDs = require("./commands/ChannelIDs.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();
let cooldown =new Set();
const test = require ("./test");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

function emoji (id) {
    return client.emojis.cache.get(id).toString();
}




client.on('ready', () => {
    console.log(`Bot activo como ${client.user.tag}!`);
    const Embed = new Discord.MessageEmbed();


    client.channels.cache.get('812427165995892746').messages.fetch('813136944237510688').then(message => {

      
      Embed .setDescription('Haz clic en la reacción correspondiente para recibir una notificación cuando alguien busque un job en especifico, puedes mencionar esos roles enel canal #general.')   
        .setTitle('JOBS')
        
       message.edit(Embed)
      
      }) 
    
      client.channels.cache.get('812427165995892746').messages.fetch('813136946691309589').then(message => {

        Embed .setDescription('Puedes asignarte uno de estos roles para mostrar tu país')   
        .setTitle('Paises');
         message.edit(Embed)
        
        }) 
        
        
        
})
client.on('message', async message =>{

    


    const Embed = new Discord.MessageEmbed();
    const args = message.content;
    const contentss = args.toLowerCase(); 
    if(message.author.bot) return;  



//    message.channel.send("Beep").then((message1) => message1.edit("Boop!"));

 

 if(message.channel.id==ChannelIDs.TestChannelID || message.channel.type==='dm'){
    client.commands.get('Words').execute(message, args, contentss, Embed, client, Discord);
    if (message.channel.id==ChannelIDs.TestChannelID){
        message.delete({ timeout: 3000 })//elimina el mensaje    
    } 
    
    const palabras = path.contenido;
    let comandos= palabras.comandos;
    let respuestas = comandos[0].cmd;
    
 }   

 
 //when you type 'r' it'll activated again the role's section
 if(contentss==='r' && message.author.id == ChannelIDs.JossepID){
    
    client.commands.get('reaccionroles').execute(client, message, Embed, ChannelIDs, cooldown);

}


//al escribir spanish section mostrara ciertos comandos los cuales el bot puede entender
else if(contentss===('spanish section') && message.author.id==ChannelIDs.JossepID){
    
  client.commands.get('SupportSpanish').execute(message, Discord, path);

}

//whenever you type '!ayuda' it'lll show some other keywords that the bot can understand
else if(contentss===('!ayuda')){
    
  client.commands.get('keywords').execute(message, Discord, path, pagination);

}


// update it, just a gm could see this channel and on here, whatever it say, it's finna be sent it for the bot to another channel, so it could look a little bit better and none of the users could know who sent the message
else if(message.channel.id==="772154069887615037"){
  
  const channel01 =client.channels.cache.find(channel=> channel.id=== "772154069887615038"); 


  channel01.send(message.content+ '\n@everyone');


}


if(message.content.startsWith('!clear')){
    message.channel.bulkDelete(50);
 }





}




);


client.login(config.token);
    
    
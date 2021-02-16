const Discord = require('discord.js');
const fs = require('fs');
const config = require("../token/config.json");
const path = require("./data.json");
const ChannelIDs = require("./commands/ChannelIDs.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

function emoji (id) {
    return client.emojis.cache.get(id).toString();
}




client.once('ready', () => {
    console.log(`Bot activo como ${client.user.tag}!`);
});


client.on('message', async message =>{
    const Embed = new Discord.MessageEmbed();
    const args = message.content;
    const contentss = args.toLowerCase(); 
    if(message.author.bot) return;   

 if(message.channel.id==ChannelIDs.TestChannelID || message.channel.type==='dm'){
    client.commands.get('Words').execute(message, args, contentss, Embed, client, Discord);
    if (message.channel.id==ChannelIDs.TestChannelID){
        message.delete({ timeout: 1000 })//elimina el mensaje    
    } 
    
    const palabras = path.contenido;
    let comandos= palabras.comandos;
    let respuestas = comandos[0].cmd;
    

    if(message.content==="!help"){
        Embed.setColor("RANDOM")
            .setTitle("Comandos")
            .setDescription(respuestas)
            
            .setThumbnail("https://i.imgur.com/7bh8ur3.png")
            .setTimestamp()
            .setFooter("Silkroad Latino");


					message.channel.send(Embed);
    }
 }   

 
 if(contentss==='reactionroles' && message.author.id == ChannelIDs.JossepID){
    
    client.commands.get('reaccionroles').execute(client, message, Embed, ChannelIDs);

}









});


client.login(config.token);
    
    
module.exports = {
	name: "SupportEnglish",
	description: "Palabras clave",
  async	execute(message, Discord, path) {

    
    const palabras = path.contenido;
    let comandos= palabras.comandos2;
    let respuestas = comandos[0].Support_C_English;
    
    const Embed1 = new Discord.MessageEmbed()
    .setColor("RAMDON")
    .setTitle("BotStaff")
    .setDescription(respuestas)
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    
    message.channel.send(Embed1);



  }  

}
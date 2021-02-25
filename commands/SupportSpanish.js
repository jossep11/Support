module.exports = {
	name: "SupportSpanish",
	description: "Palabras clave",
  async	execute(message, Discord, path) {

    
    const palabras = path.contenido;
    let comandos= palabras.comandos;
    let respuestas = comandos[0].Support_C_Esp;
    
    const Embed1 = new Discord.MessageEmbed()
    .setColor("RAMDON")
    .setTitle("BotStaff")
    .setDescription(respuestas)
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    
    message.channel.send(Embed1);



  }  

}
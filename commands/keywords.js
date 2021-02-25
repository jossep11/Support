module.exports = {
	name: "keywords",
	description: "Palabras clave",
  async	execute(message, Discord, path, pagination) {


    const PaginationEmoji=['⬅️', '➡️']
    
    const palabras = path.contenido;
    let comandos= palabras.ayuda;
    let respuesta1 = comandos[0].Support_Priviate_Esp0;
    let respuesta2 = comandos[1].Support_Priviate_Esp1;
    
    
    const Embed1 = new Discord.MessageEmbed()
    .setColor("RAMDON")
    .setTitle("Comandos")
    .setDescription(respuesta1)
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setTimestamp()
    .setFooter("Silkroad Latino");
    
    
    const Embed2 = new Discord.MessageEmbed()
    .setColor("RAMDON")
    .setTitle("Comandos")
    .setDescription(respuesta2)
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setTimestamp()
    .setFooter("Silkroad Latino");

    
    const Embed3 = new Discord.MessageEmbed()
    .setColor("RAMDON")
    .setTitle("Comandos")
    .setDescription("respuestas")
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setTimestamp()
    .setFooter("Silkroad Latino");


const pages=[Embed1, Embed2, Embed3];

pagination(message, pages, PaginationEmoji)
return;



  }  

}
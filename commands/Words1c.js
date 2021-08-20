const path = require("../data.json");
const pagination = require('../pagination.js');
const data_english_spanish = require('./data_fuctions');

module.exports = {
	name: "Words1c",
	description: "here is where the chatbot works!",
	execute(message, args, contentss, Embed, client, Discord, ChannelIDs, distance) {
		const palabras = path.contenido;
    
//----------------------------------------*SPANISH const called from data_fuctions.js*-------------------------------------
const [saludos, despedidas, recuperarID, recuperarClave, rated_Problema_Luancher, 
    rated_Conseguir_Mediador, rated_Pagina_VideoJuego, rated_Silk_Via_PayPal, rated_Subir_Nivel, rated_ComprarGold,
    rated_guiaphanton, rated_guia_zerk_azul, rated_armalgdg13, ratedEquipamentoDG13, nombre,
    que_hago, humano] = data_english_spanish.Spanish_logic(contentss);   
    
//----------------------------*ENGLISH const called from data_fuctions.js*-------------------------------------
 const [greetings, goodbyes, recoverID, recoverPW, LauncherError, Find_Mediator, OficialWeb,
        Silk_PayPal, Level_UP, BuyGold, Phantom_Guide, BlueZerk_Guide, ratedSetDg13, rated_weaponlgdg13,
        rate_whoyouare, youdoing, humanbeing] = data_english_spanish.English_logic(contentss);   
       // console.log(message.author.tag);
       const ChannelAuditx =client.channels.cache.find(channel=> channel.id=== "864924179043450901"); 
       const ChannelAudit_General =client.channels.cache.find(channel=> channel.id=== "877635359301853184"); 
       var datex = new Date();
       date_send=datex.toLocaleTimeString();
       
       ChannelAudit_General.send(`**[**__${date_send}__**]** :pencil: **${message.author.tag}** (__${message.author.id}__) has asked:\n${message.content}`);

//conditional greeting--------------------------------------------------------------------------------------------------- 1
 if (saludos[0].distance >= 0.91 ) {
     console.log(saludos[0].distance);
let saludos_answer = palabras.Saludos;
let respuestas = saludos_answer[1].respuestas;
let aleatorio = Math.floor(Math.random() * respuestas.length);

message.author.send(respuestas[aleatorio]);
} 


//Condicional Despedida---------------------------------------------------------------------------------------------------- 2
else if(despedidas[0].distance>=0.89){
console.log(despedidas[0].distance);
console.log("Running " + despedidas[0].despedida + "?");
let despedidas_answer = palabras.Despedidas;
let respuestas = despedidas_answer[1].respuestas;
let aleatorio = Math.floor(Math.random() * respuestas.length);

message.author.send(respuestas[aleatorio]);
}

//Condicional RecuperarID--------------------------------------------------------------------------------------------------- 3
else if(recuperarID[0].distance>=0.89 && contentss.includes('id') || recuperarID[0].distance>=0.89 && contentss.includes('mi usu')){
    console.log(recuperarID[0].distance);
    //console.log("Running " + recuperarID[0].recuperarid + "?");// 
    Embed
    .setColor('#0099ff')
    .setTitle('Recuperar ID')
    .setURL('http://bit.ly/3rPFoN1')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .addField('Para recuperar ID:', 'En el apartado que puede visualizar debera ingresar su correo electrónico, comprobar que es un humano y luego de ello, se le enviará un correo recordándole cual es el ID asociado al correo: https://www.alfa.srolatino-servers.com/register/recoveryID')
    .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/6.jpg')
    .setTimestamp()
    message.author.send(Embed);

}

//Condicional RecuperarClave--------------------------------------------------------------------------------------------------4
else if(recuperarClave[0].distance>=0.96 && contentss.includes('mi clav') ||recuperarClave[0].distance>=0.96 && contentss.includes('clav') ||recuperarClave[0].distance>=0.96 && contentss.includes('contr') ){
    //console.log(recuperarClave[0].distance);
    //console.log("Running " + recuperarClave[0].recuperar_clave + "?");// 
    Embed
    .setColor('#0099ff')
    .setTitle('Recuperar Contraseña')
    .setURL('http://bit.ly/3rPFoN1')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .addField('Nota:', 'No podrás recuperar la clave si no sabes cuál es su respuesta secreta, para recuperar su clave secreta puede dirigirse a:')
    .addField('Recuperar clave secreta','https://bit.ly/31W83F2')
    .addField('Para recuperar la contraseña:', 'Debe ingresar el ID de su usuarios y su clave secreta, una vez que completamos el ID, contraseña secreta, el sistema nos enviará un email a nuestra casilla de correo asociada. Ahí nos facilitará un enlace para ingresar una nueva contraseña: https://www.alfa.srolatino-servers.com/register/recoveryPassword')
    .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/7.jpg')
    .setTimestamp()
    message.author.send(Embed);
}

//Problema con LUANCHER-------------------------------------------------------------------------------------------------------5
else if(rated_Problema_Luancher[0].distance>=0.89){
    console.log(rated_Problema_Luancher[0].distance);
    //console.log("Running " + rated_Problema_Luancher[0].problemaluancher + "?");//
    let clienterror = palabras.LauncherError;
    let respuestas = clienterror[1].respuestas;
    Embed
    .setColor('#0099ff')
    .setTitle('Solución de Launcher')
    .setURL('https://wiki.srolatino-servers.com/faq/silkroad-online-launcher-dejo-de-funcionar/')
    .setDescription(respuestas)
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setTimestamp()
    .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/iOQ3O9C.jpg')
    .setFooter('Silkroad Latino');

    message.author.send(Embed);
}

//Conseguir un mediador----------------------------------------------------------------------------------- 6
else if(rated_Conseguir_Mediador[0].distance>=0.89){
    console.log(rated_Conseguir_Mediador[0].distance);
    //console.log("Running " + rated_Conseguir_Mediador[0].conseguirMediador + "?");
    Embed
    .setColor('#0099ff')
    .setTitle('Mediadores Oficiales')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setDescription("En el videojuego puede contactar a cualquiera de los siguientes mediadores: \n[GM]Celes \n[GM]Nao \n[GM]Scream \n[GM]Servivenet")
    .setTimestamp()
    message.author.send(Embed);
}

//Pagina oficial del videojuego----------------------------------------------------------------------------------- 7
else if(rated_Pagina_VideoJuego[0].distance>=0.89){
   console.log(rated_Pagina_VideoJuego[0].distance);
   // console.log("Running " + rated_Pagina_VideoJuego[0].PaginaVideoJuego + "?");// 
   Embed
   .setColor('#0099ff')
   .setTitle('Página Oficial del Servidor')
   .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
   .setDescription("-> https://www.alfa.srolatino-servers.com")
   .setTimestamp()
   message.author.send(Embed);
}

//COMPRAR SILK VIA PAYPAL----------------------------------------------------------------------------------- 8
else if(rated_Silk_Via_PayPal[0].distance>=0.89){
    console.log(rated_Silk_Via_PayPal[0].distance);
    //console.log("Running " + rated_Silk_Via_PayPal[0].Silk_PayPal + "?");// 
    Embed
   .setColor('#0099ff')
   .setTitle('Silk Vía PayPal')
   .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
   .setDescription("Puede comprarle silk vía PayPal a cualquier GM dentro del juego (con entrega inmediata) o comprar directamente en la web, pero esta puede demorar hasta 48 horas para entregar el producto")
   .setTimestamp()
   message.author.send(Embed);
}

//COMO SUBIR DE NIVEL----------------------------------------------------------------------------------- 9
else if(rated_Subir_Nivel[0].distance>=0.89){
    console.log(rated_Subir_Nivel[0].distance);
    //console.log("Running " + rated_Subir_Nivel[0].SubirNivel + "?");// 
    Embed
    .setColor('#0099ff')
    .setTitle('Subir de Nivel')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setDescription("Puede subir de nivel matando monstruos de niveles ligeramente más altos que usted o completando misiones dentro del videojeugo ")
    .setTimestamp()
    message.author.send(Embed);

}

//COMPRAR GOLD----------------------------------------------------------------------------------- 10
else if(rated_ComprarGold[0].distance>=0.89){
    console.log(rated_ComprarGold[0].distance);
    //console.log("Running " + rated_ComprarGold[0].ComprarGold + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Comprar Oro')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setDescription("El comercio entre usuarios esta permitido y puede comprarle oro a cualquier usuario dentro del juego, solo asegúrese de siempre acudir a algun mediador oficial en el videojuego para que le ayude con su compra, así evitando posibles estafas")
    .setTimestamp()
    message.author.send(Embed);

}

//Guia Phanton----------------------------------------------------------------------------------- 11
else if(rated_guiaphanton[0].distance>=0.89 && contentss.includes('guia phant') || rated_guiaphanton[0].distance>=0.89 && contentss.includes('guiaph')){
    console.log(rated_guiaphanton[0].distance);
    //console.log("Running " + rated_guiaphanton[0].guia_phanton + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Guía Phantom')
    .setURL('https://wiki.srolatino-servers.com/faq/quest-phantom-desert/')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setDescription("A phantom puede ingresar a partir del nivel 130 y dentro de la misma debe realizar 15 misiones para terminarlas \n")
    .setTimestamp()
    message.author.send(Embed);
}

//Guia zerk azul----------------------------------------------------------------------------------- 12
else if(rated_guia_zerk_azul[0].distance>=0.89 && contentss.includes('zerk az') || rated_guia_zerk_azul[0].distance>=0.89 && contentss.includes('guiazer')){
    console.log(rated_guia_zerk_azul[0].distance);
    //console.log("Running " + rated_guia_zerk_azul[0].guia_zerkAzul + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Guía de Zerk Azul')
    .setURL('https://wiki.srolatino-servers.com/faq/titulos-knight-captain-baronet-general-baron-senior-general-count-chief-general/')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setImage('http://4.bp.blogspot.com/-usb9Lv2FagM/Vm4EODFv1MI/AAAAAAAAAHQ/kQHtxmXckgg/s1600/blue_berserk_1.jpg')
    .setDescription("Los niveles requeridos para realizar estas misiones son: \nLv 95\nLv 100\nLv 105\nLv 110")
    .setTimestamp()
    message.author.send(Embed);
}

//Guia arma lg dg13----------------------------------------------------------------------------------- 13
else if(rated_armalgdg13[0].distance>=0.89 && contentss.includes('arma') ){
    console.log(rated_armalgdg13[0].distance);
    //console.log("Running " + rated_guia_zerk_azul[0].guia_zerkAzul + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Guía Arma Legend Dg13')
    .setURL('https://wiki.srolatino-servers.com/faq/quest-arma-d13-legend-silkroad-latino/')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setImage('http://sro-latino.com/wp-content/uploads/2015/06/arma-lg-1.15.png')
    .setDescription("En Silkroad Latino contamos con el maravilloso sistema de armas legendarias, las cuales podrás disfrutar desde Lv. 116, únete a esta maravillosa experiencia coleccionando los talismanes para crear tu arma legendaria DG 13")
    .setTimestamp()
    message.author.send(Embed);
}

//Guia arma lg dg13----------------------------------------------------------------------------------- 13
else if(ratedEquipamentoDG13[0].distance>=0.89 && contentss.includes('equipamento') || ratedEquipamentoDG13[0].distance>=0.89 && contentss.includes('ropa')  ){
    console.log(ratedEquipamentoDG13[0].distance);
    //console.log("Running " + rated_guia_zerk_azul[0].guia_zerkAzul + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Guía Equipamento Legend Dg13')
    .setURL('https://wiki.srolatino-servers.com/faq/491/')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setImage('http://sro-latino.com/wp-content/uploads/2015/06/Set-lg-.1.5.png')
    .setDescription("En silkroad latino servers para obtener el Set D13 Legend es necesario hacer una serie de quest que llevan una historia muy apsionada en la cual pueden sumergirse")
    .setTimestamp()
    message.author.send(Embed);
}
else if(nombre[0].distance>=0.91){
    console.log(nombre[0].distance);
    message.author.send('No tengo nombre, pero soy el chatbot de la empresa Servivenet y estoy para atender algunas de tus dudas de el videojuego');
}

else if(que_hago[0].distance>=0.91){
    console.log(que_hago[0].distance);
    message.author.send('Estoy esperando a tus preguntas, mi labor es responder');
}
else if(humano[0].distance>=0.91){
    console.log(humano[0].distance);
    message.author.send('No, soy una especie de inteligencia artificial, estoy acá solo para servir');
}

else if(rate_whoyouare[0].distance>=0.91){
    console.log(rate_whoyouare[0].distance);
    message.author.send('I do not have a name, but I am the chatbot of the Servivenet company and I am here to answer some of your questions about the videogame');
}

else if(youdoing[0].distance>=0.91){
    console.log(youdoing[0].distance);
    message.author.send('I am waiting for your questions, my job is to answer');
}
else if(humanbeing[0].distance>=0.91){
    console.log(humanbeing[0].distance);
    message.author.send('No, I am a kind of artificial intelligence, I am here only to serve');
}



























//conditional greeting--------------------------------------------------------------------------------------------------- 1
else if (greetings[0].distance >= 0.89 ) {
    console.log(greetings[0].distance);
let greeting_answer = palabras.Greetings;
let answers = greeting_answer[1].answers;
let aleatorio = Math.floor(Math.random() * answers.length);

message.author.send(answers[aleatorio]);
const ChannelAuditx =client.channels.cache.find(channel=> channel.id=== "864924179043450901"); 

} 

//Condicional Despedida---------------------------------------------------------------------------------------------------- 2
else if(goodbyes[0].distance>=0.89){
    console.log(goodbyes[0].distance);
    let goodbye_answer = palabras.GoodByes;
    let answers = goodbye_answer[1].answers;
    let aleatorio = Math.floor(Math.random() * answers.length);

    message.author.send(answers[aleatorio]);
    //console.log("Running " + goodbyes[0].goodbye + "?");// i have to do it
    
    }
    
    //Condicional RecuperarID--------------------------------------------------------------------------------------------------- 3
    else if(recoverID[0].distance>=0.89 && contentss.includes('id') || recoverID[0].distance>=0.89 && contentss.includes('my use')){
       // console.log(recuperarID[0].distance);
        //console.log("Running " + recuperarID[0].recuperarid + "?");// 
        Embed
        .setColor('#0099ff')
        .setTitle('Recover ID')
        .setURL('http://bit.ly/3rPFoN1')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .addField('To retrieve ID: ',' In the section you can see, you need to insert your email, verify that you are a human being and after that, an email will be sent, reminding you the ID associated to the email: https://www.alfa.srolatino-servers.com/register/recoveryID')
        .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/6.jpg')
        .setTimestamp()
        message.author.send(Embed);
    
    }
    
    //Condicional RecuperarClave--------------------------------------------------------------------------------------------------4
    else if(recoverPW[0].distance>=0.96 && contentss.includes('my passw') ||recoverPW[0].distance>=0.96 && contentss.includes('passw') ||recoverPW[0].distance>=0.96 && contentss.includes('pw') ){
        //console.log(recuperarClave[0].distance);
        //console.log("Running " + recuperarClave[0].recuperar_clave + "?");// 
        Embed
        .setColor('#0099ff')
        .setTitle('Recover Password')
        .setURL('http://bit.ly/3rPFoN1')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .addField('Note: ',' You will not be able to recover the password if you do not know what the secret answer is, to recover your secret answer you can do this:')
        .addField('Recover secret password','https://bit.ly/31W83F2')
        .addField('To retrieve the password: ',' You must insert the ID of your user and their secret password, once we insert the ID and the secret password, the system will send you an email to your associated email. There it will provide you a link to enter a new password: https://www.alfa.srolatino-servers.com/register/recoveryPassword')
        .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/7.jpg')
        .setTimestamp()
        message.author.send(Embed);
    }
    
    //Problema con LUANCHER-------------------------------------------------------------------------------------------------------5
    else if(LauncherError[0].distance>=0.89){
        //console.log(rated_Problema_Luancher[0].distance);
        //console.log("Running " + rated_Problema_Luancher[0].problemaluancher + "?");//
        let clienterror = palabras.LauncherErrorEnglish;
        let respuestas = clienterror[1].answer;
        Embed
        .setColor('#0099ff')
        .setTitle('Launcher Error')
        .setURL('https://wiki.srolatino-servers.com/faq/silkroad-online-launcher-dejo-de-funcionar/')
        .setDescription(respuestas)
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .setTimestamp()
        .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/iOQ3O9C.jpg')
        .setFooter('Silkroad Latino');
    
        message.author.send(Embed);
    }
    
    //Conseguir un mediador----------------------------------------------------------------------------------- 6
    else if(Find_Mediator[0].distance>=0.89){
        console.log(Find_Mediator[0].distance);
        //console.log("Running " + rated_Conseguir_Mediador[0].conseguirMediador + "?");
        Embed
        .setColor('#0099ff')
        .setTitle('Official Mediators')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .setDescription("In the videogame you can contact any of the following mediators: \n[GM]Celes \n[GM]Nao \n[GM]Scream \n[GM]Servivenet")
        .setTimestamp()
        message.author.send(Embed);
    }
    
    //Pagina oficial del videojuego----------------------------------------------------------------------------------- 7
    else if(OficialWeb[0].distance>=0.87){
        console.log(OficialWeb[0].distance);
       // console.log("Running " + rated_Pagina_VideoJuego[0].PaginaVideoJuego + "?");// 
       Embed
       .setColor('#0099ff')
       .setTitle('Official Website')
       .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
       .setDescription("-> https://www.alfa.srolatino-servers.com")
       .setTimestamp()
       message.author.send(Embed);
    }
    
    //COMPRAR SILK VIA PAYPAL----------------------------------------------------------------------------------- 8
    else if(Silk_PayPal[0].distance>=0.89){
        console.log(rated_Silk_Via_PayPal[0].distance);
        //console.log("Running " + rated_Silk_Via_PayPal[0].Silk_PayPal + "?");// 
        Embed
       .setColor('#0099ff')
       .setTitle('Silk by PayPal')
       .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
       .setDescription("You can buy silk by PayPal from any GM in the game (with immediate delivery) or buy directly on the website, but the delivery of the product can take up to 48 hours.")
       .setTimestamp()
       message.author.send(Embed);
    }
    
    //COMO SUBIR DE NIVEL----------------------------------------------------------------------------------- 9
    else if(Level_UP[0].distance>=0.89){
        //console.log(rated_Subir_Nivel[0].distance);
        //console.log("Running " + rated_Subir_Nivel[0].SubirNivel + "?");// 
        Embed
        .setColor('#0099ff')
        .setTitle('Level up')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .setDescription("You can level up by killing monsters of slightly higher levels than you or by completing missions within the videogame.")
        .setTimestamp()
        message.author.send(Embed);
    
    }
    
    //COMPRAR GOLD----------------------------------------------------------------------------------- 10
    else if(BuyGold[0].distance>=0.89){
        //console.log(rated_ComprarGold[0].distance);
        //console.log("Running " + rated_ComprarGold[0].ComprarGold + "?");// i have to do it
        Embed
        .setColor('#0099ff')
        .setTitle('Buy Gold')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .setDescription("Trade between users is allowed and you can buy gold from any user within the game, just make sure to always use an official mediator in the video game to help you with your purchase, thus avoiding possible scams")
        .setTimestamp()
        message.author.send(Embed);
    
    }
    
    //Guia Phanton----------------------------------------------------------------------------------- 11
    else if(Phantom_Guide[0].distance>=0.89){
        //console.log(rated_guiaphanton[0].distance);
        //console.log("Running " + rated_guiaphanton[0].guia_phanton + "?");// i have to do it
        Embed
        .setColor('#0099ff')
        .setTitle('Phantom Guide')
        .setURL('https://wiki.srolatino-servers.com/faq/quest-phantom-desert/')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .setDescription("You can enter to the phantom city from level 130 and within it you must perform 15 missions to finish them\n")
        .setTimestamp()
        message.author.send(Embed);
    }
    
    //Guia zerk azul----------------------------------------------------------------------------------- 12
    else if(BlueZerk_Guide[0].distance>=0.89){
        console.log(BlueZerk_Guide[0].distance);
        //console.log("Running " + rated_guia_zerk_azul[0].guia_zerkAzul + "?");// i have to do it
        Embed
        .setColor('#0099ff')
        .setTitle('Blue Zerk Guide')
        .setURL('https://wiki.srolatino-servers.com/faq/titulos-knight-captain-baronet-general-baron-senior-general-count-chief-general/')
        .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
        .setImage('http://4.bp.blogspot.com/-usb9Lv2FagM/Vm4EODFv1MI/AAAAAAAAAHQ/kQHtxmXckgg/s1600/blue_berserk_1.jpg')
        .setDescription("The levels required to perform these missions are:\nLv 95\nLv 100\nLv 105\nLv 110")
        .setTimestamp()
        message.author.send(Embed);
    }
    
    //Guia arma lg dg13----------------------------------------------------------------------------------- 13
else if(rated_weaponlgdg13[0].distance>=0.89 && contentss.includes('weapon') ){
    console.log(rated_weaponlgdg13[0].distance);
    //console.log("Running " + rated_guia_zerk_azul[0].guia_zerkAzul + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Weapon Legend Dg13 Guide')
    .setURL('https://wiki.srolatino-servers.com/faq/quest-arma-d13-legend-silkroad-latino/')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setImage('http://sro-latino.com/wp-content/uploads/2015/06/arma-lg-1.15.png')
    .setDescription("Latin silkroad has a wonderful system of legendary weapons, which you can enjoy from Lv. 116, join this wonderful experience collecting the talismans to create your legendary weapon DG 13")
    .setTimestamp()
    message.author.send(Embed);
}

//Guia arma lg dg13----------------------------------------------------------------------------------- 13
else if(ratedSetDg13[0].distance>=0.89 && contentss.includes('set') ){
    console.log(ratedSetDg13[0].distance);
    //console.log("Running " + rated_guia_zerk_azul[0].guia_zerkAzul + "?");// i have to do it
    Embed
    .setColor('#0099ff')
    .setTitle('Legend Dg13 Set Guide')
    .setURL('https://wiki.srolatino-servers.com/faq/491/')
    .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
    .setImage('http://sro-latino.com/wp-content/uploads/2015/06/Set-lg-.1.5.png')
    .setDescription("Latin silkroad servers to obtain the D13 Legend Set it is necessary to do a series of missions that have a very exciting story in which they can immerse themselves")
    .setTimestamp()
    message.author.send(Embed);
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
        //console.log(message.content);
        //console.log(datex.toLocaleTimeString());
        
        ChannelAuditx.send(`<@&797681991968882699>\n**[**__${date_send}__**]** :rotating_light: **${message.author.tag}** (__${message.author.id}__) has asked:\n${message.content}`);
       

    }
   
 


    }
    
};

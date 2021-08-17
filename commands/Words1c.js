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
    rated_guiaphanton, rated_guia_zerk_azul ] = data_english_spanish.Spanish_logic(contentss);   
    
//----------------------------*ENGLISH const called from data_fuctions.js*-------------------------------------
 const [greetings, goodbyes, recoverID, recoverPW, LauncherError, Find_Mediator, OficialWeb,
        Silk_PayPal, Level_UP, BuyGold, Phantom_Guide, BlueZerk_Guide] = data_english_spanish.English_logic(contentss);   


//conditional greeting--------------------------------------------------------------------------------------------------- 1
 if (saludos[0].distance >= 0.89 ) {
     console.log(saludos[0].distance);
let saludos_answer = palabras.Saludos;
let respuestas = saludos_answer[1].respuestas;
let aleatorio = Math.floor(Math.random() * respuestas.length);

message.author.send(respuestas[aleatorio]);
const ChannelAuditx =client.channels.cache.find(channel=> channel.id=== "864924179043450901"); 

} 


//Condicional Despedida---------------------------------------------------------------------------------------------------- 2
else if(despedidas[0].distance>=0.89){
console.log(despedidas[0].distance);
console.log("Running " + despedidas[0].despedida + "?");// i have to do it
}

//Condicional RecuperarID--------------------------------------------------------------------------------------------------- 3
else if(recuperarID[0].distance>=0.89 && contentss.includes('id') || recuperarID[0].distance>=0.89 && contentss.includes('mi usu')){
   // console.log(recuperarID[0].distance);
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
else if(recuperarClave[0].distance>=0.96 && contentss.includes('mi clav') ||recuperarClave[0].distance>=0.96 && contentss.includes('clav') ){
    //console.log(recuperarClave[0].distance);
    //console.log("Running " + recuperarClave[0].recuperar_clave + "?");// 
    Embed
    .setColor('#0099ff')
    .setTitle('Recuperar PW')
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
    //console.log(rated_Problema_Luancher[0].distance);
    //console.log("Running " + rated_Problema_Luancher[0].problemaluancher + "?");//
    let clienterror = palabras.LauncherError;
    let respuestas = clienterror[1].respuestas;
    Embed
    .setColor('RANDOM')
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
    //console.log(rated_Conseguir_Mediador[0].distance);
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
   // console.log(rated_Pagina_VideoJuego[0].distance);
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
    //console.log(rated_Silk_Via_PayPal[0].distance);
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
    //console.log(rated_Subir_Nivel[0].distance);
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
    //console.log(rated_ComprarGold[0].distance);
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
else if(rated_guiaphanton[0].distance>=0.89){
    //console.log(rated_guiaphanton[0].distance);
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
else if(rated_guia_zerk_azul[0].distance>=0.89){
    //console.log(rated_guia_zerk_azul[0].distance);
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
    console.log("Running " + goodbyes[0].goodbye + "?");// i have to do it
    }
    
    //Condicional RecuperarID--------------------------------------------------------------------------------------------------- 3
    else if(recoverID[0].distance>=0.89 && contentss.includes('id') || recoverID[0].distance>=0.89 && contentss.includes('my use')){
       // console.log(recuperarID[0].distance);
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
    else if(recoverPW[0].distance>=0.96 && contentss.includes('my passw') ||recoverPW[0].distance>=0.96 && contentss.includes('passw') ){
        //console.log(recuperarClave[0].distance);
        //console.log("Running " + recuperarClave[0].recuperar_clave + "?");// 
        Embed
        .setColor('#0099ff')
        .setTitle('Recuperar PW')
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
    else if(LauncherError[0].distance>=0.89){
        //console.log(rated_Problema_Luancher[0].distance);
        //console.log("Running " + rated_Problema_Luancher[0].problemaluancher + "?");//
        let clienterror = palabras.LauncherError;
        let respuestas = clienterror[1].respuestas;
        Embed
        .setColor('RANDOM')
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
    else if(Find_Mediator[0].distance>=0.89){
        //console.log(rated_Conseguir_Mediador[0].distance);
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
    else if(OficialWeb[0].distance>=0.87){
        console.log(OficialWeb[0].distance);
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
    else if(Silk_PayPal[0].distance>=0.89){
        //console.log(rated_Silk_Via_PayPal[0].distance);
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
    else if(Level_UP[0].distance>=0.89){
        //console.log(rated_Subir_Nivel[0].distance);
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
    else if(BuyGold[0].distance>=0.89){
        //console.log(rated_ComprarGold[0].distance);
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
    else if(Phantom_Guide[0].distance>=0.89){
        //console.log(rated_guiaphanton[0].distance);
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
    else if(BlueZerk_Guide[0].distance>=0.89){
        //console.log(rated_guia_zerk_azul[0].distance);
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

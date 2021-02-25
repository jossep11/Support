const path = require("../data.json");

module.exports = {
	name: "Words",
	description: "here is where the chatbot works!",
	execute(message, args, contentss, Embed) {
		const palabras = path.contenido;
        
        RecuperarPW();
        Saludos();
		Rs();
        ClienteError();
        RecuperarID();
        zerkquest();       
        QuestOrb();
        Zerk130();
        ArmaLGDG13();
        ArmaLGDG14();
        QuestTogui();


        //Saludos
        function Saludos() {
		let saludos = palabras.Saludos;
		let preguntas = saludos[0].preguntas;
		let respuestas = saludos[1].respuestas;

		let aleatorio = Math.floor(Math.random() * respuestas.length);

		for (let q = 0; q <= preguntas.length; q++) {
			if (contentss.includes(preguntas[q])) {
				message.author.send(respuestas[aleatorio]);
				break; //with the break it takes only one value
			}
		}
}

		//Respuesta secreta
		function Rs() {
			let RS = palabras["respuesta secreta"];
			let preguntass = RS[0].preguntas;
			let respuestas = RS[1].respuestas;

			for (let q = 0; q <= preguntass.length; q++) {
				if (contentss.includes(preguntass[q])) {
					Embed.setColor("RANDOM")
						.setTitle("Recuperación de respuesta secreta Silkroad Latino Servers")
						.setURL("https://wiki.srolatino-servers.com/faq/srolatino-serversrecuperacion-de-respuesta-secreta/")
						.setDescription(respuestas)
						.setThumbnail("https://i.imgur.com/7bh8ur3.png")
						.setTimestamp()
						.setFooter("Silkroad Latino");

					message.author.send(Embed);
					break; //with the break it takes only one value
				}
			}
		}
    
    
    //Error del cliente
function ClienteError() {

    let clienterror = palabras.LauncherError;
    let preguntas = clienterror[0].preguntas;
    let respuestas = clienterror[1].respuestas;

    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
          
            Embed
            .setColor('RANDOM')
            .setTitle('Solución de Launcher')
            .setURL('https://wiki.srolatino-servers.com/faq/silkroad-online-launcher-dejo-de-funcionar/')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setTimestamp()
            .setFooter('Silkroad Latino');

            message.author.send(Embed);

            break; //with the break it takes only one value
        }
    }
}


function RecuperarID() {

    let RecuperarID = palabras.RecuperarID;
    let preguntas = RecuperarID[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
         
            Embed
            .setColor('#0099ff')
            .setTitle('Recuperar ID')
            .setURL('http://bit.ly/3rPFoN1')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .addField('Nota:', 'No podrás recuperar la clave si no sabes cual es su respuesta secreta, para recuperar su clave secreta puede dirigirse a:')
            .addField('Recuperar clave secreta','https://bit.ly/31W83F2')
            .addField('Para recuperar ID:', 'Debe ingresar su email y se enviara automaticamente un Email recordandote cual es el ID asociado a ese Email: https://www.alfa.srolatino-servers.com/register/recoveryID')
            .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/6.jpg')
            .setTimestamp()
            message.author.send(Embed);
            break; //with the break it takes only one value
        }
    }
}

function RecuperarPW() {

    let RecuperarPW = palabras.RecuperarPW;
    let preguntas = RecuperarPW[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Recuperar PW')
            .setURL('http://bit.ly/3rPFoN1')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .addField('Nota:', 'No podrás recuperar la clave si no sabes cual es su respuesta secreta, para recuperar su clave secreta puede dirigirse a:')
            .addField('Recuperar clave secreta','https://bit.ly/31W83F2')
            .addField('Para recuperar la contraseña:', 'Debe ingresar el ID de su usuarios y su clave secreta, una vez que completamos el ID, contraseña secreta, el sistema nos enviara un email a nuestra casilla de correo asociada. Ahi nos facilitará un link para ir y colocar una contraseña nueva: https://www.alfa.srolatino-servers.com/register/recoveryPassword')
            .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/7.jpg')
            .setTimestamp()
            message.author.send(Embed);
           }
    }
}

function zerkquest(){

    let zerkquest = palabras.zerkquest;
    let preguntas = zerkquest[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Quest de zerk')
            .setDescription('**Quest de zerk Euro&Chine** \n\n lv 95 \n lv 100 \n lv 105 \n lv 110')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('http://bit.ly/3q5LGX6')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function Zerk130(){

    let Zerk120 = palabras.Zerk120;
    let preguntas = Zerk120[0].preguntas;
    let respuesta = Zerk120[1].respuestas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Quest Titulo]Vice General Lord (Chinese) & Marquis (Europe)')
            .setDescription(respuesta)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('http://bit.ly/3bxE1v8')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestOrb(){

    let QuestOrb = palabras.QuestOrb;
    let preguntas = QuestOrb[0].preguntas;
    let respuesta = QuestOrb[1].respuestas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Obtencion del Weapon/Shield Orb')
            .setDescription(respuesta)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function ArmaLGDG14(){

    let ArmaLGDG14 = palabras.ArmaLGDG14;
    let preguntas = ArmaLGDG14[0].preguntas;
    let respuesta = ArmaLGDG14[1].respuestas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Guía Armas Degree 14 Legendary')
            .setDescription(respuesta)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/39lke0X')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}


function ArmaLGDG13(){

    let ArmaLGDG13 = palabras.ArmaLGDG13;
    let preguntas = ArmaLGDG13[0].preguntas;
    let respuestas= ArmaLGDG13[1].respuestas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Quest Arma D13 Legend')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3nvkDTw')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestTogui(){

    let QuestTogui = palabras.QuestTogui;
    let preguntas = QuestTogui[0].preguntas;
    let respuestas = QuestTogui[1].respuestas;

    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Togui Village Set Legendary D13')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/2XsyQWE')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestOrb(){

    let QuestOrb = palabras.QuestOrb;
    let preguntas = QuestOrb[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Obtencion del Weapon/Shield Orb')
            .setDescription('Orb de arma legend DG14')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestOrb(){

    let QuestOrb = palabras.QuestOrb;
    let preguntas = QuestOrb[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Obtencion del Weapon/Shield Orb')
            .setDescription('Orb de arma legend DG14')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestOrb(){

    let QuestOrb = palabras.QuestOrb;
    let preguntas = QuestOrb[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Obtencion del Weapon/Shield Orb')
            .setDescription('Orb de arma legend DG14')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestOrb(){

    let QuestOrb = palabras.QuestOrb;
    let preguntas = QuestOrb[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Obtencion del Weapon/Shield Orb')
            .setDescription('Orb de arma legend DG14')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestOrb(){

    let QuestOrb = palabras.QuestOrb;
    let preguntas = QuestOrb[0].preguntas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Obtencion del Weapon/Shield Orb')
            .setDescription('Orb de arma legend DG14')
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')           
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}


    
    
    
    
    
    
    }
    
};

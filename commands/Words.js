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
        Zerk120();
        ArmaLGDG13();
        ArmaLGDG14();
        QuestTogui();
        SetLGDG14();
        Phantom();
        TalismanesMythD15();
        ArmaLGDG15();
        QuestFlamingTree();
        SetMythDG15();

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
            .setImage('https://wiki.srolatino-servers.com/wp-content/uploads/2018/01/iOQ3O9C.jpg')
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
            .setImage('https://i.imgur.com/Fh3Teqr.jpeg')          
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function Zerk120(){

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
            .setImage('https://sro-latino.com/wp-content/uploads/2015/06/Soldier-Takia.png')
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
            .setTitle('[Guía] Obtencion del Weapon/Shield Orb')
            .setDescription(respuesta)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3pZJlwM')    
            .setImage('https://sro-latino.com/wp-content/uploads/2015/06/wp-1.12.png')       
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
            .setTitle('[Guía] Armas Degree 14 Legendary')
            .setDescription(respuesta)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/39lke0X')   
            .setImage('https://sro-latino.com/wp-content/uploads/2015/06/d14-1.4.jpg')            
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
            .setImage('https://sro-latino.com/wp-content/uploads/2015/06/arma-lg-1.15.png')         
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
            .setTitle('[Guía] Togui Village Set Legendary D13')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/2XsyQWE')           
            .setTimestamp()
            .setImage('https://sro-latino.com/wp-content/uploads/2015/06/Quest-1-The-Package.jpg')
            message.author.send(Embed);
           }
    }


    
}

function SetLGDG14(){

    let SetLGDG14 = palabras.SetLGDG14;
    let preguntas = SetLGDG14[0].preguntas;
    let respuestas = SetLGDG14[1].respuestas;

    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('[Guía] Set Legend D14')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('http://bit.ly/3dMqlPy')       
            .setImage('https://sro-latino.com/wp-content/uploads/2015/06/1.1.jpg')
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}



function Phantom(){

    let Phantom = palabras.QuestPhantom;
    let preguntas = Phantom[0].preguntas;
    let respuestas = Phantom[1].respuestas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('[Guía] Phantom Desert')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3bvD48p')    
            .setImage('https://sro-latino.com/proxy.php?image=http%3A%2F%2Fsro-latino.com%2Fwp-content%2Fuploads%2F2017%2F10%2F11.png&hash=5231432ec0d8f8d6f9a6120086934169')       
            .setTimestamp()
            message.author.send(Embed);
           }
    }


        
}

function ArmaLGDG15(){

    let ArmaLGDG15 = palabras.ArmaLGDG15;
    let preguntas = ArmaLGDG15[0].preguntas;
    let respuestas = ArmaLGDG15[1].respuestas;
  
    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('[Guía] Armas Degree 15 Legendary')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3nsUFjl') 
            .setImage('https://i.imgur.com/4r81mbW.png')          
            .setTimestamp()
            message.author.send(Embed);
           }
    }


        
}


function TalismanesMythD15(){

    let TalismanesMythD15 = palabras.TalismanesMythD15;
    let preguntas = TalismanesMythD15[0].preguntas;
    let respuestas = TalismanesMythD15[1].respuestas;

    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('Nombre de talismanes degree 15')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setImage('https://sro-latino.com/wp-content/uploads/2017/10/6.png')       
            .setTimestamp()
            message.author.send(Embed);
           }
    }


    
}

function QuestFlamingTree(){

    let QuestFlamingTree = palabras.QuestFlamingTree;
    let preguntas = QuestFlamingTree[0].preguntas;
    let respuestas = QuestFlamingTree[1].respuestas;    

    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('[Guía] Flaming Tree')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('https://bit.ly/3q6jymG')   
            .setImage('https://sro-latino.com/proxy.php?image=http%3A%2F%2Fsro-latino.com%2Fwp-content%2Fuploads%2F2017%2F10%2F4.png&hash=b2f9f624cc3c931166640a217cac0a07')        
            .setTimestamp()
            message.author.send(Embed);
           }
    }
    
}

function SetMythDG15(){

    let SetMythDG15 = palabras.SetMythDG15;
    let preguntas = SetMythDG15[0].preguntas;
    let respuestas = SetMythDG15[1].respuestas;    

    for (let q = 0; q <= preguntas.length; q++) {
        if (contentss.includes(preguntas[q])) {
            Embed
            .setColor('#0099ff')
            .setTitle('[Guía] Set Mythical Degree 15')
            .setDescription(respuestas)
            .setThumbnail('https://wiki.srolatino-servers.com/wp-content/uploads/2019/12/logowiki-1.png')
            .setURL('http://bit.ly/3qPOgkV')   
            .setImage('https://sro-latino.com/proxy.php?image=http%3A%2F%2Fsro-latino.com%2Fwp-content%2Fuploads%2F2017%2F10%2F8.png&hash=db9c5b5fee0b658f7f4b0504e2696233')        
            .setTimestamp()
            message.author.send(Embed);
           }
    }
    
}
    
    
    
    
    
    
    }
    
};

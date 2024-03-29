var distance = require('jaro-winkler');
//SPANISH**************************************************************************************
function Spanish_logic(contentss ) {


//Saludos----------------------------------------------------------------------------------- 1
var saludos = ['hola','ayudar con algo', 'necesito ayuda', 'estas ahi', 'oye', 'me puedes ayudar', 'como estas', 'me podrias ayudar', 'como te va', 'que onda', 'hola como estas'];
var rated_Saludo = [];
saludos.forEach(function(saludo) {
  rated_Saludo.push({
    saludo: saludo,
    distance: distance(contentss, saludo, { caseSensitive: false })
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
//END of Saludos



//Despedidas----------------------------------------------------------------------------------- 2
var despedidas = ['chao','hasta luego', 'nos vemos', 'un placer', 'gracias' , 'gracias por todo', 'muchas gracias', 'adios', 'gracias por la informacion'];
var rated_Despedida    = [];

despedidas.forEach(function(despedida) {
    rated_Despedida.push({
    despedida: despedida,
    distance: distance(contentss, despedida, { caseSensitive: false })
    });
});

rated_Despedida.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END OF Despedidas



//RECUPERAR ID----------------------------------------------------------------------------------- 3
var recuperarID = ['¿buenas, como puedo recuperar mi id?', 'hola, necesito recuperar mi id', 
'hola, necesito recuperar mi usuar', 'necesito recuperar mi id','recuperar mi id', 'necesito mi id', 
'como recuperar mi id', 'olvide mi id', 'se me olvido el id', 'se me olvido mi id', 'como puedo recuperar mi id', 
'olvide mi id, como la recupero', 'como puedo recuperar mi usuario', 'olvide mi usuario', 'recuperar mi usuario', 'recuperar id', 'quiero recuperar mi id', 'recuperarid'];
var rated_recuperarID    = [];

recuperarID.forEach(function(recuperarid) {
    rated_recuperarID.push({
    recuperarid: recuperarid,
    distance: distance(contentss, recuperarid, { caseSensitive: false })
    });
});

rated_recuperarID.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END OF RECUPERAR ID



//RECUPERAR Clave----------------------------------------------------------------------------------- 4
var recuperarClave = ['¿como puedo recuperar mi clave?','hola, como puedo recuperar mi clave',
'necesito recuperar mi clave','recuperar mi clave', 'necesito mi clave', 'como recuperar mi clave', 
'olvide mi clave', 'se me olvido el clave', 'se me olvido mi clave', 'como puedo recuperar mi clave', 
'olvide mi clave, como la recupero', 'como puedo recuperar mi clave', 'olvide mi clave', 'recuperar mi clave'
, 'recuperar mi contraseña', 'necesito mi contraseña', 'olvide mi contraseña', 'recuperarclave'
];
var rated_recuperarClave  = [];

recuperarClave.forEach(function(recuperar_clave) {
    rated_recuperarClave.push({
    recuperar_clave: recuperar_clave,
    distance: distance(contentss, recuperar_clave, { caseSensitive: false })
    });
});

rated_recuperarClave.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END OF RECUPERAR Clave



//Problema con LUANCHER----------------------------------------------------------------------------------- 5
var Problema_Luancher = ['tengo problemas con mi launcher ¿como puedo solucionarlo?','hola, tengo problemas con mi launcher ¿como puedo solucionarlo?',
'hola, tengo problema con el luancher','mi client me da dc', 'tengo un problema con el juego', 'problema con el luancher', 
'hola tengo problemas con el luancher', 'tengo problemas con el luancher', 'problema con mi launcher', 'problema con launcher',
'errorlauncher'
];
var rated_Problema_Luancher  = [];

Problema_Luancher.forEach(function(problemaluancher) {
    rated_Problema_Luancher.push({
      problemaluancher: problemaluancher,
    distance: distance(contentss, problemaluancher, { caseSensitive: false })
    });
});

rated_Problema_Luancher.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END LUANCHER




//Conseguir un mediador----------------------------------------------------------------------------------- 6
var Conseguir_Mediador= ['¿donde puedo conseguir a un mediador?','donde puedo conseguir un mediador', 'necesito un mediador',
'hola, donde puedo conseguir un mediador','hola, necesito de un mediador', 'necesito una mediacion', 'mediador'];
var rated_Conseguir_Mediador  = [];

Conseguir_Mediador.forEach(function(conseguirMediador) {
    rated_Conseguir_Mediador.push({
      conseguirMediador: conseguirMediador,
    distance: distance(contentss, conseguirMediador, { caseSensitive: false })
    });
});

rated_Conseguir_Mediador.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END MEDIADOR




//Pagina oficial del videojuego----------------------------------------------------------------------------------- 7
var Pagina_VideoJuego= ['¿hola cual es la pagina oficial del videojuego?','hola cual es la pagina oficial del videojuego', 'cual es la pagina oficial del videojuego', 'pagina del videojueg','necesito la pagina del videojuego',
'la pagina del videojuego', 'paginaoficial'];
var rated_Pagina_VideoJuego  = [];

Pagina_VideoJuego.forEach(function(PaginaVideoJuego) {
    rated_Pagina_VideoJuego.push({
      PaginaVideoJuego: PaginaVideoJuego,
    distance: distance(contentss, PaginaVideoJuego, { caseSensitive: false })
    });
});

rated_Pagina_VideoJuego.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END PAGINA OFICIAL




//COMPRAR SILK VIA PAYPAL----------------------------------------------------------------------------------- 8
var Silk_Via_PayPal= ['donde puedo comprar silk via paypal?','hola, donde puedo comprar silk via paypal', 'donde puedo comprar silk por paypal',
'necesito comprar silk por paypal', 'necesito silk por paypal', 'comprar silk via paypal', 'silk via paypal',];
var rated_Silk_Via_PayPal  = [];

Silk_Via_PayPal.forEach(function(Silk_PayPal) {
    rated_Silk_Via_PayPal.push({
      Silk_PayPal: Silk_PayPal,
    distance: distance(contentss, Silk_PayPal, { caseSensitive: false })
    });
});

rated_Silk_Via_PayPal.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END SILK VIA PAYPAL





//COMO SUBIR DE NIVEL----------------------------------------------------------------------------------- 9
var Subir_Nivel= ['¿como puedo subir de nivel?','hola, como puedo subir de nivel', 'como subir de nivel',
'necesito subir de nivel', 'subir de nivel', 'necesito subir mas rapido de nivel', 'SubirNivel'];
var rated_Subir_Nivel  = [];

Subir_Nivel.forEach(function(SubirNivel) {
    rated_Subir_Nivel.push({
      SubirNivel: SubirNivel,
    distance: distance(contentss, SubirNivel, { caseSensitive: false })
    });
});

rated_Subir_Nivel.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END SUBIR DE NIVEL





//COMPRAR GOLD----------------------------------------------------------------------------------- 10
var Comprar_Gold= ['¿a quien le puedo comprar oro?','hola, a quien le puedo comprar oro', 'a quien puedo comprarle oro',
'donde puedo comprar oro', 'sabes a quien pueda comprarle oro', 'comprar oro' , 'como puedo comprar oro', 'necesito comprar oro', 'yo necesito comprar oro', 'como comprar oro'];
var rated_ComprarGold  = [];

Comprar_Gold.forEach(function(ComprarGold) {
    rated_ComprarGold.push({
      ComprarGold: ComprarGold,
    distance: distance(contentss, ComprarGold, { caseSensitive: false })
    });
});

rated_ComprarGold.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END COMPRAR GOLD




//Guia Phanton----------------------------------------------------------------------------------- 11
var Guia_Phanton= ['¿donde puedo conseguir la guía de phantom?','necesito la guia de phantom', 'guia de phantom', 'necesito guia phantom', 'guiaphantom'
, 'donde consigo la guia de phantom'];
var rated_guiaphanton  = [];

Guia_Phanton.forEach(function(guia_phanton) {
    rated_guiaphanton.push({
      guia_phanton: guia_phanton,
    distance: distance(contentss, guia_phanton, { caseSensitive: false })
    });
});

rated_guiaphanton.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guia Phanton




//Guia zerk azul----------------------------------------------------------------------------------- 12
var Guia_ZerkAzul= ['¿me podria facilitar la guía de zerk azul?','necesito la guia de zerk azul', 'guia zerk azul', 'zerk azul', 'guiazerkazul'];
var rated_guia_zerk_azul  = [];

Guia_ZerkAzul.forEach(function(guia_zerkAzul) {
    rated_guia_zerk_azul.push({
      guia_zerkAzul: guia_zerkAzul,
    distance: distance(contentss, guia_zerkAzul, { caseSensitive: false })
    });
});

rated_guia_zerk_azul.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guia zerkazul


//Guia EquipamentoLGDG13  ----------------------------------------------------------------------------------- 14
var EquipamentoLGDG13=  ['¿me podria facilitar la guía del equipamento lg dg13?', '¿me podria facilitar la guía del equipamento dg13?' ,'necesito la guia del equipamento lg dg13', 'necesito la guia del equipamento dg13', 'guia equipamento lg dg13', 'equipamentolgdg13', 'equipamentodg13', '¿me podria facilitar la guía del ropa lg dg13?', '¿me podria facilitar la guía del ropa dg13?' ,'necesito la guia del ropa lg dg13'];
var ratedEquipamentoDG13  = [];

EquipamentoLGDG13.forEach(function(EquipamentoDG13) {
    ratedEquipamentoDG13.push({
      EquipamentoDG13: EquipamentoDG13,
    distance: distance(contentss, EquipamentoDG13, { caseSensitive: false })
    });
});

ratedEquipamentoDG13.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guia Equipamentodg13


//Guia rated_armalgdg13----------------------------------------------------------------------------------- 13
var ArmaLgdg13= ['¿me podria facilitar la guía del arma lg dg13?', '¿me podria facilitar la guía del arma dg13?' ,'necesito la guia del arma lg dg13', 'necesito la guia del arma dg13', 'guia arma lg dg13', 'armadg13', 'armalgdg13'];
var rated_armalgdg13  = [];

ArmaLgdg13.forEach(function(armadg13) {
    rated_armalgdg13.push({
      armadg13: armadg13,
    distance: distance(contentss, armadg13, { caseSensitive: false })
    });
});

rated_armalgdg13.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guia rated_armalgdg13


//Guia Quien eres----------------------------------------------------------------------------------- 13
var quien_eres= ['¿quien eres?','quien eres', 'como te llamas?', 'como te llamas', 'dime quien eres'];
var nombre  = [];

quien_eres.forEach(function(minombre) {
    nombre.push({
      minombre: minombre,
    distance: distance(contentss, minombre, { caseSensitive: false })
    });
});

nombre.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Quien eres


//Guia que haces----------------------------------------------------------------------------------- 13
var quehaces= ['que haces?','que estas haciendo'];
var que_hago  = [];

quehaces.forEach(function(haciendo) {
    que_hago.push({
      haciendo: haciendo,
    distance: distance(contentss, haciendo, { caseSensitive: false })
    });
});

que_hago.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END que haces




//Guia Quien eres----------------------------------------------------------------------------------- 13
var eres_un_humano= ['¿eres humano?','eres un humano'];
var humano  = [];

eres_un_humano.forEach(function(soyhumano) {
    humano.push({
      soyhumano: soyhumano,
    distance: distance(contentss, soyhumano, { caseSensitive: false })
    });
});

humano.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Quien eres



return [rated_Saludo, rated_Despedida, rated_recuperarID, rated_recuperarClave, rated_Problema_Luancher, 
  rated_Conseguir_Mediador, rated_Pagina_VideoJuego, rated_Silk_Via_PayPal, rated_Subir_Nivel, rated_ComprarGold,
  rated_guiaphanton, rated_guia_zerk_azul, rated_armalgdg13, ratedEquipamentoDG13, nombre,
  que_hago,
  humano];
}





























//ENGLISH****************************************************************************************
function English_logic(contentss) {
  
//Greetings----------------------------------------------------------------------------------- 1
var greetings = ['hi', 'hey', 'hey there', 'you there', "what's up", 'hello', 'hi, can you help me with something', 'hi, can you help me', 'hello, can you help me', 'hello, i need some help', 'i need help', 'need help', 'help me', 'need some help', 'i need some help', 'hey i need some help', 'hey need some help'];
var rated_Greetings = [];

greetings.forEach(function(greeting) {
  rated_Greetings.push({
    greeting: greeting,
    distance: distance(contentss, greeting, { caseSensitive: false })
  });
});

rated_Greetings.sort(function(a, b) {
if (a.distance < b.distance) {
return 1;
} else if (a.distance > b.distance) {
  return -1;
} else {
 return 0;
}
}); 
//END of greetings



//Goodbyes ----------------------------------------------------------------------------------- 2
var goodbyes = ['bye','see you', 'see you later', 'thanks', 'thank you', 'thank you so much', 'ok thanks'];
var rated_Goodbyes    = [];

goodbyes.forEach(function(goodbye) {
    rated_Goodbyes.push({
    goodbye: goodbye,
    distance: distance(contentss, goodbye, { caseSensitive: false })
    });
});

rated_Goodbyes.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END OF goodbyes



//RECOVER ID----------------------------------------------------------------------------------- 3
var recuperarID = ['hi, how can i recover my id?', 'hi, i need to recover my id', 
'hi, i need to recover my user', 'i need to recover my id','recover my id', 'recover id', 
'how can i recover my id', 'i forgot my id', 'forgot my id', 'need my id', 'hello, how can i recover my id', 
'i forgot my id, how can i recover it', 'hey i need to recover my id', 'hello i forgot my id', 'recover my user id', 'i need to get my id', 'recoverid'];
var rated_recuperarID    = [];

recuperarID.forEach(function(recuperarid) {
    rated_recuperarID.push({
    recuperarid: recuperarid,
    distance: distance(contentss, recuperarid, { caseSensitive: false })
    });
});

rated_recuperarID.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END OF RECOVER ID



//RECUPERAR PASSWORd----------------------------------------------------------------------------------- 4
var recoverPassword = ['how can i recover my password','hi, how can i recover my password',
'i need to recovery my password','recover my password', 'i need my password', 'hello i need my password', 'recover my pw', 
'i forgot my pw', 'i forgot my password', 'i forgot password', 'how can i recover my password', 
'i forgot my password, how can i recovery it', 'how i recover my password', 'how recover my password', 'how can i recover my pw', 'recover my password', 'recoverpw'
, 'need my password'];
var rated_recoverPassword  = [];

recoverPassword.forEach(function(recover_password) {
    rated_recoverPassword.push({
    recover_password: recover_password,
    distance: distance(contentss, recover_password, { caseSensitive: false })
    });
});

rated_recoverPassword.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END OF RECUPERAR PASSWORD



//LUANCHER error----------------------------------------------------------------------------------- 5
var launcher_errors = ['i have some problems with my  launcher, how can i fix it','hi, i have some errors in my launcher',
'im having problems with my launcher','my client dc me', 'i have some problems with the videogame', 'client error','i am having some problems with my launcher', 
'launcher problems', 'launcher error', 'clienterror'];
var rated_Launcher_Error  = [];

launcher_errors.forEach(function(errorLauncher) {
    rated_Launcher_Error.push({
      errorLauncher: errorLauncher,
    distance: distance(contentss, errorLauncher, { caseSensitive: false })
    });
});

rated_Launcher_Error.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END LUANCHER




//find a mediator----------------------------------------------------------------------------------- 6
var Find_Mediator= ['where can i find a mediator?','how can i find a mediator', 'i need a mediator',
'need a mediator','hi, i need a mediator', 'hello i need a mediator', '!MediatorsName'];
var rated_FindAMediator  = [];

Find_Mediator.forEach(function(findMediator) {
    rated_FindAMediator.push({
      findMediator: findMediator,
    distance: distance(contentss, findMediator, { caseSensitive: false })
    });
});

rated_FindAMediator.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END MEDIATOR




//official website----------------------------------------------------------------------------------- 7
var Videogame_Web= ['hi what is the official website of the videogame','what is the official website of the videogame', 'how can i find the official website of the videogame',
,'what is the website','website of the videogame', 'need the website', 'official website', 'what is the official website', 'website'];
var rated_Web  = [];

Videogame_Web.forEach(function(website) {
    rated_Web.push({
      website: website,
    distance: distance(contentss, website, { caseSensitive: false })
    });
});

rated_Web.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END official website




//BUY SILK BY PAYPAL----------------------------------------------------------------------------------- 8
var Silk_By_PayPal= ['where can i buy silk by paypal','hi, where can i buy silk by paypal', 'where can i buy silk by paypal',
'i need to buy silk by paypal', 'need to buy silk by paypal', 'need silk by paypal', 'silk by paypal'];
var rated_Silk_By_PayPal  = [];

Silk_By_PayPal.forEach(function(buy_silk) {
    rated_Silk_By_PayPal.push({
      buy_silk: buy_silk,
    distance: distance(contentss, buy_silk, { caseSensitive: false })
    });
});

rated_Silk_By_PayPal.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END SILK BY PAYPAL





//How to level up----------------------------------------------------------------------------------- 9
var Level_UP= ['¿how can i level up?','hi, how can i level up', 'how level up',
'i need to level up', 'level up', 'need to level up faster', 'how can i level up faster'];
var rated_LevelUp  = [];

Level_UP.forEach(function(LevelUp) {
    rated_LevelUp.push({
      LevelUp: LevelUp,
    distance: distance(contentss, LevelUp, { caseSensitive: false })
    });
});

rated_LevelUp.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END LEVEL UP





//BUYING GOLD----------------------------------------------------------------------------------- 10
var BuyGold= ['who can i buy gold from?','hey i need to buy gold', 'i need to buy gold','who can i buy gold?',
'where can i buy gold', 'who sells gold?', 'need to buy gold', 'how buy gold', 'how can i buy gold', 'buygold'];
var rated_buy_gold  = [];

BuyGold.forEach(function(buy_gold) {
    rated_buy_gold.push({
      buy_gold: buy_gold,
    distance: distance(contentss, buy_gold, { caseSensitive: false })
    });
});

rated_buy_gold.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END BUYING GOLD




//Guide Phantom----------------------------------------------------------------------------------- 11
var phantom_guide= ['where can i get the phantom guide?','i need the phantom guide', 'need the phantom guide'
, 'phantom guide', 'phantomguide'];
var rated_guidephantom  = [];

phantom_guide.forEach(function(phantom__guide) {
  rated_guidephantom.push({
      phantom__guide: phantom__guide,
    distance: distance(contentss, phantom__guide, { caseSensitive: false })
    });
});

rated_guidephantom.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guide Phantom




//blue zerk guide----------------------------------------------------------------------------------- 12
var BlueZerk_Guide= ['could you provide me with the blue zerk guide?','i need the blue zerk guide', 'blue zerk buide', 'need blue zerk guide', 'bluezerk'];
var rated_Blue_Zerk_Guide  = [];

BlueZerk_Guide.forEach(function(blue_zerkGuide) {
    rated_Blue_Zerk_Guide.push({
      blue_zerkGuide: blue_zerkGuide,
    distance: distance(contentss, blue_zerkGuide, { caseSensitive: false })
    });
});

rated_Blue_Zerk_Guide.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END blue zerk guide


//Guia SetLGDG13  ----------------------------------------------------------------------------------- 14
var SetLGDG13=  ['could you provide me with the set lg dg13 guide?', 'i need the set lg dg13 guide', 'need the set lg dg13 guide', 'setlgdg13', 'setdg13'];
var ratedSetDg13  = [];

SetLGDG13.forEach(function(setdg13) {
    ratedSetDg13.push({
      setdg13: setdg13,
    distance: distance(contentss, setdg13, { caseSensitive: false })
    });
});

ratedSetDg13.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guia Equipamentodg13


//Guia rated_armalgdg13----------------------------------------------------------------------------------- 13
var weaponLgdg13= ['could you provide me with the weapon lg dg13 guide?', 'i need the weapon lg dg13 guide', 'need the weapon lg dg13 guide', 'weaponlgdg13', 'weapondg13'];
var rated_weaponlgdg13  = [];

weaponLgdg13.forEach(function(weapondg13) {
    rated_weaponlgdg13.push({
      weapondg13: weapondg13,
    distance: distance(contentss, weapondg13, { caseSensitive: false })
    });
});

rated_weaponlgdg13.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Guia rated_armalgdg13



//Guia who are you ----------------------------------------------------------------------------------- 13
var whoyouare= ['who are you?','who are you', 'who you are', 'what is your name' , 'whats your name' , 'whats ur name' , , 'tell me who are you', 'tell me who you are'];
var rate_whoyouare  = [];

whoyouare.forEach(function(youare) {
    rate_whoyouare.push({
      youare: youare,
    distance: distance(contentss, youare, { caseSensitive: false })
    });
});

rate_whoyouare.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END who are you


//Guia what are you doing----------------------------------------------------------------------------------- 13
var whatyoudoing= ['what are you doing?', 'what you doing', 'whatcha doing','what do you do', 'what you do'];
var youdoing  = [];

whatyoudoing.forEach(function(_youdoing) {
    youdoing.push({
      _youdoing: _youdoing,
    distance: distance(contentss, _youdoing, { caseSensitive: false })
    });
});

youdoing.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END que haces




//Guia Quien eres----------------------------------------------------------------------------------- 13
var areyouhuman= ['are you a human?','are you a human being?', 'are you human?'];
var humanbeing  = [];

areyouhuman.forEach(function(imhuman) {
    humanbeing.push({
      imhuman: imhuman,
    distance: distance(contentss, imhuman, { caseSensitive: false })
    });
});

humanbeing.sort(function(a, b) {
    if (a.distance < b.distance) {
    return 1;
    } else if (a.distance > b.distance) {
    return -1;
    } else {
    return 0;
    }
}); 
//END Quien eres

  
return [rated_Greetings, rated_Goodbyes, rated_recuperarID,
  rated_recoverPassword,
  rated_Launcher_Error,
  rated_FindAMediator,
  rated_Web,
  rated_Silk_By_PayPal,
  rated_LevelUp,
  rated_buy_gold,
  rated_guidephantom,
  rated_Blue_Zerk_Guide,
  ratedSetDg13,
  rated_weaponlgdg13,
  rate_whoyouare,
  youdoing,
  humanbeing];
}
  module.exports = {Spanish_logic, English_logic};
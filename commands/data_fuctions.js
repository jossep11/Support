var distance = require('jaro-winkler');
//SPANISH**************************************************************************************
function Spanish_logic(contentss ) {


//Saludos----------------------------------------------------------------------------------- 1
var saludos = ['hola','ayudar con algo', 'necesito ayuda', 'save', 'revert', 'select', 'copy', 'duplicate', 'subtract'];
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
var despedidas = ['chao','hasta luego', 'nos vemos', 'un placer', 'gracias'];
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
'olvide mi id, como la recupero', 'como puedo recuperar mi usuario', 'olvide mi usuario', 'recuperar mi usuario', 'recuperar id'];
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
'olvide mi clave, como la recupero', 'como puedo recuperar mi clave', 'olvide mi clave', 'recuperar mi clave'];
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
'hola tengo problemas con el luancher', 'tengo problemas con el luancher', 'problema con mi launcher', 'problema con launcher'];
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
'hola, donde puedo conseguir un mediador','hola, necesito de un mediador', 'necesito una mediacion'];
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
var Pagina_VideoJuego= ['¿hola cual es la pagina oficial del videojuego?','hola cual es la pagina oficial del videojuego', 'cual es la pagina oficial del videojuego',
'la pagina del videojuego'];
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
'necesito comprar silk por paypal', 'necesito silk por paypal', 'comprar silk via paypal', 'silk via paypal'];
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
'necesito subir de nivel', 'subir de nivel', 'necesito subir mas rapido de nivel'];
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
'donde puedo comprar oro', 'sabes a quien pueda comprarle oro'];
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
var Guia_Phanton= ['¿donde puedo conseguir la guía de phantom?','necesito la guia de phantom', 'guia phantom'
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
var Guia_ZerkAzul= ['¿me podria facilitar la guía de zerk azul?','necesito la guia de zerk azul', 'guia zerk azul', 'zerk azul'];
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
return [rated_Saludo, rated_Despedida, rated_recuperarID, rated_recuperarClave, rated_Problema_Luancher, 
  rated_Conseguir_Mediador, rated_Pagina_VideoJuego, rated_Silk_Via_PayPal, rated_Subir_Nivel, rated_ComprarGold,
  rated_guiaphanton, rated_guia_zerk_azul];
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
var goodbyes = ['bye','see you', 'see you later', 'thanks', 'thank you', 'thank you so much'];
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
'i forgot my id, how can i recover it', 'hey i need to recover my id', 'hello i forgot my id', 'recover my user id', 'i need to get my id'];
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



//RECUPERAR Clave----------------------------------------------------------------------------------- 4
var recoverPassword = ['how can i recover my password','hi, how can i recover my password',
'i need to recovery my password','recover my password', 'i need my password', 'hello i need my password', 'recover my pw', 
'i forgot my pw', 'i forgot my password', 'i forgot password', 'how can i recover my password', 
'i forgot my password, how can i recovery it', 'how i recover my password', 'how recover my password', 'how can i recover my pw', 'olvide mi clave', 'recover my password'];
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
//END OF RECUPERAR Clave



//LUANCHER error----------------------------------------------------------------------------------- 5
var launcher_errors = ['i have some problems with my  launcher, how can i fix it','hi, i have some errors in my launcher',
'im having problems with my launcher','my client dc me', 'i have some problems with the videogame', 'client error','i am having some problems with my launcher', 
'launcher problems'];
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
'need a mediator','hi, i need a mediator', 'hello i need a mediator'];
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
,'what is the website','website of the videogame', 'need the website'];
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
'i need to level up', 'level up', 'need to level up faster'];
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
'where can i buy gold', 'who sells gold? '];
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
, 'phantom guide'];
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
var BlueZerk_Guide= ['could you provide me with the blue zerk guide?','i need the blue zerk guide', 'blue zerk buide', 'need blue zerk guide'];
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




  
return [rated_Greetings, rated_Goodbyes, rated_recuperarID,
  rated_recoverPassword,
  rated_Launcher_Error,
  rated_FindAMediator,
  rated_Web,
  rated_Silk_By_PayPal,
  rated_LevelUp,
  rated_buy_gold,
  rated_guidephantom,
  rated_Blue_Zerk_Guide];
}
  module.exports = {Spanish_logic, English_logic};
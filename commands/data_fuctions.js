var distance = require('jaro-winkler');

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

  module.exports = Spanish_logic;
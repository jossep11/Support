
var distance = require('jaro-winkler');
function hello(contentss ) {
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


//Despedidas
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

return [rated_Saludo,rated_Despedida];



  }

  module.exports = hello;
/*
definir una función llamada template que reciba dos argumentos: una cadena y un objeto. La función debe retornar una nueva cadena reemplazando las variables de la cadena de entrada con los valores definidos en el objeto.

Las variables vienen encerradas en corchetes [] dentro del texto. Veamos algunos ejemplos para que te des una idea:

template("Hola [nombre]", { nombre: "German" }); // => "Hola German"
template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }); // => "Hola German, tu saldo es 12000"
template("Hola mundo", {}) // => "Hola mundo"

Si la variable no viene definida en el objeto, aparece el texto "undefined" (que es lo que devuelve JavaScript por defecto cuando no se encuentra una llave en un objeto):

template("Hola [nombre]", {}); // => "Hola undefined"

Si sobran variables en el objeto simplemente se ignoran:

template("Hola mundo", { nombre: "German" }); // => "Hola mundo"

*/

function template (str, obj) {
  var mensaje;

  str = str.split(/[\[+\]]/);
  // console.log(mensaje);
  for (var i = 0; i < str.length; i++) {
    if (i === 0) {
      mensaje = str[i];
    } else if (i%2 === 0) {
      mensaje = mensaje + str[i];
    } else {
      var key   = str[i];
      var value = obj[key];

      mensaje   = mensaje + value;
    }
  }

  return mensaje;
}

console.log(template("Hola mundo", {nombre: "Pablo", saldo: 1700}));
console.log(template());

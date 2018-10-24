

// Función constructora

var Persona = function(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  saluda: function () {
    return "hola, soy " + this.nombre;
  }
};

p1 = new Persona ("Pepito", "Pérez");

function printObject(obj) {
  for (var key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

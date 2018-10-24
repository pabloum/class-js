

var Persona = function(nombre, apellido){
  this.nombre   = nombre;
  this.apellido = apellido;

}


Persona.prototype.saluda = function () {
  return "Hola " + this.nombre;
};

Persona.prototype.edad = 5;

// Persona.prototype.age = function (age) {
//   this.edad = age;
// };

Persona.prototype.growUp = function () {
  this.edad++;
};

var persona1 = new Persona("Fulano", "Detal", 15);
// persona1.age(25)
console.log(persona1.nombre);
console.log(persona1.edad);
persona1.growUp()
console.log(persona1.edad);

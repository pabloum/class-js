/*
construya un objeto literal agenda y escribe una función que le permita consultar un telefono a partir del nombre
*/


// var agenda = function (name) {
//   this.name = name;
// };

var agenda = {
  contacto1: ["Pepito", 12345],
  contacto2: ["Fulano", 6789],
  contacto3: ["James", 99999]
}

function search(name, agenda) {
  for (var key in agenda) {
    if (agenda[key][0] === name) {
      console.log(agenda[key][1]);
      return agenda[key][1];
    }
  }
}

search("Pepito",agenda);

/*
// Función constructura  que tenga lo siguiente

  - atriubutos
  - numbers (array)
  - addNumber (función)
  - findNumber (función)

*/

var agendaConstructora = function () {
  // this.names   = [];
  // this.numbers = [];
  this.contact = [];
};

agendaConstructora.prototype.addNumber = function (name, number) {
  // this.names.push(name);
  // this.numbers.push(number);
  var newContact = {
      name: name,
      number: number
  };

  this.contact.push(newContact);
};

agendaConstructora.prototype.showAgenda = function () {
  for (var i = 0; i < this.contact.length; i++) {
    contact = this.contact[i];
    console.log(contact.name + " " + contact.number);
  }
};

agendaConstructora.prototype.findNumber = function (name) {
  // for (var i = 0; i < this.names.length; i++) {
  //   if (name === this.names[i]) {
  //     console.log("El numero de " + name + " es " + this.numbers[i]);
  //     return this.numbers[i];
  //   }
  // }
  return this.contact.find(function(contact) {
    return contact.name === name;
  });

};


var agenda = new agendaConstructora ();
agenda.addNumber("Pepito", 123456);
agenda.addNumber("David R", 666);
agenda.showAgenda();
console.log(agenda.findNumber("David R"));

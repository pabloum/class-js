
var pepito = {nombre:"Pepito","apellidos":"gomez"};

var hijo = {nombre: "Pepe", german: {nombre: "German"}};

var maria = {
  nombre: "Terah",
  edad: 32,
  altura: 1.70,
  peso: 60,
  colorPelo: "cafe",
  esposo: pepito,
  hijos: hijo,

  // bmi: this.peso/this.altura/this.altura

  bmi: function () {
    console.log("entré a la función " + maria.peso);
    return (this.peso/this.altura/this.altura);
  }
}

console.log(maria.bmi());

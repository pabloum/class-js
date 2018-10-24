

var surname = 'Firefox'

function closure() {
  var name = "Mozilla";

  function showName() {
    console.log(name + ' ' + surname);
  }

  showName();
}

closure();

/*
Una forma de encapsular y aún así recordar el contexto en el que se encontraba
*/

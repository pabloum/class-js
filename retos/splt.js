function split (str) {

  var cadena = str.split('+').join(',').split('-').join(',').split('*').join(',').split(',');

  return cadena;
}

console.log(split("hola-mundo+como*estas"));

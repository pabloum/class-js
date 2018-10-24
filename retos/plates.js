function isPlate (str) {

  if (str.match(/^[A-Z]{3}[0-9]{3}$/)) {
    return true;
  } else {
    return false;
  }

}

function plates (str) {

  str = str.split(" ");

  var plate = [];

  for (var i = 0; i < str.length; i++) {
    if (isPlate(str[i])) {
      plate.push(str[i]);
    }
  }

  return plate;
}


console.log(plates("Iba en un AAA123 y después en un BBB987"));


/*
console.log(isPlate("")) //=> false
console.log(isPlate("MVV387")) //=> true
console.log(isPlate("mvv387")) //=> false
*/

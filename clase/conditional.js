//
//
// alert("Hola, mundo");
//
//
// // var num = parseInt(prompt("ingrese un número para saber si es par o no"));
//
// num = parseInt(Math.random() * 100);
//
// if (num % 2 === 0) {
//   alert("El número " + num + " es par");
// }else{
//   alert("El número " + num + " es impar");
// }
//
//
// var cars = ["BMW", "Mercedes", "Ferrari"];
//
// console.log(cars);
//
// cars.push("Toyota");
//
// console.log(cars);

// var person = {name:"John", surname:"Uribe", age:30};
//
// for (var x in person) {
//   console.log(x + ': ' + person[x]);
// }
//
//
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }


// function sumaArray (arr) {
//
//   var res = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//
//   return res;
//
// }
//
// console.log(sumaArray([1,2,3,4,5,6,7,8,9]));
//

// function cadena(str) {
//   str = str.split(" ");
//   var longer = str[0];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].length > longer.length) {
//       longer = str[i];
//     }
//   }
//   return longer;
// }
//
// console.log("La palabra más larga de la cadena es '" + cadena("Hola, bienvenidos a todos") + "'");


// var a = [1, 2, 3, 4, 5];
// a.splice(2);
//
// console.log(a);


function factorial (num){

  var fact = 1;

  while (num >= 1) {
    fact *= num;
    num--;
  }

  return fact;
}

function factorial2(num){
  if (num > 1) {
    return (num * factorial2(num-1));
  } else {
    return 1;
  }
  // (num > 1) ? (return (num * factorial2(num-1)) ) : (return 1);
}

console.log(factorial(5));
console.log(factorial2(5));

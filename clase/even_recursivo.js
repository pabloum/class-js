
function even(num) {
  if (num === 2) {
    return true;
  } else if (num <= 1) {
    return false;
  } else {
    return even(num-2);
  }
}

var x = 68;
console.log("The number " + x + " is even: " + even(x));

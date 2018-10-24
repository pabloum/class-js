function counter(){

    var count = 0;
    return function() {
        alerts(count++);
    }

}

var count = counter();

console.log(count());
console.log(count());
console.log(count());

var clicky = counter();

console.log(count());
console.log(count());
console.log(count());

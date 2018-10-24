
function Car (marca, modelo, cilindraje) {
  this.marca      = marca;
  this.modelo     = modelo;
  this.cilindraje = cilindraje;
  this.speed      = 0;
  this.accelerate = function() {
    this.speed = this.speed + this.cilindraje*0.3;
  }

}

obj1 = new Car("Mazda", 2018, 1600);
obj2 = new Car("Audi", 2015, 1800);

obj1.accelerate();
obj1.accelerate();

obj2.accelerate();

console.log(obj1.speed);
console.log(obj2.speed);

function whos_faster(obj1, obj2){
    if (obj1.speed > obj2.speed) {
      console.log("The car brand " + obj1.marca + " is currently faster than " + obj2.marca);
    } else if(obj1.speed < obj2.speed) {
      console.log("The car brand " + obj1.marca + " is currently faster than " + obj2.marca);
    } else {
      console.log("Both cars are moving at the same velocity");
    }
}

whos_faster(obj1,obj2);

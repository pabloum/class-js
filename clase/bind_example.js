

var person = {
  name: "Pablo Uribe",
  hello: function(thing) {
    console.log(this.name + " says hello, " + thing);
  }
};

person.hello("(stuff)");

// Poderoso para enlazar la ejecucuión de una función particular a un contexto particular
person.hello.call({name: "Marcela Zapata"}, "apple");
person.hello("(stuff)");


// bind trabaja el mismo concepto. Sin embargo es que call lo hace inmediato. Bind debe ser utilizado para asignarlo a otra variable

person.hello("world")
var helloFunc = person.hello.bind({name: "Toro Herrera"});
helloFunc("702")

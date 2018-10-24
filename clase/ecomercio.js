/*
Función constructora Ecomercio que tenga productos
que se le puedan agregar productos(id, nombre, precio, categoría, cantidad)
una función que retorne los productos de una categoría particular (filter)
una función que retorne el valor total del inventario (reduce)
*/


var Ecommerce = function () {
  this.products = [];
  this.addProduct = function (id, name, price, category, quantity) {
    var product = {
      id: id,
      name: name,
      price: price,
      category: category,
      quantity: quantity
    };
    this.products.push(product);
  };
  this.productsByCategory = function (category) {
    return this.products.filter(function(product) {
      return product.category === category;
    })
  };

  this.totalInventory = function () {
    return this.products.reduce((total, amount) => total + (amount.price * amount.quantity),0);
  };
};

var ecommerce = new Ecommerce;
ecommerce.addProduct(1, "camiseta", 666, "tecnología", 5);
ecommerce.addProduct(2, "blue jean", 777, "aseo", 5);
ecommerce.addProduct(3, "chaqueta", 666, "tecnología", 5);
ecommerce.addProduct(4, "cachucha", 666, "tecnología", 5);

console.log(ecommerce.productsByCategory("tecnología"));

console.log("\n");

console.log(ecommerce.products);

console.log(ecommerce.totalInventory());

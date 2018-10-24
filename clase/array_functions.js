var numbers = [1,2,3,4,5];
var doubles = numbers.map(function (x) {
  return x * 2 ;
});

console.log(numbers);
console.log(doubles);

var words = ["ola", "k","ase"];
totalByProduct
var result = words.filter(word => word.length > 2);

console.log(result);

var array1 = ['a','b','c','d'];

array1.forEach(function(element) {
  console.log(element);
});

var euros = [29.34, 43.54, 34.85];
var sum = euros.reduce((total,amount) => total + amount);
console.log(sum);

var posts = [
  {id: 1, upVotes: 2},
  {id: 2, upVotes: 234},
  {id: 3, upVotes: 23}
];

var postInQuestion = posts.find(p => p.id === 2);
console.log(postInQuestion);

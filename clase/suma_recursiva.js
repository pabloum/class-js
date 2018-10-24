
function sumaArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return (arr[0] + sumaArray( arr.splice(1,arr.length)));
  }
}

console.log(sumaArray( [1,2,3,4,5,6]) );

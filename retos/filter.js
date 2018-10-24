
function fnc(num){
  return true;
}

var arr = [1,2,3,4];

var res = false;
var mat = [];

for(var i=0; i < arr.length; i++){
  var j = 0;
  res = fnc(arr[i]);
  console.log(res);
  if (res == true){
    mat[j] = arr[i];
    j++;
  }
}

console.log(mat)

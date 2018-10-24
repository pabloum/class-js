
arr = [1,2,3];
bConfirm = true;


if(bConfirm){
  arr.sort(function(a, b){return b - a}).reverse();
}else{
  arr.sort(function(a, b){return b - a});
}

console.log(arr);

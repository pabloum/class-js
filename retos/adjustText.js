
var msj = "";
var num = 8;

var msj2 = "";

  // if(msj == ""){
  //   msj2 = msj;
  //   for(var i = 0; i < num; i++){
  //       msj2 = msj2 + " ";
  //     }
  // }else{
    for (var i = 0; i < msj.length; i ++) {
      if(i < num){
          msj2 = msj2 + msj[i];
      }else{
        break;
      }
    }

    if(msj2.length < num){
      for(var i = msj2.length; i < num; i++){
        msj2 = msj2 + " ";
      }
    }
  // }

  console.log("-" + msj2 + "-");

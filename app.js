var comparacion = function(array1, array2){
//  document.write("funcion de prueba");
  if(array1.length != array2.length){
    document.write("las longitudes no son iguales");
  return false
  }
  else{
    for(var i=0; i<=array1.length; i++){
      document.write(array1[i],array2[i]);
      if(array1[i]!==array2[i]){

        document.write("los elementos son diferentes");
        return false;
      }
    }
    document.write("los elementos son iguales");
    return true;
  }
}

var arreglo1=[1,2,3,4,5,6,7,8,9,0];
var arreglo2=[1,2,3,4,5,6,7,8,9,0];
comparacion(arreglo1,arreglo2);

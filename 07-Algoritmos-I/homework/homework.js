'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var inn=2;
  var factores=[1];
  while(num>1){
    if(num%inn==0){
      num=num/inn;
      factores.push(inn);
      inn=2;
    }else{
      inn++;
    }
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let index=0;
  var a=0;
  var b=0;
  while(b<=array.length){
    if (array[index] && array[index+1] ) {
      if(array[index]>array[index+1]){
        a=array[index];
        array[index]=array[index+1];
        array[index+1]=a;
        index++;
        b--
      }else{
        b++
        index++;
      }
    }else{
      index=0;
    }
  }
  return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var x=0;
  var y=1;
  var temp=0;
  var temp2=y;
  //x=4,y=5; temp2=5
  while(y!=100){
    if(array[x]!=undefined){
      if(array[y]!=undefined){
        if(array[y]<array[x]){
          temp=array[x];
          array[x]=array[y];
          array[y]=temp;
          x--;//
          y--;//
        }else{
          y++;
          x++;
          temp2=y;
        }
      }else{
        y=100;
      }
    }else{
      y=temp2+1;
      x=y-1;
      temp2=y
    }
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var x=0;
  var y=1;
  var tmp1=0;
  var tmp2=x;
  
  while(x<array.length){
    if(array[y]){
      if(array[x]){
        if(array[x]>array[y]){
          //x=0,y=0
          x=y;//x=9
          y=x+1;//y=10
        }else{
          y++;
        }
      }
    }else{
      y=x;//y=9
      x=tmp2;//x=0
      tmp1=array[x];
      array[x]=array[y];
      array[y]=tmp1;
      x++;
      y=x+1;
      tmp2=x;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

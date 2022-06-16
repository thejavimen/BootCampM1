'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if(array.length<2){
    return array;
  }
  let x=array.pop();
  let idx=0;
  let ma=[];
  let me=[];
  while(idx<array.length){
    if(x<array[idx]){
      ma.push(array[idx]);
    }else{
      me.push(array[idx]);
    }
    idx++;
  }
  return quickSort(me).concat(x,quickSort(ma));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<2){
    return array;
  }
  let mid=Math.floor((array.length)/2);
  let izq=array.slice(0,mid);
  let der=array.slice(mid,array.length);
  return ordenar(mergeSort(izq),mergeSort(der));
}

function ordenar(aIzq,aDer){
  let vec=[];
  let idx=0;
  let idx2=0;
  while(idx!=1000){
    if(aIzq[idx]!=null){
      if(aDer[idx]!=null){
        if(aIzq[idx]>aDer[idx2]){
          vec.push(aDer[idx2]);
          aDer.shift();
        }else{
          vec.push(aIzq[idx]);
          aIzq.shift();
          idx2=0;
        }
      }else{
        
        if(aIzq[idx]!=null){
          vec=vec.concat(aIzq);
          idx=1000;
        }else{
          idx=1000;
        }
      }
    }else{
      if(aDer[idx]!=null){
        vec=vec.concat(aDer);
        idx=1000;
      }else{
        idx=1000;
      }
    }
  }
  return vec;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

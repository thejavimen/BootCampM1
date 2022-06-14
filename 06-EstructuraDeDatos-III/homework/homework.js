"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(data) {
  this.value=data;
  this.left=null;
  this.right=null;
}
BinarySearchTree.prototype.size=function(){
  if(!this.left && !this.right)return 1;
  if(!this.left && this.right)return 1+this.right.size();
  if(this.left && !this.right)return 1+this.left.size();
  if(this.left && this.right)return 1+this.right.size()+this.left.size();
}
BinarySearchTree.prototype.insert=function(data){
  if(data>this.value){
    if (this.right) {
      this.right.insert(data);
    }else{
      this.right=new BinarySearchTree(data);
    }
  }
  if(data<this.value){
    if(this.left){
      this.left.insert(data);
    }else{
      this.left=new BinarySearchTree(data);
    }
  }
  
}
BinarySearchTree.prototype.contains=function(data){
  if(this.value==data)return true;
  if(data>this.value){
    if(this.right){
      return this.right.contains(data);
    }else{
      return false;
    }
  }

  if(data<this.value){
    if(this.left){
      return this.left.contains(data);
    }else{
      return false;
    }
  }
}
BinarySearchTree.prototype.depthFirstForEach=function(cb, order){
  if(order === "pre-order"){
    //root,left,right
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb,order);
    if(this.right) this.right.depthFirstForEach(cb,order);
  }else if(order === "post-order"){
    //left, right, root
    if(this.left) this.left.depthFirstForEach(cb,order);
    if(this.right) this.right.depthFirstForEach(cb,order);
    cb(this.value);
  }else{
    //in-order: izq-root-der
    if(this.left) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb,order);
  }

}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,array=[]){
   if (this.left !== null) {
    // rama izq
    array.push(this.left);
  }

  if (this.right !== null) {
    // rama der
    array.push(this.right);
  }

  cb(this.value);

  if (array.length > 0) {
    //[rama izq, rama der]
    array.shift().breadthFirstForEach(cb, array);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

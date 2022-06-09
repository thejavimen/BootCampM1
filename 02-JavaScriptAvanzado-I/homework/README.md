
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar); //undefined
console.log(baz); //error: por que no sabe que acer con el baz no fue declarada en ningun lugar del codigo
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //invocacion de funcion--> crea nuevo contexto de ejeccion.
//Se esperaria que el resultado fuese Tony pero nos da Franco debido a que solo es un bloque
```

```javascript
var instructor = "Tony";
console.log(instructor);//Resultado: Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Resultado: Franco
   }
})();
console.log(instructor);// resutado: Tony
//(function(){})() iife es una funcion que se ejecuta en el momento
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";//The Flash
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Franco: LET puede crear una nueva variable dentro de un bloque sin afectar la variable global lo que no pasa con VAR
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //nan --> not a number
7 / 0 //infinity
{}[0] //undefined
parseInt("09") //9
5 && 2 //true && true entonces devuelve el ultimo: 2
2 && 5 // 5
5 || 0 // true || false devuele el verdadero: 5 
0 || 5 // 5
[3]+[3]-[10] // Por defecto js convierte lo arrays en string de tal forma que el resultado nos da: 23
3>2>1 //Entonces 3>2 es true luego true>1 es false. el valor numerico de true es 1: 1>1 es false
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //undefined: debido a que js hace hoisting con la variable snack apesar de que se crea y se incializa la variable de forma global. dentro del contexto de ejecucion de getFood vuleve a crear la variable pero no se inicializa y como el bloque nunca se ejecuta no habia forma de darle un valor a la variable. contrario a si usariamos LET que es una variable de bloque de tal forma que la variable snack global no se modifica dentro del contexto de ejecucion de la funcion.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```

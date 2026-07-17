###                              Métodos de arrays
Los arrays (también llamados vectores o matrices) cuentan con muchos métodos. Para hacer las cosas más sencillas, en este capítulo los separamos en grupos.
Agregar/remover ítems
Ya conocemos algunos métodos que agregan o extraen elementos del inicio o final de un array:

```arr.push(...items) – agrega ítems al final.```
```arr.pop() – extrae un ítem del final.```
```arr.shift() – extrae un ítem del inicio.```
```arr.unshift(...items) – agrega ítems al principio.```

###                                    splice
¿Cómo podemos borrar un elemento de un array?

Los arrays son objetos, por lo que podemos intentar con delete:
``` let arr=["voy","a","casa"]```
```delete arr[1];```
```console.log(arr[1])```
```console.log(arr.length)```
El elemento fue borrado, pero el array todavía tiene 3 elementos; podemos ver que arr.length == 3.
Es natural, porque delete obj.key borra el valor de key, pero es todo lo que hace. Esto está bien en los objetos, pero en general lo que buscamos en los arrays es que el resto de los elementos se desplace y se ocupe el lugar libre. Lo que esperamos es un array más corto.

Por lo tanto, necesitamos utilizar métodos especiales.
##                                   metodo arr.splice
funciona como una navaja suiza para arrays. Puede hacer todo: insertar, remover y remplazar elementos.
La sintaxis es:
```arr.splice(start[, deleteCount, elem1, ..., elemN])```
```let arr = ['yo','estudio','javascript'];```
```arr.splice(1, 1);```
```console.log(arr)```
### devolver elementos removidos
```let arr3=['yo','estudio','java']```
```console.log(arr3)```
```arr3.splice(2, 0,'para','desarrollar','software' )```
```let removed = arr2.splice(3, 2)```
```console.log(removed)//[ 'yo', 'estudio', 'para', 'desarrollar', 'software', 'java' ]```
### metodo arr.slice
##### Devuelve un nuevo array copiando en el mismo todos
##### los elementos desde principio hasta final. arr[principio],[final]
```console.log('copia el array[principio],[final]')```
```let arr5 = ["t", "e", "s", "t"];```
```console.log(arr5)```
```console.log( arr5.slice(1, 3) ); // e,s (copia desde 1 hasta 3)```
##### También podemos invocarlo sin argumentos: arr.slice() crea una copia de arr.  
Se utiliza a menudo para obtener una copia que se puede transformar sin afectar el array original.
### metodo arr.concat crea un nuevo array que incluye los valores de otros arrays y elementos adicionales
```arr.concat(arg1, arg2... argN)```
Este acepta cualquier número de argumentos, tanto arrays como valores.
##### El resultado es un nuevo array conteniendo los elementos de arr, después arg1, arg2 etc.
Si un argumento argN es un array, entonces todos sus elementos son copiados. De otro modo el argumento en sí es copiado.
```let arr = [1, 2] ```
crea un array a partir de: ```arr y [3,4]```
```console.log( arr.concat([3, 4]) ); // 1,2,3,4``` 
crea un array a partir de: ```arr y [3,4] y [5,6]```
```console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6```
Normalmente, solo copia elementos desde arrays. Otros objetos, incluso si parecen arrays, 
son agregados como un todo:
```let arr = [1, 2];```
```let arrayLike = {```
```  0: "something",```
```  length: 1```
```};```

```console.log( arr.concat(arrayLike) ); // 1,2,[object Object]```
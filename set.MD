### Que son los Set
Los Set en Javascript son estructuras de datos nativas muy interesantes para representar conjuntos de datos. 
La característica principal es que los datos insertados no se pueden repetir.
En los sets se puede incluir cualquier tipo de elemento, sin embargo, existe otra estructura derivada de los Set, 
que veremos más adelante que tiene ciertas diferencias y restricciones.

## Que es un  Set
Como hemos dicho, la característica principal de los conjuntos es que es una estructura que no 
permite valores repetidos, por lo que si intentamos insertar un valor que ya existe, no se insertará de nuevo y, 
por lo tanto, puedes tener la seguridad que un Set nunca tendrá el mismo elemento almacenado, despreocupándote,
 por ejemplo, si tienes que asegurarte de que no existan elementos duplicados, ya que es un caso que no puede ocurrir.

| tipo     | Propiedad      | Descripción                                                            |
| -------- | -------------- | ---------------------------------------------------------------------- |
| Number   | .size          | Propiedad que devuelve el número de elementos que tiene el conjunto.   |
| Set      | .add(elem.)    | agrega un elem. al conjunto (no está repetido) y devuelve el set. Muta |
| Boolean  | .has(elem.)    | comprueba si el elemen. ya existe en el conjunto                       |
| Boolean  | .delete(elem.) | elimina el elem. del conjunto, devuelve, si lo elimino correctamente   |
| -------- | .clear()       | vacía el conjunto completo.                                            |



  
#####                   Anadir elementos
Metodo .add() permite anadir elementos al conjunto
 ```set1.add("temperatura: "); ```
 ```set1.add(24); ```
 ```set1.add("humedad: "); ```
 ```set1.add(67); ```
 ```set1.add("viento: "); ```
 ```set1.add(65); ```
  ``` const set1 = new Set([5,6,7,8,9,11,13]); ```
  ``` set1;```
  ```console.log(set1.size)//7```
  ## Propiedad has()
  la propiedad has devuelve true o false si un elemento existe  dentro de un conjunto 
  ``` const set2 = new Set([1,2,3,4,5,7]);```
  ``` set2;```
  ``` console.log(set2.has(3));//true```
 ## Propiedad delete()
 Si necesitamos borrar algún elemento del conjunto, podemos utilizar el método .delete(). Al igual que el anterior, 
 devuelve un booleano.Si el borrado se realizó con éxito, devolverá true, 
 si no pudo realizarse (no existe el elemento), devolverá false.
  ``` const set3 = new Set([4,5,7,8,9,11,14,16]);```
    ``` set3.delete(3);```//true
    ``` set3.delete(6);```//false
## Propiedad clear()
Si por otro lado, queremos hacer un borrado completo de los elementos, utilizaremos el método .clear(), 
que no devuelve nada. Simplemente borrará todos los elementos del conjunto y lo dejará vacío.
  ``` const set4 = new Set([4,5,7,8,9,11,14,16]);```
  ``` set4.clear();```
  ``` console.log(set4.size)```
####             
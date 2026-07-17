### Que es un Map
Los Map en Javascript son estructuras de datos nativas que permiten implementar una estructura,
 de tipo mapa, es decir, una estructuras donde tiene valores guardados a través de una clave,
  para identificarlos. Comúnmente, esto se denomina pares clave-valor.
  ``` const map = new Map();```
  ``` const map = new Map([[1,'uno']])```
  ```const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);```
  ``` map.constructor.name;```
En este ejemplo, creamos un elemento map, que no es más que un mapa de pares clave-valor. 
El primer map se define como un mapa vacío, el segundo, es un mapa con un solo elemento, 
y el tercero con 3 elementos. 
Para inicializar los mapas con datos, se introduce como parámetro un array de entradas (un array de arrays), 
que en nuestro tercer caso tiene estas combinaciones: 
>Clave Number 1 => Valor String 'uno'
>Clave Number 2 => Valor String 'dos'
>Clave Number 3 => Valor String 'tres'
### Tipos de datos Map
Los tipos de dato Map son muy similares a los Objetos de Javascript, ya que estos últimos se pueden usar, 
como estructuras de diccionario mediante pares clave-valor. Sin embargo, los Object tienen algunas diferencias 
como que pueden colisionar algunos nombres de claves o que las claves deben ser String o Symbol , entre varias otras.
**Propiedades y metodos del Map**
___________________________________________________________________________________________________
|  Tipo           | metodo        |Descripcion                                                     |
|--------------------------------------------------------------------------------------------------|
| Number          |.size          | Propiedad devuelve el numero de elementos que tiene el mapa    |
| Map             |.set(key,value)| Establece o modifica la clave key con el valor value. Muta     |
| Boolean         |.has(key)      | Comprueba si key ya existe en el mapa y devuelve si existe o no|
| Object          |.get(key)      | Obtiene el valor de la clave key del map                       |
| Boolean         |.delete(key)   | elimina el elemento con la clave key del mapa, devuelve si, lo |
|                                    eliminó correctamente.                                        |
|-----------------|.clear()       |vacia el mapa completamente                                     |
____________________________________________________________________________________________________






###                             Utilizando typeof() 

Si tenemos dudas, podemos utilizar la función typeof, que nos devuelve el tipo de dato 
de la variable que le pasemos por parámetro. Veamos que nos devuelve typeof() 
sobre las variables del ejemplo anterior:

```console.log(typeof text);```      // "String"
```console.log(typeof number);```     // "Number"
```console.log(typeof boolean);```    // "Boolean"
```console.log(typeof notDefined)```; // undefined

Como se puede ver, mediante la función typeof podremos determinar que tipo de dato 
se esconde en una variable. Observa también que la variable u, al haber sido declarada sin valor, 
Javascript le da un tipo de dato especial: undefined (sin definir).
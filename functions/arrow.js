//Declaración Función de tipo Expresión
/*let func = (arg1, arg2, ..., argN) => expression;
 * func nombre de la funcion
*/
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
//funciones flecha
/*
 *let func = function(arg1, arg2, ..., argN) {
 *    return expression;
 *}; 
 */

 /*Algunas tienen paréntesis alrededor de los parámetros mientras que otras no.  
 Algunas utilizan corchetes y la palabra clave return, otras no. 
 Una incluso se extiende en múltiples líneas mientras que las otras 
 consisten en una línea simple.*/
 let sum = (a, b) => a + b;//(a, b) parametros
 /*esta funcion flecha es una forma mas corta
  *
  *let sum = function (a, b){
     return a + b;
  }
  */
 /*Hay una diferencia sintáctica muy importante para tener en cuenta: 
  * las funciones de flecha utilizan la flecha => en lugar de la palabra clave function. 
  * Existen otras diferencias para tener presentes cuando componemos funciones de flechas 
  * y eso es lo que vamos a explorar a continuación.
 */
 console.log("la suma es: " + sum(12, 2) );
  let prod = (c, d) => c * d;
  console.log(typeof prod);
 /*esta funcion flecha es una forma mas corta
  *
  *let prod = function (c , d){
     return c * d;
  }
  */
 console.log("el producto es: " + prod(3, 8));
 let pot = (e, f) => e ** f;
 console.log(typeof pot);
 /*esta funcion flecha es una forma mas corta
  *
  *let pot = function (e, f){
     return e**f ;
  }
  */
 console.log("potencia: " + pot(16, 2));
 let div =(g, h) => g / h;
 /*esta funcion flecha es una forma mas corta
  *
  *let div = function (g, h){
     return g / h ;
  }
  */
 console.log("Division: " + div(64, 4));
 let resto =(i, j) => i % j;//(i, j) parametros
 /*esta funcion flecha es una forma mas corta
  *
  *let resto = function (i, j){
     return i % J ;
  }
  /*Si la Función no tiene parametro, los parentesis
   * estaran vacios pero deben estar presente
   * let sayHi = () => console.log("¡Hola Mundo!");
   * ()sin parametros
   */
 console.log("Resto: " + resto(34, 5) );
 let sayHi = () => console.log("¡Hola Mundo!");
 sayHi();
 let edad =18;
 let suma = (a, b) => {  // la llave abre una función multilínea
    console.log(typeof suma);
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };
  
  console.log( sum(9, 21) ); // 3
  let sumas = (a, b) => {  // la llave abre una función multilínea
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };
console.log( sumas(9, 21) ); // 3
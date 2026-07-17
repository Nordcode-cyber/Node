####                                 FUNCIONES FLECHA  =>

Sin embargo, las funciones flechas tienen algunas ventajas a la hora de simplificar código bastante interesantes:
Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
Por lo tanto, el ejemplo anterior se puede simplificar aún más:

```const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"```
```const func = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1```
```const func = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b```
                                              Argumentos o Parámetros

```->console.log( sum(1, 2) ); // 3```
Como puedes ver, ```(a, b) => a + b``` significa una función que acepta dos argumentos llamados a y b. 
Tras la ejecución, evalúa la expresión a + b y devuelve el resultado.
Si solo tenemos un argumento, se pueden omitir paréntesis alrededor de los parámetros, lo que lo hace aún más corto.

Por ejemplo:

```let double = n => n * 2;```
```// Más o menos lo mismo que: let double = function(n) { return n * 2 }```

```->console.log( double(3) ); // 6```
*Si no hay parámetros, los paréntesis estarán vacíos; pero deben estar presentes:*

```let sayHi = () => ->console.log("¡Hola!");```

```sayHi();```
Las funciones de flecha se pueden usar de la misma manera que las expresiones de función.

Por ejemplo, para crear dinámicamente una función:

```let age = prompt("What is your age?", 18);```

```let welcome = (age < 18) ?```
```  () => ->console.log('¡Hola!') :```
```  () => ->console.log("¡Saludos!");```
```welcome();```

####                                      Utilidad de las funciones flecha
Las funciones de flecha pueden parecer desconocidas y poco legibles al principio, 
pero eso cambia rápidamente a medida que los ojos se acostumbran a la estructura.
Son muy convenientes para acciones simples de una línea, cuando somos demasiado flojos para escribir muchas palabras.

####                                       Funciones de flecha multilínea
Las funciones de flecha que estuvimos viendo eran muy simples. Toman los parámetros a la izquierda de =>, 
los evalúan y devuelven la expresión del lado derecho.
A veces necesitamos una función más compleja, con múltiples expresiones o sentencias. 
En ese caso debemos encerrarlos entre llaves. La diferencia principal es que las llaves, 
necesitan usar un return para devolver un valor (tal como lo hacen las funciones comunes).

Como esto:

```let sum = (a, b) => {  // la llave abre una función multilínea```
  ```let result = a + b;```
  ```return result; // si usamos llaves, entonces necesitamos un "return" explícito```
```};```

```->console.log( sum(1, 2) ); // 3```

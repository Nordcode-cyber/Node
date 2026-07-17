let arr2=['yo','estudio','javascript','ahora','mismo'];
console.log(arr2)
arr2.splice(3, 4, 'para', 'aprender','node.js');
console.log(arr2)
console.log('devolver elementos removidos')
let removed = arr2.splice(1)
console.log(removed)//[ 'estudio', 'javascript', 'para', 'aprender', 'node.js' ]
console.log('********************************************************************************')
let arr3=['yo','estudio','java','hoy']
console.log(arr3)
arr3.splice(3,4,'para','desarrollar','software')
console.log(arr3)
console.log('devolver elementos removidos')
let removed1 = arr3.splice(1)
console.log(removed1)//[ 'estudio', 'java', 'para', 'desarrollar', 'software' ]
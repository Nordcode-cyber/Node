console.log('%c 🎉 ¡Si puedes imaginar, lo puedes programar! 🚀', 'font-size: 22px; color: purple; font-weight: bold;');
const set = new Set();
set.add(5);
set.add("A");
set.add(NaN);
set.add(8);
set.add(5);     // No se inserta
set.add(undefined);
set.add(null);
set.add(NaN);
set.add("A");
set.add("pepe");
set;
console.log(set)
const set1 = new Set();
set1.add("temperatura: ");
set1.add(24);
set1.add("humedad: ");
set1.add(67);
set1.add("viento: ");
set1.add(65);
set1;
console.log(set1)
console.log(set1.size)
const set2 = new Set();
set2.add("Piso");
set2.add(2);
set2.add("Pared");
set2.add(4);
set2.add("Darsena");
set2.add(3);
set2.add("puede estacionar");
set2;
console.log(set2.size)
console.log(set2)
console.log(set2.has(4));
console.log(set2.has("Piso"));
console.log(set2.has(5));
//set2.delete(2);
console.log(set2.size)
console.log(set2)
set.clear();
console.log(set.size);

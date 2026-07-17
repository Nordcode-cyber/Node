const map = new Map([[1, "direccion"], [2, "altura"],[3, "localidad"],[4, "codigo postal"]]);
console.log(map.size)
console.log(map)
console.log(map.has(2));
console.log(map.has(5));
map.clear();
console.log(map.size)
const map1 = new Map([[1, "camioneta"], [2, "barco"]]);
console.log(map1.size)    // 2
console.log(map1)
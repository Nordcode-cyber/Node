const mensaje = function(){
    console.log("Este mensaje se muestra después de 1 segundos, deberia mostrarse primero");
}
setTimeout(mensaje, 1000);
setTimeout(() => { //function arrow
console.log("Este mensaje se muestra después de 3 segundos");
}, 3000);

function solicitudServidor(consulta, callback){
  setTimeout(function(){
    var respuesta = consulta + "tracking server...";
    callback(respuesta);
  },7000);
}

function obtenerResultados(resultados){
  console.log("Respuesta del servidor: " + resultados);
}
arr = ['http: ok |'+'ssl: down |'+'dns: flashing |'+'icmp: ok ..']
solicitudServidor(arr, obtenerResultados); 
function solicitudDatos(peticion, callback){
  setTimeout(function(){
    var replica = peticion + "mostrando datos personales...";
    callback(replica);
  },15000);
}

function obtenerPeticion(peticion){
  console.log("Respuesta del sistema: " + peticion);
}
arr1 = ['nombre: abel |'+'apellido: gomez |'+'edad: 55'+'|domicilio: |'+'calle: | Mercaderes 2345 |'+'Loc: Moron'+'|']
solicitudDatos(arr1, obtenerPeticion); 
setTimeout(() => { //function arrow
console.log("ya es hora de unas buenas birritas 🍺🍺🍺🍺🍺 ");
}, 17000);
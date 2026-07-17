###                  $node --watch index.js

Importamos uptime, una función del sistema operativo node:os
Dicha función nos devuelve el tiempo que lleva la máquina encendida (en segundos)
Creamos una constante hours que convierte los segundos en horas y los redondea
Creamos una constante RTF, que es un objeto RelativeTimeFormat. Este objeto formateará números en tiempos relativos (hace X, dentro de X...).
Creamos una constante time que donde formateamos las hours y las guardamos como .
Ahora, vamos a ejecutar nuestro script, colocando el parámetro --watch para que vigile los cambios
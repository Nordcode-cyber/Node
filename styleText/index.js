import { styleText } from "node:util";



console.log(styleText("green", "ok: "), "Esto es un mensaje normal.");
console.log(styleText("yellow", "Error: "), "Esto es un mensaje error.");
console.log(styleText("red", "Alarm: "), "Esto es un mensaje de alarma.");
const redFrame = ["bgRed", "white"];
const whiteFrame = ["bgWhite", "black"];

console.log(styleText(redFrame, "¡Hola ") + styleText(whiteFrame, " Mundo!"));



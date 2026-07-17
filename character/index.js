import { styleText, stripVTControlCharacters } from 'node:util';

const messageWithColor = styleText("blue", "Hello ") + styleText("red", "world!");

console.log(messageWithColor);  // A color
//console.log(stripVTControlCharacters(messageWithColor)); // Sin color

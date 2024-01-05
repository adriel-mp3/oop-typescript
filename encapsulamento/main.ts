import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";

let mage: Personagem = new Mage("Fulano");
let warrior: Personagem = new Warrior("Beltrano");
let priest: Personagem = new Priest("Sicrano");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
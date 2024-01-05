import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";

const mage: Personagem = new Mage("Fulano");
const warrior: Personagem = new Warrior("Beltrano");
const priest: Personagem = new Priest("Sicrano");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
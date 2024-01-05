import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Mage extends Personagem {
  private _intelecto = 0;
  private _velocidade = 0;
  
  constructor(nome: string) {
    super(nome);
    this.vidaAtual = Util.randomizar(10, 40);
    this.vidaMaxima = Util.randomizar(20, 90);
    this.ataque = Util.randomizar(5, 10);
    this.defesa = Util.randomizar(10, 20);
    this.energia = Util.randomizar(50, 200);
    this._intelecto = Util.randomizar(20, 50);
    this._velocidade = Util.randomizar(10, 50);
  }
}
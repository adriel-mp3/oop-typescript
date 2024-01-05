import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
  private _forca = 0;
  private _agilidade = 0;

  constructor(nome: string) {
    super(nome);
    this.vidaAtual = Util.randomizar(10, 40);
    this.vidaMaxima = Util.randomizar(20, 90);
    this.ataque = Util.randomizar(5, 10);
    this.defesa = Util.randomizar(10, 20);
    this.energia = Util.randomizar(50, 200);
    this._forca = Util.randomizar(20, 50);
    this._agilidade = Util.randomizar(10, 50);
  }
}

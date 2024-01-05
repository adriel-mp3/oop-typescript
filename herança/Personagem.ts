// criar uma classe Personagem com atributos que se repetirão em outras classes que serão extendidas
// nome, armadura, vidaMaxima e vidaatual
// criar uma classe Util com um método estático randomizar e remover da classe Personagem
// criar classe Warrior, Priest e Mage
// Warrior terá forca e agilidade

import { Util } from "../herança/Util";

export class Personagem {
  protected _nome = "";
  protected energia = 0;
  protected vidaMaxima = 0;
  protected vidaAtual = 0;
  protected ataque = 0;
  protected defesa = 0;

  constructor(nome: string) {
    this._nome = nome;
    this.vidaAtual = Util.randomizar(10, 20);
    this.vidaMaxima = Util.randomizar(20, 100);
    this.ataque = Util.randomizar(10, 30);
    this.defesa = Util.randomizar(10, 20);
    this.energia = Util.randomizar(10, 100);
  }

  public treinarAtaque() {
    this.ataque += this.randomizar(7);
    this.energia -= this.randomizar(10);
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
    return;
  }

  public treinarDefesa() {
    this.defesa += this.randomizar(7);
    this.energia -= this.randomizar(10);
  }

  public descansar(tempo: number) {
    this.energia += tempo * this.randomizar(10);
    if (this.energia > 100) {
      this.energia = 100;
    }
  }

  public batalhar() {
    const desgaste = this.randomizar(100);

    return (this.energia -= desgaste);
  }

  public status() {
    return `
    Guerreiro:
    Nome: ${this.nome}
    Energia: ${this.energia}
    Ataque: ${this.ataque}
    Defesa: ${this.defesa}
    `;
  }

  public isDead() {
    return this.energia < 0;
  }

  private randomizar(fator: number) {
    return Math.floor(Math.random() * fator);
  }
}

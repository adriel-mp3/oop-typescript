export class Personagem {
  constructor(
    private _nome: string,
    private energia: number = 0,
    private vida: number = 0,
    private ataque: number = 0,
    private defesa: number = 0
  ) {}

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
    this.energia +=  tempo * this.randomizar(10);
    if (this.energia > 100) {
      this.energia = 100;
    }
  }

  public batalhar() {
    const desgaste = this.randomizar(100);

    return this.energia -= desgaste;
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
    return this.energia < 0 ;
  }

  private randomizar(fator: number) {
    return Math.random() * fator;
  }
}


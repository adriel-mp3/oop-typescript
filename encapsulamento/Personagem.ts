
// criar método helper randomizar que receber um fator: number
// abstrair com o método helper o código repetido
// criar o método de get e seguir a convenção para atributos privados

export class Personagem {
  constructor(
    private nome: string,
    private energia: number = 0,
    private vida: number = 0,
    private ataque: number = 0,
    private defesa: number = 0
  ) {}

  public treinarAtaque() {
    this.ataque += this.randomizar(7);
    this.energia -= this.randomizar(10);
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


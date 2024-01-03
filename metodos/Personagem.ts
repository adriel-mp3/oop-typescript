export class Personagem {
  constructor(
    public nome: string,
    public energia: number = 0,
    public vida: number = 0,
    public ataque: number = 0,
    public defesa: number = 0
  ) {}

  treinarAtaque() {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;
  }

  treinarDefesa() {
    this.defesa += Math.random() * 7;
    this.energia -= Math.random() * 10;
  }

  descansar(tempo: number) {
    this.energia +=  tempo * (Math.random() * 10);
    if (this.energia > 100) {
      this.energia = 100;
    }
  }

  batalhar() {
    const desgaste = Math.random() * 100;

    return this.energia -= desgaste;
  }

  status() {
    return `
    Guerreiro:
    Nome: ${this.nome}
    Energia: ${this.energia}
    Ataque: ${this.ataque}
    Defesa: ${this.defesa}
    `;
  }

  isDead() {
    return this.energia < 0 
  }
}


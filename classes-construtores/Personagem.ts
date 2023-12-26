import prompt from 'prompt-sync';

class Personagem {
  constructor(
    public nome: string,
    public energia: number = 0,
    public vida: number = 0,
    public ataque: number = 0,
    public defesa: number = 0
  ) {
  }
}
const sansa = new Personagem('Sansa');

const teclado = prompt();

let option: number = 0;

while (option != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = Number(teclado("Escolha uma ação"));

    switch (option) {
        case 1:
            sansa.ataque += 2;
            break;
        case 3:
            console.log("sansa :>> ", sansa);
            break;
        default:
            break;
    }
}


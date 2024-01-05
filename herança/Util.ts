export class Util {
  static randomizar(rangeInicial: number, rangeFinal: number) {
    return Math.floor(Math.random() * (rangeFinal - rangeInicial));
  }
}

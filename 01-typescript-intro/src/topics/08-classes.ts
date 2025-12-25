export class Persona {
  public name: string;
  public address: string;
  constructor() {
    this.name = "Sergio Modolell";
    this.address = "Metan";
  }
}

const ironman = new Persona()
console.log(ironman);
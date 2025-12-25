// export class Persona {
//   public name: string;
//   public address: string;

//   constructor(name:string ,address:string) {
//     this.name = name;
//     this.address = address;
//   }
// }
export class Persona {
  constructor(public name: string, public address: string = "No Address") {}
}

const ironman = new Persona("Iroman", "Salta");
console.log(ironman);

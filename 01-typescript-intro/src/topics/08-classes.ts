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
class Hero extends Persona{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string
    ){

        super(realName,'New York');
    } 
}
const ironman = new Hero("Iroman",45, "Tony");

console.log(ironman);

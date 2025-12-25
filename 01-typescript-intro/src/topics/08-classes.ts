import { Person } from './08-classes';
// export class Persona {
//   public name: string;
//   public address: string;

//   constructor(name:string ,address:string) {
//     this.name = name;
//     this.address = address;
//   }
// }
export class Person {
  constructor(public name: string, public address: string = "No Address") {}
}
class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person:Person
  ) {
    this.person = person;
  }
}

const tony= new Person("tony","New York");
const ironman = new Hero("Iroman", 45, "Tony",tony);

console.log(ironman);

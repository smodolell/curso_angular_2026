export function whatMyTyoe<T>(argument:T):T{

    return argument;
}
const amiString = whatMyTyoe<string>("Hola mundo");
const amiNumbre = whatMyTyoe<number>(1522.2155);
const amiArray = whatMyTyoe<number[]>([1,254,55456,45,45]);

console.log(amiString.split(" "));
console.log(amiNumbre.toFixed());
console.log(amiArray.sort());
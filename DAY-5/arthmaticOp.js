let a = 10;
let b = 30;

/*  create function for a calculate adddtion subtraction multipliaction division modulation  */

const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;
const mod = (a,b) => a % b;
let ans = {
Sum : sum(a,b),
Sub : sub(a,b),
Mul : mult(a,b),
Div : div(a,b),
Mod : mod(a,b)
};


console.log(ans);
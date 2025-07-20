let name = "vijay";
let age = 24;
let place = "chennai";

let textMessage =
  "My name is " +
  name +
  "\n" +
  ", I am " +
  age +
  " years old and" +
  "\n" +
  "I live in " +
  place +
  ".";
console.log(textMessage);

let textMessage2 = `
My name is ${name},
I am ${age} years old and
I live in ${place}.
`;

console.log(textMessage2);

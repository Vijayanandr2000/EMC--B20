let a = [1, 2, 3, 4, 5]; // => 15 + 0 = 15
let b = [5, 6, 7, 8, 9]; // => 35 + 1000

// let mul = [];

// for (let i = 0; i < a.length; i++) {
//   let n = a[i];

//   let m = n * 2;

//   mul.push(m);
// }

// console.log(mul);

let mul = a.map((n, idx, arr) => {
  return n * 2;
});

a.forEach((n, idx, arr) => {
  console.log(n, idx, arr);
});

let even = a.filter((n, idx, arr) => {
  return n % 2 == 0;
});

let sum = a.reduce((acc, curr) => {
  return acc + curr;
}, 0);

Array.prototype.sum = function (deafultValue = 0) {
  return this.reduce((acc, curr) => {
    return acc + curr;
  }, deafultValue);
};

console.log(a.sum());
console.log(b.sum(1000));

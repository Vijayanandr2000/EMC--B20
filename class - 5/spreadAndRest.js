let a = [1, 2, 3];
let b = [4, 5, 6];
// b[0] = a[0]
// b[1] = a[1]
// b[2] = a[2]

let c = [...a, ...b];

console.log(c);

let num = [1, 2, 3, 4, 5, 6];

let [x, y, ...z] = num;
console.log(x, y, z);

// console.log(this);

// // function a() {
// //   console.log("1", this);

// //   return () => {
// //     console.log("2", this);
// //   };
// // }
// // a()();

// const a = () => {
//   console.log("1", this);

//   return () => {
//     console.log("2", this);
//   };
// };
// a()();

// // const b = () => {
// //   console.log(this);
// // };
// // b();

let vijay = {
  name: "Vijay",
  age: 24,
  place: "Chennai",
  favFood: "Biryani",
  getFavFood: () => {
    console.log(this.favFood);
  },
};

let anand = {
  name: "Anand",
  age: 24,
  place: "Chennai1",
  favFood: "Biryani1",
  getFavFood: function () {
    console.log(this.favFood);
  },
};

let kishore = {
  name: "kishore",
  age: 24,
  place: "Chennai2",
  favFood: "Biryani2",
  getFavFood: function () {
    console.log(this.favFood);
  },
};

vijay.getFavFood();
// anand.getFavFood();
// kishore.getFavFood();

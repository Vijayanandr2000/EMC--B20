// function delay(delay = 5) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       console.log(2);
//       res("vijay");
//     }, 1000 * delay);
//   });
// }

// console.log(1);

// delay(2)
//   .then((data) => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log(3);
//     delay()
//     .then(()=>{

//     })
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
// //

function delay(delay = 5) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(2);
      res("vijay");
    }, 1000 * delay);
  });
}

async function trigger() {
  console.log(1);

  await delay(2);
  await delay(10);

  console.log(3);
}

trigger();

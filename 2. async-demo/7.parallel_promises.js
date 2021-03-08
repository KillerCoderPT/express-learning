/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Parallel Promises");
console.log("----------------------------------------");
/** ---------------------------------------- */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
    // reject(new Error("Because something failed"));
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 1500);
});

setTimeout(() => {
  console.log("----------------------------------------");
  console.log("\t Give us all the Promises when resolved");
  console.log("----------------------------------------");
  Promise.all([p1, p2])
    .then((result) => console.log(result))
    .catch((err) => console.log("Error", err.message));
}, 1000);

setTimeout(() => {
  console.log("----------------------------------------");
  console.log("\t Give us the first Promise when resolved");
  console.log("----------------------------------------");
  Promise.race([p1, p2])
    .then((result) => console.log(result))
    .catch((err) => console.log("Error", err.message));
}, 1500);

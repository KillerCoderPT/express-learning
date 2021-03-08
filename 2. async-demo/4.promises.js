/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Promises");
console.log("----------------------------------------");
/** ---------------------------------------- */

/**
 *      Promises
 */
const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  // resolve(1); // pending => resolved/fulfilled
  // reject(new Error('message')); // pending => rejected

  const testing = false;

  setTimeout(() => {
    if (testing) {
      resolve({
        user: {
          username: "KillerCoder",
          email: "email@email",
        },
      });
    } else {
      reject(new Error("message"));
    }
  }, 2000);
});

p.then((result) => console.log("Result: ", result)).catch((err) =>
  console.log("Error: ", err.message)
);

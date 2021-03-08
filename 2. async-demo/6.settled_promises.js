/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Creating Settled Promises");
console.log("----------------------------------------");
/** ---------------------------------------- */
setTimeout(() => {
  console.log("\t Promise already resolved");
  console.log("----------------------------------------");
  // Promise already resolved
  const p = Promise.resolve({ id: 1 });
  p.then((result) => console.log(result));
}, 500);

setTimeout(() => {
  console.log("----------------------------------------");
  console.log("\t Promise already rejected");
  console.log("----------------------------------------");
  // Promise already rejected
  const r = Promise.reject(new Error("Reason for rejection"));
  r.catch((err) => console.log(err));
}, 1000);

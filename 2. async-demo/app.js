// Single thread
// Asynchronous or Non Blocking Function
console.log("This first line is executed");
setTimeout(() => {
  console.log("----------------------------------------");
  console.log("Schedules a task to run in a future");
  console.log("----------------------------------------");
}, 500);
console.log("And then run this.");

setTimeout(() => {
  console.log("----------------------------------------");
  console.log("\t\t Order to see");
  console.log("1. Async Patterns");
  console.log("2. Callbacks");
  console.log("3. Callback Hell");
  console.log("4. Promises");
  console.log("5. Replacing Callbacks With Promises and Consuming");
  console.log("6. Creating Settled Promises");
  console.log("7. Parallel Promises");
  console.log("8. Async / Await");
  console.log("9. Exercise");
  console.log("----------------------------------------");
}, 1000)
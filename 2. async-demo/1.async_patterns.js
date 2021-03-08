/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Async Patterns");
console.log("----------------------------------------");
/** ---------------------------------------- */

/**
 *      Async Patterns
 *
 * - We have 3 patterns:
 *      1. Callbacks
 *      2. Promises
 *      3. Async/awai
 */
const user = getUser(1);
console.log(user); // This will print undefined

function getUser(id) {
  setTimeout(() => {
    console.log("----------------------------------------");
    console.log("Reading a user from a database...");
    console.log("----------------------------------------");
    return { id, gitHubUsername: "KillerCoderPT" };
  }, 2000);
}
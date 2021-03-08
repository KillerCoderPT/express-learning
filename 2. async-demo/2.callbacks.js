/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Callbacks");
console.log("----------------------------------------");
/** ---------------------------------------- */

/**
 *      Callbacks
 */
getUser(1, (user) => {
  console.log("User: ", user); // This will print the user
  getRepositories(user.gitHubUsername, (repos) => {
    console.log(repos);
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("----------------------------------------");
    console.log("Reading a user from a database...");
    console.log("----------------------------------------");
    callback({ id, gitHubUsername: "KillerCoderPT" });
  }, 3000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("----------------------------------------");
    console.log("Getting repositories from github...");
    console.log("----------------------------------------");
    callback({ gitHubUsername: username, repos: ["repo1", "repo2", "repo3"] });
  }, 2000);
}

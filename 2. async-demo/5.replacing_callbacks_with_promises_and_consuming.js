/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Replacing Callbacks With Promises and Consuming");
console.log("----------------------------------------");
/** ---------------------------------------- */

/**
 *      Replacing Callbacks With Promises
 */

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick Of some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "KillerCoderPT" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}

/**
 *      Consuming
 */
getUser(1)
  // First Promise (then) belongs to the user
  .then((user) => getRepositories(user.gitHubUsername))
  // Second Promise (then) belongs to the getRepositories
  .then((repos) => getCommits(repos[0]))
  // Third Promise (then) belongs to the getCommits
  .then((commits) => console.log(commits))
  .catch((err) => console.log('Error', err.message));

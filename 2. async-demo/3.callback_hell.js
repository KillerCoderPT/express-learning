/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Callback Hell");
console.log("----------------------------------------");
/** ---------------------------------------- */

/**
 *      Callback Hell
 */
// Example of an callback hell
// Asynchronous Version of this code
// getUser3(1, (user) => {
//   console.log("User: ", user); // This will print the user
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos, (commits) => {
//       // CALLBACK HELL
//     })
//   });
// });

/**     Synchronous Version of this code
 *
 *  console.log('Before');
 *  const user = getUser(1);
 *  const repos = getRepositories(user.gitHubUsername);
 *  const commits = getCommits(repos[0]);
 *  console.log('After');
 */

//      Solution for the Callback Hell problem
getUser(1, displayUser);

function displayUser(user) {
  getRepositories(user.gitHubUsername, dispalyRepositories);
}

function dispalyRepositories(repos) {
  getCommits(repos, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

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

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log("----------------------------------------");
    console.log("Getting commits from github...");
    console.log("----------------------------------------");
    callback({ repos: repos, commits: ['commit1', 'commit2', 'commit3'] });
  }, 2000);
}
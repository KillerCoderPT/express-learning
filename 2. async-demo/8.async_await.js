/** ---------------------------------------- */
console.log("----------------------------------------");
console.log("\t Async / Await");
console.log("----------------------------------------");
/** ---------------------------------------- */

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

// // Promise-based approach
// getUser(1)
//   // First Promise (then) belongs to the user
//   .then((user) => getRepositories(user.gitHubUsername))
//   // Second Promise (then) belongs to the getRepositories
//   .then((repos) => getCommits(repos[0]))
//   // Third Promise (then) belongs to the getCommits
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log("Error", err.message));

// Async and Await approach
async function displayCommits() {
    // Try catch block is needed to get the errors
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}

displayCommits();

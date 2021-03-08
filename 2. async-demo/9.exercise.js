function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "KillerCoder",
        isGold: true,
        email: "email",
      });
    }, 1000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 1000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function display() {
  try {
    const customer = await getCustomer(1);
    console.log("Customer: ", customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log("Top movies: ", movies);
      await sendEmail(customer.email, movies);
      console.log("Email sent...");
    }
  } catch (err) {
    console.log("Error", err.message);
  }
}

display();

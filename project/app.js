const express = require("express");
const app = express();

app.use(express.json());

// Routes
const homepage = require("./routes/home");
const genres = require("./routes/genres");

app.use("/", homepage);
app.use("/api/genres", genres);

// npm run start:dev --port 3001
const PORT = process.env.PORT || process.argv.slice(2,3)[0] || 3000;
app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}/`)
);

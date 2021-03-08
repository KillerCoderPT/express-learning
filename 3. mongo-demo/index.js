const mongoose = require("mongoose");

// Debugs
const debug = require("debug");
const debugDB = debug("app:db");
const debugErr = debug("app:error");

// Connect to DB
mongoose
  .connect(
    "mongodb+srv://killercoder:kc1234@vidly.bbdc0.mongodb.net/playground",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => debugDB("Connected to mongodb..."))
  .catch((err) => debugErr("Could not connect to mongodb...", err.message));

// Schemas
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// Models
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "KillerCoder",
    tags: ["angular", "backend"],
    isPublished: true,
  });

  const result = await course.save(); // Async operation
  console.log(result);
}

// createCourse();

async function getCourses() {
  // Get all courses;
  const courses = await Course.find();
  console.log(courses);
}

getCourses();

//      Comparison Query Operators
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// let (less than or equal to)
// in
// nin (not in)

//      Logical Query Operators
// or
// and

async function findCourse(author) {
  const courses = await Course
    // .find({ author, isPublished: true })
    //          Comparison
    // .find({ price: { $gte: 10, $lte: 20 } }) // Get courses with prices between 10 and 20
    // .find({ price: { $in: [10, 15, 20] } }) // Get courses with prices 10, 15 and 20
    //          Logical
    // .find()
    // .or([ { author: 'KillerCoder' }, { isPublished: true } ])
    // .and([{ author: 'KillerCoder', isPublished: true }])
    .limit(10)
    .sort({ name: -1 }) // 1=ASC -1=DESC
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

findCourse("KillerCoder");

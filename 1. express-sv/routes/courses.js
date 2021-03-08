const joi = require("joi");
const debug = require("debug")("app:debug");
const express = require("express");
const router = express.Router();

debug("Connected to the database...");
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

function validateCourse(course) {
  const schema = joi.object({
    name: joi.string().min(3).required(),
  });

  return schema.validate(course);
}

router.get("/", (req, res) => {
  res.send(courses);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const course = courses.find((c) => c.id === parseInt(id));
  if (!course) return res.status(404).send("Course not found.");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return res.status(404).send("Course not found.");

  res.send(course);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const course = courses.find((c) => c.id === parseInt(id));
  if (!course) return res.status(404).send("Course not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

module.exports = {
  courses: router,
  debug
} 

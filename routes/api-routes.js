const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/example", (req, res) => {
  res.send("message from back end: success");
});

router.get("/find/:id", (req, res) => {
  db.Todo.findById(req.params.id).then((todo) => res.send(todo));
});

router.get("/all", (req, res) => {
  db.Todo.find().then((todos) => res.send(todos));
});

router.post("/new", (req, res) => {
  db.Todo.create({ text: req.body.text }).then((todo) => res.send(todo));
});

router.delete("/remove/:id", (req, res) => {
  db.Todo.findByIdAndRemove(req.params.id).then(() => res.send("success"));
});

router.patch("/edit", (req, res) => {
  db.Todo.findByIdAndUpdate(req.body.id, {
    text: req.body.text,
  }).then((result) => res.send(result));
});

module.exports = router;

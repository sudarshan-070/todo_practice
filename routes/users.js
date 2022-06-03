var express = require("express");
var router = express.Router();
var TodoApp = require("../models/todo");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  let todos = await TodoApp.find({})
  res.json({todos})
});

router.post("/", async (req, res, next) => {
  try {
    let todo = await TodoApp.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async(req, res, next) => {
  var todo = await TodoApp.findById(req.params.id)
  res.json({todo})
})

router.delete('/:id', async(req, res, next) => {
  var todo = await TodoApp.findByIdAndDelete(req.params.id)
  res.json({success: "Succesfly Deleted"})
})

module.exports = router;

const Todo = require("../models/todo")

exports.getTodos = async (req, res) => {
    const todos = await Todo.find({})

    res.send(todos)
}

exports.getTodo = (req, res) => {}

exports.createTodo = (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save()
}

exports.updateTodo = (req, res) => {}

exports.deleteTodo = (req, res) => {}
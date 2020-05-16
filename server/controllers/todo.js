const Todo = require("../models/todo")

exports.getTodos = async (req, res) => {
    const todos = await Todo.find({})

    res.send(todos)
}

exports.getTodo = (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) throw err
        else res.send(todo)
    })
}

exports.createTodo = (req, res) => {
    const todo = new Todo({
        owner: req.user.userId,
        text: req.body.text
    })

    todo.save()
}

exports.completeTodo = (req, res) => {
    Todo.findById(req.body.id, (err, todo) => {
        todo.completed = !!req.body.completed
        console.log(todo)
        res.status(201).json({message: "Сделано"})
    })
}

exports.updateTodo = async (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        {text: req.body.text},
        {useFindAndModify: true},
        (err, todo) => {
            if (err) throw err
            else res.json({message: "todo is updated"})
        }
    )
}

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id, err => {
        if (err) throw err
        else res.json({message: "todo is deleted"})
    })
}
const Todo = require('../models/todo')

exports.getTodos = async (req, res) => {
    try {
        Todo.find({owner: req.user.userId}, (e, todos) => {
            if (e) res.json({resultCode: 1, message: `Error: ${e}`})
            else res.json({resultCode: 0, todos, message: 'Todos is received'})
        })
    } catch (e) {
        res.json({resultCode: 1, message: `Error: ${e}`})
    }
}

exports.getTodo = (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) throw err
        else res.send(todo)
    })
}

exports.createTodo = async (req, res) => {
    try {
        const todo = await new Todo({
            owner: req.user.userId,
            text: req.body.text
        })
        todo.save()
        res.json({resultCode: 0, id: todo.id, message: 'Todo is created'})
    } catch (e) {
        res.json({resultCode: 1, message: `Error: ${e}`})
    }
}

exports.completeTodo = (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        {isCompleted: req.body.isCompleted},
        {useFindAndModify: true},
        (e, todo) => {
            if (e) res.json({resultCode: 1, message: `Error: ${e}`})
            else res.json({resultCode: 0, message: 'todo is completed'})
        }
    )
}

exports.updateTodo = async (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        {text: req.body.text},
        {useFindAndModify: true},
        (e, todo) => {
            if (e) res.json({resultCode: 1, message: `Error: ${e}`})
            else res.json({resultCode: 0, message: 'todo is updated'})
        }
    )
}

exports.deleteTodo = (req, res) => {
    try {
        Todo.findByIdAndDelete(req.params.id, e => {
            if (e) res.json({resultCode: 1, message: `Error: ${e}`})
            else res.json({resultCode: 0, message: 'todo is deleted'})
        })
    } catch (e) {
        res.json({resultCode: 1, message: `Error: ${e}`})
    }
}
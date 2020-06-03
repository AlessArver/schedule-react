const Todo = require('../models/todo')

exports.getTodos = async (req, res) => {
  try {
    Todo.find({ owner: req.user.userId }, (e, todos) => {
      e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
        : res.json({ resultCode: 0, todos, message: 'Тодошки получены' })
    })
  } catch (e) {
    res.json({ resultCode: 1, message: `Error: ${e}` })
  }
}

exports.getTodo = (req, res) => {
  Todo.findById(req.params.id, (e, todo) => {
    e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
      : res.json({ resultCode: 0, todo, message: 'Тодо получено' })
  })
}

exports.createTodo = async (req, res) => {
  try {
    const todo = await new Todo({
      owner: req.user.userId,
      text: req.body.text
    })
    todo.save()
    res.json({ resultCode: 0, id: todo.id, message: 'Тодо создано' })
  } catch (e) {
    res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
  }
}

exports.completeTodo = (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    { isCompleted: req.body.isCompleted },
    { useFindAndModify: true },
    (e, todo) => {
      e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
        : res.json({ resultCode: 0, message: 'Тодо завершено' })
    }
  )
}

exports.updateTodo = async (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { useFindAndModify: true },
    (e, todo) => {
      e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
        : res.json({ resultCode: 0, message: 'Тодо обновлено' })
    }
  )
}

exports.deleteTodo = (req, res) => {
  try {
    Todo.findByIdAndDelete(req.params.id, e => {
      e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
        : res.json({ resultCode: 0, message: 'Тодо удалено' })
    })
  } catch (e) {
    res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
  }
}
import { Request, Response } from 'express'
import Todo from '../models/Todo'

export const getTodos = async (req: any, res: Response) => {
  try {
    Todo.find({owner: req.user.userId}, (e: any, todos: any) => {
      e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
        : res.json({resultCode: 0, todos, message: 'Тодошки получены'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: `Error: ${e}`})
  }
}

export const getTodo = (req: any, res: Response) => {
  Todo.findById(req.params.id, (e: any, todo: any) => {
    e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
      : res.json({resultCode: 0, todo, message: 'Тодо получено'})
  })
}

export const createTodo = async (req: any, res: Response) => {
  try {
    const todo = await new Todo({
      owner: req.user.userId,
      text: req.body.text
    })
    todo.save()
    res.json({resultCode: 0, id: todo.id, message: 'Тодо создано'})
  } catch (e) {
    res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
  }
}

export const completeTodo = (req: any, res: Response) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {isCompleted: req.body.isCompleted},
    // {useFindAndModify: true},
    (e: any) => {
      e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
        : res.json({resultCode: 0, message: 'Тодо завершено'})
    }
  )
}

export const updateTodo = async (req: any, res: Response) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {text: req.body.text},
    // {useFindAndModify: true},
    (e: any) => {
      e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
        : res.json({resultCode: 0, message: 'Тодо обновлено'})
    }
  )
}

export const deleteTodo = (req: any, res: Response) => {
  try {
    Todo.findByIdAndDelete(req.params.id, (e: any) => {
      e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
        : res.json({resultCode: 0, message: 'Тодо удалено'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
  }
}
import express from 'express'
import socket from 'socket.io'
import { TodoController } from '../controllers'
import { auth } from '../middleware/auth'

const router = express.Router()

export default (app: express.Express, io: socket.Server) => {
  const controller = new TodoController(io)

  app.get('/api/todos', auth, controller.getTodos)

  app.get('/api/todos/:id', auth, controller.getTodo)

  app.post('/api/todos/create', auth, controller.createTodo)

  app.put('/api/todos/isCompleted/:id', auth, controller.completeTodo)

  app.put('/api/todos/update-text/:id', auth, controller.updateTodo)

  app.delete('/api/todos/delete/:id', auth, controller.deleteTodo)
}
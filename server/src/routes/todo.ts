import express from 'express'
import * as controller from '../controllers/todo'

const router = express.Router()

router.get('/', controller.getTodos)

router.get('/:id', controller.getTodo)

router.post('/create', controller.createTodo)

router.put('/isCompleted/:id', controller.completeTodo)

router.put('/update-text/:id', controller.updateTodo)

router.delete('/delete/:id', controller.deleteTodo)

export default router
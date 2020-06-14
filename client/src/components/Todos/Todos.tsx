import React, { FC, useEffect } from 'react'
import s from './Todos.module.css'
import Todo from './Todo/Todo'
import * as t from '../../types/todo'
import TodoCreateReduxForm from './TodoCreateForm/TodoCreateForm'
import Paginator from '../common/Paginator/Paginator'
import socket from '../../socket'
import { TodoType } from '../../types'

const Todos: FC<t.TodosProps> = props => {
  const onSubmit = (data: t.form) => {
    props.addTodo(data.text)
  }

  useEffect(() => {
    socket.on('add_todo', (data: TodoType) => {
      props.addTodoSuccess(data._id, data.text, data.createdAt)
      return () => socket.off('add_todo')
    })
  }, [props.todos])

  let todos = props.todos.map(todo => <Todo
    todo={todo}
    key={todo._id}
    itemsIsLoading={props.itemsIsLoading}
    deleteTodo={props.deleteTodo}
    updateTodoText={props.updateTodoText}
    updateTodoTextSuccess={props.updateTodoTextSuccess}/>)

  return (
    <>
      <Paginator onPageChanged={props.onPageChanged}/>
      {!todos.length && <h2>No todos</h2>}
      {todos}
      <TodoCreateReduxForm onSubmit={onSubmit}/>
    </>
  )
}
export default React.memo(Todos)
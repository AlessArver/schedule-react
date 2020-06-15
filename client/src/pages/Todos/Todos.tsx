import React, { FC, useEffect } from 'react'

import './Todos.sass'
import Todo from './Todo/Todo'
import * as t from '../../types/todo'
import TodoCreateReduxForm from './TodoCreateForm/TodoCreateForm'
import Paginator from '../../components/Paginator/Paginator'
import socket from '../../socket'
import { TodoType } from '../../types'
import { useTranslation } from 'react-i18next'

const Todos: FC<t.TodosProps> = props => {
  const {t, i18n} = useTranslation()

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
    <div className='todos-wrapper'>
      <Paginator onPageChanged={props.onPageChanged}/>
      {!todos.length && <h2>{t('todo.no_todos')}</h2>}
        {todos}
      <TodoCreateReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
export default React.memo(Todos)
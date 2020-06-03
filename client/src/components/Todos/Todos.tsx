import React, { FC } from 'react'
import s from './Todos.module.css'
import Todo from './Todo/Todo'
import * as t from '../../types/todo'
import TodoCreateReduxForm from './TodoCreateForm/TodoCreateForm'

const Todos: FC<t.storeProps> = props => {
  const onSubmit = (data: t.formType) => props.addTodo(data.text)

  let todos = props.todos.map(todo => <Todo
    todo={todo}
    key={todo._id}
    todosIsLoading={props.todosIsLoading}
    deleteTodo={props.deleteTodo}
    updateTodoText={props.updateTodoText}
  />)

  return (
    <>
      <div className={s.todos}>{todos}</div>
      <TodoCreateReduxForm onSubmit={onSubmit}/>
    </>
  )
}
export default Todos
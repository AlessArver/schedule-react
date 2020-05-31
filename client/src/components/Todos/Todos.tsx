import React, { FC } from 'react'
import s from './Todos.module.css'
import Todo from './Todo/Todo'
import { TodoFormType, TodoMapDispatchToProps, TodoMapStateToProps } from '../../types/todo'
import TodoCreateReduxForm from './TodoCreateForm/TodoCreateForm'

const Todos: FC<TodoMapStateToProps & TodoMapDispatchToProps> = props => {
  const onSubmit = (data: TodoFormType) => props.addTodo(data.text)

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
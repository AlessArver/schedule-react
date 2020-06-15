import React, { ComponentType, FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withAuthRedirect } from '../hoc/withAuthRouter'
import { Todos } from '../pages'
import { getTodos } from '../selectors/todo'
import { RootState } from '../flux'
import * as t from '../types/todo'
import { addTodo, deleteTodo, requestTodos, updateTodoText } from '../flux/reducers/todo'
import Preloader from '../components/Preloader/Preloder'
import { getIsLoading, getItemsIsLoading } from '../selectors/loading'
import todoActions from '../flux/actions/todo'

const TodoAPIContainer: FC<t.storeProps> = ({requestTodos, ...props}) => {
  useEffect(() => {
    requestTodos(new Date().toJSON())
  }, [])

  const onPageChanged = (currentPage: Date) => {
    requestTodos(currentPage.toJSON())
  }

  return props.isLoading
    ? <Preloader/>
    : <Todos
      todos={props.todos}
      itemsIsLoading={props.itemsIsLoading}
      addTodo={props.addTodo}
      deleteTodo={props.deleteTodo}
      updateTodoText={props.updateTodoText}
      onPageChanged={onPageChanged}
      addTodoSuccess={props.addTodoSuccess}
      updateTodoTextSuccess={props.updateTodoTextSuccess}/>
}

const mapStateToProps = (state: RootState) => ({
  todos: getTodos(state),
  isLoading: getIsLoading(state),
  itemsIsLoading: getItemsIsLoading(state)
})

export default compose<ComponentType>(
  connect(mapStateToProps, {
    requestTodos, addTodo, deleteTodo, updateTodoText,
    addTodoSuccess: todoActions.addTodoSuccess,
    updateTodoTextSuccess: todoActions.updateTodoTextSuccess
  }), withAuthRedirect)(TodoAPIContainer)
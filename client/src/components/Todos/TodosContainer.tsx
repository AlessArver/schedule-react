import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRouter'
import { addTodo, deleteTodo, requestTodos, updateTodoText } from '../../flux/thunks/todo'
import Todos from './Todos'
import { getTodos, getTodosIsLoading } from '../../selectors/todo'
import { RootState } from '../../flux'
import { TodoOwnProps, TodoMapDispatchToProps, TodoMapStateToProps, TodoProps } from '../../types/containerComponent'

class TodoAPIContainer extends React.Component<TodoProps> {
  componentDidMount() {
    this.props.requestTodos()
  }

  render() {
    return <Todos
      todos={this.props.todos}
      todosIsLoading={this.props.todosIsLoading}
      addTodo={this.props.addTodo}
      deleteTodo={this.props.deleteTodo}
      updateTodoText={this.props.updateTodoText}/>
  }
}

const mapStateToProps = (state: RootState): TodoMapStateToProps => ({
  todos: getTodos(state),
  todosIsLoading: getTodosIsLoading(state)
})

// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
// <TodoMapStateToProps, TodoMapDispatchToProps, TodoOwnProps, RootState>
export default compose(
  connect(mapStateToProps, {
    requestTodos,
    addTodo,
    deleteTodo,
    updateTodoText
  }),
  withAuthRedirect
)(TodoAPIContainer)
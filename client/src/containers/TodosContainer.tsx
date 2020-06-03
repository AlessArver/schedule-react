import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRouter'
import Todos from '../components/Todos/Todos'
import { getTodos, getTodosIsLoading } from '../selectors/todo'
import { RootState } from '../flux'
import * as t from '../types/todo'
import { addTodo, deleteTodo, requestTodos, updateTodoText } from '../flux/reducers/todo'

class TodoAPIContainer extends React.Component<t.storeProps> {
  componentDidMount() {
    // @ts-ignore
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

const mapStateToProps = (state: RootState) => ({
  todos: getTodos(state),
  todosIsLoading: getTodosIsLoading(state)
})

export default compose<ComponentType>(
  connect<t.mapStateToProps, t.mapDispatchToProps, {}, RootState>(mapStateToProps, {
    requestTodos, addTodo, deleteTodo, updateTodoText
  }), withAuthRedirect)(TodoAPIContainer)
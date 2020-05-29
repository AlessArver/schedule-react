import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRouter'
import {
    addTodo,
    setTodoText,
    completedInProgress,
    toggleIsCompletedSuccess, requestTodos, deleteTodo, updateTodoText
} from '../../redux/todoReducer'
import Todos from './Todos'
import {getCompletedInProgress, getTodos} from '../../redux/todoSelector'

class TodoAPIContainer extends React.Component {
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

const mapStateToProps = state => ({
    todos: getTodos(state),
    completedInProgress: getCompletedInProgress(state),
    todosIsLoading: state.todosPage.todosIsLoading
})

export default compose(
    connect(mapStateToProps, {
        requestTodos,
        addTodo,
        deleteTodo,
        toggleIsCompletedSuccess,
        updateTodoText
    }),
    withAuthRedirect
)(TodoAPIContainer)
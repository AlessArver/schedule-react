import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRouter'
import {addTodo, requestTodos, deleteTodo, updateTodoText} from '../../flux/thunks/todo'
import Todos from './Todos'
import {getCompletedInProgress, getTodos, getTodosIsLoading} from '../../selectors/todo'
import {toggleIsCompletedSuccess} from '../../flux/actions/todo'

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
    todosIsLoading: getTodosIsLoading(state)
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
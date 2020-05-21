import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {addTodoAC, completeTodoAC, updateNewTodoAC} from "../../redux/todoReducer";
import Todos from "./Todos";
import {withAuthRedirect} from "../../hoc/withAuthRouter";

const mapStateToProps = state => ({
    todos: state.todosPage.todos,
    newTodoText: state.todosPage.newTodoText
})
const mapDispatchToProps = dispatch => ({
    updateTodoText: text => dispatch(updateNewTodoAC(text)),
    addTodo: () => dispatch(addTodoAC()),
    completeTodo: id => dispatch(completeTodoAC(id))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Todos)
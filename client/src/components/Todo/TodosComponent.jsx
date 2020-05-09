import React from "react";
import {connect} from "react-redux";
import {addTodoAC, completeTodoAC, updateNewTodoAC} from "../../redux/todoReducer";
import Todos from "./Todos";

const mapStateToProps = state => ({
    todos: state.todosPage.todos,
    newTodoText: state.todosPage.newTodoText
})
const mapDispatchToProps = dispatch => ({
    updateTodoText: text => dispatch(updateNewTodoAC(text)),
    addTodo: () => dispatch(addTodoAC()),
    completeTodo: id => dispatch(completeTodoAC(id))
})

const TodosComponent = connect(mapStateToProps, mapDispatchToProps)(Todos)
export default TodosComponent
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRouter";
import {addTodo, completeTodo, updateNewTodo} from "../../redux/todoReducer";
import Todos from "./Todos";

const mapStateToProps = state => ({todos: state.todosPage.todos})

export default compose(
    connect(mapStateToProps, {
        addTodo,
        updateNewTodo,
        completeTodo
    }),
    withAuthRedirect
)(Todos)
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRouter";
import {
    addTodo,
    updateText,
    completedInProgress,
    toggleIsCompletedSuccess,
} from "../../redux/todoReducer";
import Todos from "./Todos";
import {getCompletedInProgress, getTodos} from "../../redux/todoSelector";

const mapStateToProps = state => ({
    todos: getTodos(state),
    completedInProgress: getCompletedInProgress(state)
})

export default compose(
    connect(mapStateToProps, {
        addTodo,
        updateText,
        toggleIsCompletedSuccess,
        completedInProgress
    }),
    withAuthRedirect
)(Todos)
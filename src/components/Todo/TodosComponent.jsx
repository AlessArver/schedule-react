import React from "react";
import {addTodoAC, comnpleteTodoAC, updateNewTodoAC} from "../../redux/todoReducer";
import Todos from "./Todos";

export const TodosComponent = props => {
    const state = props.store.getState().todosPage

    let addTodo = () => props.store.dispatch(addTodoAC())
    let updateTodoText = text => props.store.dispatch(updateNewTodoAC(text))
    let completeTodo = complete => props.store.dispatch(comnpleteTodoAC(complete))

    return (<Todos
        updateTodoText={updateTodoText}
        addTodo={addTodo}
        completeTodo={completeTodo}
        todos={state.todos}
        newTodoText={state.newTodoText}
    />)
}
import React from "react";
import * as s from "./Todos.module.css"
import Todo from "./Todo/Todo";
import {addTodoAC, updateNewTodoAC} from "../../../redux/todoReducer";

const Todos = props => {
    let newTodoText = React.createRef()

    let addTodo = e => {
        if (e.key === "Enter") props.dispatch(addTodoAC())
    }

    let onTodoTextChange = () => props.dispatch(updateNewTodoAC(newTodoText.current.value))

    return (
        <>
            <div className={s.todos}>
                {props.todosPage.todos.map(t => <Todo text={t.text} isComplete={t.isComplete} key={t.id} dispatch={props.dispatch}/>)}
            </div>
            <textarea ref={newTodoText} onChange={onTodoTextChange} onKeyPress={addTodo}
                      value={props.todosPage.newTodoText} placeholder="What you'll to do?"/>
        </>
    )
}

export default Todos
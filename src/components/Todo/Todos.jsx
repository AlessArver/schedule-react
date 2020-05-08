import React from "react";
import * as s from "./Todos.module.css"
import Todo from "./Todo/Todo";

const Todos = props => {
    let newTodoText = React.createRef()

    let addTodo = e => {
        if (e.key === "Enter") props.addTodo()
    }
    let onTodoTextChange = () => props.updateTodoText(newTodoText.current.value)

    let todos = props.todos.map(t => <Todo
        text={t.text}
        isComplete={t.isComplete}
        key={t.id}
        completeTodo={props.completeTodo}
    />)

    return (
        <>
            <div className={s.todos}>{todos}</div>
            <textarea
                ref={newTodoText}
                onChange={onTodoTextChange}
                onKeyPress={addTodo}
                value={props.newTodoText}
                placeholder="What you'll to do?"
            />
        </>
    )
}

export default Todos
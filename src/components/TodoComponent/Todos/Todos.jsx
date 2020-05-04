import React from "react";
import * as s from "./Todos.module.css"
import Todo from "./Todo/Todo";

const Todos = props => {
    let newTodo = React.createRef()

    let addTodo = e => {
        if (e.key === "Enter") props.addTodo(newTodo.current.value)
    }

    return (
        <>
            <div className={s.todos}>
                {props.todosPage.todos.map(t => <Todo text={t.text} isComplete={t.isComplete} key={t.id} />)}
            </div>
            <textarea ref={newTodo} onKeyPress={addTodo} placeholder="What you'll to do?" />
        </>
    )
}

export default Todos
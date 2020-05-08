import React from "react"
import * as s from "./Todo.module.css"

const Todo = props => {
    let complete = false
    let buttonText

    if (complete) buttonText = "True"
    else buttonText = "False"

    let onComplete = () => {
        complete = !complete
        props.completeTodo(complete)
    }

    return (
        <div className={s.card}>
            <p>{props.text}</p>
            <button onClick={onComplete}>{buttonText}</button>
        </div>
    )
}

export default Todo
import React from "react"
import * as s from "./Todo.module.css"

const Todo = props => {
    let y
    if (props.isComplete === true) y = "True"
    else y = "False"

    return (
        <div className={s.card}>
            <p>{props.text}</p>
            <button onClick={() => alert("Complete")}>{y}</button>
        </div>
    )
}

export default Todo
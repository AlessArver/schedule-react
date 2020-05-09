import React from "react"
import * as s from "./Todo.module.css"

const Todo = props => {
   let onComplete = () => props.onComplete(props.id)

    return (
        <div className={s.card}>
            <p>{props.text}</p>
            <button onClick={onComplete}>
                {props.complete ? "False" : "True"}
            </button>
        </div>
    )
}

export default Todo
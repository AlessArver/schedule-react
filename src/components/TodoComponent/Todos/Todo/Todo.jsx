import React from "react"
import * as s from "./Todo.module.css"
import {comnpleteTodoAC} from "../../../../redux";

const Todo = props => {
    let complete = false
    let buttonText

    if (complete) buttonText = "True"
    else buttonText = "False"

    let onComplete = () => {
        complete = !complete
        console.log(complete)
        props.dispatch(comnpleteTodoAC(complete))
    }

    return (
        <div className={s.card}>
            <p>{props.text}</p>
            <button onClick={onComplete}>{buttonText}</button>
        </div>
    )
}

export default Todo
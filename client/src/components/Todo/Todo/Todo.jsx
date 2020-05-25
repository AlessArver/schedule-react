import React, {useState} from "react"
import * as s from "./Todo.module.css"
import {completedIngInProgress, completedInProgress, toggleIsCompletedSuccess} from "../../../redux/todoReducer";

const Todo = props => {
    let [textEdit, setTextEit] = useState(false)
    let [text, setText] = useState(props.text)

    const textActivateEdit = () => setTextEit(true)

    const textDeactivateEdit = () => {
        setTextEit(false)
        props.updateText(text)
    }

    const onTextChange = e => setText(e.currentTarget.value)
    let a  = () => {
        alert(props.completed)
        props.toggleIsCompletedSuccess(props.id)
    }

    return (
        <div className={s.card}>
            {!textEdit
                ? <p onDoubleClick={textActivateEdit}>{text}</p>
                : <input
                    onChange={onTextChange}
                    autoFocus={true}
                    onBlur={textDeactivateEdit}
                    value={text}
                />
            }
            <button
                // disabled={props.completedInProgress.some(id => id === props.id)}
                onClick={a}
            >
                {props.completed ? "True" : "False"}
            </button>
        </div>
    )
}

export default Todo
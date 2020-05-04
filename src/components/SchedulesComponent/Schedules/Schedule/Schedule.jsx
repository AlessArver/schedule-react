import React from "react"
import * as s from "./Schedule.module.css"

const Schedule = props => {
    return (
        <div className={s.card}>
            <p>{props.text}</p>
            <small>{props.date}</small>
        </div>
    )
}
export default Schedule
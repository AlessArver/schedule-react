import React, {useState} from "react"
import * as s from "./Schedule.module.css"

const Schedule = props => {
    let [textEdit, textSetEdit] = useState(false)
    let [text, setText] = useState(props.text)

    let [dateEdit, dateSetEdit] = useState(false)
    let [date, setDate] = useState(props.date)

    const textDeactivateEdit = () => {
        textSetEdit(false)
        props.updateScheduleText(text)
    }
    const dateDeactivateEdit = () => {
        dateSetEdit(false)
        props.updateScheduleDate(s)
    }

    const textActivateEdit = () => textSetEdit(true)
    const dateActivateEdit = () => dateSetEdit(true)

    const onTextChange = e => setText(e.currentTarget.value)
    const onDateChange = e => setDate(e.currentTarget.value)

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
            {!dateEdit
                ? <small onDoubleClick={dateActivateEdit}>{date}</small>
                : <input
                    type="date"
                    onChange={onDateChange}
                    autoFocus={true}
                    onBlur={dateDeactivateEdit}
                    value={date}
                />
            }
        </div>
    )
}
export default Schedule
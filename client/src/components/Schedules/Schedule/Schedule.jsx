import React, {useState} from 'react'
import s from './Schedule.module.css'
import Preloader from '../../common/Preloader/Preloder'
import cn from 'classnames'

const Schedule = ({schedule, ...props}) => {
    let [textEdit, textSetEdit] = useState(false)
    let [text, setText] = useState(schedule.text)

    let [dateEdit, dateSetEdit] = useState(false)
    let [date, setDate] = useState(schedule.date)

    const textDeactivateEdit = () => {
        textSetEdit(false)
        props.updateScheduleText(schedule._id, text)
    }
    const dateDeactivateEdit = () => {
        dateSetEdit(false)
        props.updateScheduleDate(schedule._id, date)
    }

    const textActivateEdit = () => textSetEdit(true)
    const dateActivateEdit = () => dateSetEdit(true)

    const onTextChange = e => setText(e.currentTarget.value)
    const onDateChange = e => setDate(e.currentTarget.value)

    const onDelete = id => props.deleteSchedule(id)

    return props.schedulesIsLoading.some(id => id === schedule._id) && <Preloader/>
        || <div className='card'>
            <div className='cardHeader'>
                <button onClick={() => onDelete(schedule._id)}>
                    Delete
                </button>
            </div>
            <div className={cn(s.cardContent, 'cardContent')}>
                {!textEdit
                    ? <p onDoubleClick={textActivateEdit}>{schedule.text}</p>
                    : <input
                        onChange={onTextChange}
                        autoFocus={true}
                        onBlur={textDeactivateEdit}
                        value={text}
                    />
                }
                {!dateEdit
                    ? <small onDoubleClick={dateActivateEdit}>{schedule.date}</small>
                    : <input
                        type="date"
                        onChange={onDateChange}
                        autoFocus={true}
                        onBlur={dateDeactivateEdit}
                        value={date}
                    />
                }
            </div>
        </div>
}
export default Schedule
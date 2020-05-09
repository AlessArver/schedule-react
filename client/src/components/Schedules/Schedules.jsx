import React from "react";
import * as style from "./Schedules.module.css"
import Schedule from "./Schedule/Schedule";

const Schedules = props => {
    let newScheduleText = React.createRef()
    let newScheduleDate = React.createRef()

    let addSchedule = () => props.addSchedule()
    let onScheduleChange = () => {
        props.updateNewScheduleText(
            newScheduleText.current.value,
            newScheduleDate.current.value
        )
    }

    let schedules = props.schedules.map(s => <Schedule text={s.text} date={s.date} key={s.id}/>)

    return (
        <>
            <div className={style.schedules}>{schedules}</div>
            <textarea
                ref={newScheduleText}
                onChange={onScheduleChange}
                value={props.newScheduleText}
                placeholder="What you'll to do?"
            />
            <input
                ref={newScheduleDate}
                onChange={onScheduleChange}
                type="date"
                value={props.newScheduleDate}
            />
            <button onClick={addSchedule}>Add Schedule</button>
        </>
    )
}

export default Schedules
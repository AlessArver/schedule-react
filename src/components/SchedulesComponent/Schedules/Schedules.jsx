import React from "react";
import * as style from "./Schedules.module.css"
import Schedule from "./Schedule/Schedule";

const Schedules = props => {
    console.log(props)
    let newScheduleText = React.createRef()
    let newScheduleDate = React.createRef()

    let addSchedule = e => {
        let text = newScheduleText.current.value
        let date = newScheduleDate.current.value

        props.addSchedule(text, date)
    }

    return (
        <>
            <div className={style.schedules}>
                {props.schedulesPage.schedules.map(s => <Schedule text={s.text} date={s.date} key={s.id} />)}
            </div>
            <textarea ref={newScheduleText} placeholder="What you'll to do?" />
            <input ref={newScheduleDate} type="date" />
            <button onClick={addSchedule}>Add Schedule</button>
        </>
    )
}

export default Schedules
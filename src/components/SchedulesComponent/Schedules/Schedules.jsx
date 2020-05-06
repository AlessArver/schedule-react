import React from "react";
import * as style from "./Schedules.module.css"
import Schedule from "./Schedule/Schedule";
import {addScheduleAC, updateNewScheduleAC} from "../../../redux";

const Schedules = props => {
    let newScheduleText = React.createRef()
    let newScheduleDate = React.createRef()

    let addSchedule = () => props.dispatch(addScheduleAC())

    let onScheduleChange = () => {

        props.dispatch(updateNewScheduleAC(newScheduleText.current.value, newScheduleDate.current.value))
    }

    return (
        <>
            <div className={style.schedules}>
                {props.schedulesPage.schedules.map(s => <Schedule text={s.text} date={s.date} key={s.id}/>)}
            </div>
            <textarea ref={newScheduleText} onChange={onScheduleChange} value={props.schedulesPage.newScheduleText}
                      placeholder="What you'll to do?"/>
            <input ref={newScheduleDate} onChange={onScheduleChange} type="date"
                   value={props.schedulesPage.newScheduleDate}/>
            <button onClick={addSchedule}>Add Schedule</button>
        </>
    )
}

export default Schedules
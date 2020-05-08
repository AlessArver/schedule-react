import React from "react";
import {addScheduleAC, updateNewScheduleAC} from "../../redux/scheduleReducer";
import Schedules from "./Schedules";

export const SchedulesComponent = props => {
    const store = props.store.getState().schedulesPage

    let addSchedule = () => props.store.dispatch(addScheduleAC())
    let updateNewScheduleText = (text, date) => {
        props.store.dispatch(updateNewScheduleAC(text, date))
    }

    return (<Schedules
        updateNewScheduleText={updateNewScheduleText}
        addSchedule={addSchedule}
        schedules={store.schedules}
        newScheduleText={props.newScheduleText}
        newScheduleDate={store.newScheduleDate}
    />)
}
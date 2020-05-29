import React from 'react'
import style from './Schedules.module.css'
import Schedule from './Schedule/Schedule'
import {reduxForm} from 'redux-form'
import ScheduleForm from './ScheduleForm/ScheduleForm'

const ScheduleReduxForm = reduxForm({form: 'scheduleForm'})(ScheduleForm)

const Schedules = props => {
    const onSubmit = data => props.addSchedule(data.text, data.date)

    let schedules = props.schedules.map(schedule => <Schedule
        schedule={schedule}
        key={schedule._id}
        schedulesIsLoading={props.schedulesIsLoading}
        deleteSchedule={props.deleteSchedule}
        updateScheduleText={props.updateScheduleText}
        updateScheduleDate={props.updateScheduleDate}
    />)

    return (
        <>
            <div className={style.schedules}>{schedules}</div>
            <ScheduleReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default Schedules
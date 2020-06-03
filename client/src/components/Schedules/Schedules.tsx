import React, { FC } from 'react'
import style from './Schedules.module.css'
import Schedule from './Schedule/Schedule'
import { reduxForm } from 'redux-form'
import ScheduleAddForm from './ScheduleAddForm/ScheduleAddForm'
import { BaseFormItem } from '../../types'
import * as s from '../../types/schedule'

const ScheduleReduxForm = reduxForm<BaseFormItem>({form: 'scheduleForm'})(ScheduleAddForm)

const Schedules: FC<s.storeProps> = props => {
  const onSubmit = (data: BaseFormItem) => props.addSchedule(data.text, data.date)

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
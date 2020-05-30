import React, { useState } from 'react'
import s from './Schedule.module.css'
import Preloader from '../../common/Preloader/Preloder'
import cn from 'classnames'
import { ScheduleReduxFormDate, ScheduleReduxFormText } from './ScheduleForms'

const Schedule = ({ schedule, ...props }) => {
  let [textEdit, textSetEdit] = useState(false)
  let [dateEdit, dateSetEdit] = useState(false)

  const onTextSubmit = async data => {
    await textSetEdit(false)
    props.updateScheduleText(data._id, data.text)
  }
  const onDateSubmit = data => {
    dateSetEdit(false)
    props.updateScheduleDate(data._id, data.date)
  }

  const textActivateEdit = () => textSetEdit(true)
  const dateActivateEdit = () => dateSetEdit(true)

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
               : <ScheduleReduxFormText initialValues={schedule} onSubmit={onTextSubmit}/>
             }
             {!dateEdit
               ? <small onDoubleClick={dateActivateEdit}>{schedule.date}</small>
               : <ScheduleReduxFormDate initialValues={schedule.date} onSubmit={onDateSubmit}/>
             }
           </div>
         </div>
}
export default Schedule
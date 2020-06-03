import React, { FC, useState } from 'react'
import style from './Schedule.module.css'
import Preloader from '../../common/Preloader/Preloder'
import cn from 'classnames'
import { ScheduleReduxFormDate, ScheduleReduxFormText } from './ScheduleForms'
import * as s from '../../../types/schedule'

const Schedule: FC<s.ownProps> = ({schedule, ...props}) => {
  let [textEdit, textSetEdit] = useState<boolean>(false)
  let [dateEdit, dateSetEdit] = useState<boolean>(false)

  const onTextSubmit = (data: s.updateText) => {
    textSetEdit(false)
    props.updateScheduleText(data._id, data.text)
  }
  const onDateSubmit = (data: s.updateDate) => {
    dateSetEdit(false)
    props.updateScheduleDate(data._id, data.date)
  }

  const textActivateEdit = () => textSetEdit(true)
  const dateActivateEdit = () => dateSetEdit(true)

  return props.schedulesIsLoading.some(_id => _id === schedule._id) && <Preloader/>
         || <div className='card'>
           <div className='cardHeader'>
             <button onClick={() => props.deleteSchedule(schedule._id)}>
               Delete
             </button>
           </div>
           <div className={cn(style.cardContent, 'cardContent')}>
             {!textEdit
               ? <p onDoubleClick={textActivateEdit}>{schedule.text}</p>
               : <ScheduleReduxFormText initialValues={schedule} onSubmit={onTextSubmit}/>
             }
             {!dateEdit
               ? <small onDoubleClick={dateActivateEdit}>{schedule.date}</small>
               : <ScheduleReduxFormDate initialValues={schedule} onSubmit={onDateSubmit}/>
             }
           </div>
         </div>
}
export default Schedule
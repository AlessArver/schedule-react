import { required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import { InjectedFormProps, reduxForm } from 'redux-form'
import React, { FC } from 'react'
import {
  ScheduleUpdateDate,
  ScheduleUpdateDateKeys,
  ScheduleUpdateText,
  ScheduleUpdateTextKeys
} from '../../../types/schedule'

const ScheduleFormText: FC<InjectedFormProps<ScheduleUpdateText>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<ScheduleUpdateTextKeys>(
      'text', 'What you\'ll to do?',
      [required], Input,
      {autoFocus: true, onBlur: handleSubmit})}
    <button>aaaaa</button>
  </form>
)
const ScheduleFormDate: FC<InjectedFormProps<ScheduleUpdateDate>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<ScheduleUpdateDateKeys>('date', undefined,
      [required], Input, {type: 'date', autoFocus: true, onBlur: handleSubmit})}
    <button>aaaaa</button>
  </form>
)

export const ScheduleReduxFormText = reduxForm<ScheduleUpdateText>({form: 'scheduleTextForm'})(ScheduleFormText)
export const ScheduleReduxFormDate = reduxForm<ScheduleUpdateDate>({form: 'scheduleDateForm'})(ScheduleFormDate)
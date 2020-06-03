import { required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import { InjectedFormProps, reduxForm } from 'redux-form'
import React, { FC } from 'react'
import * as  s from '../../../types/schedule'

const ScheduleFormText: FC<InjectedFormProps<s.updateText>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<s.updateTextKeys>(
      'text', 'What you\'ll to do?',
      [required], Input,
      {autoFocus: true, onBlur: handleSubmit})}
    <button>aaaaa</button>
  </form>
)
const ScheduleFormDate: FC<InjectedFormProps<s.updateDate>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<s.updateDateKeys>('date', undefined,
      [required], Input, {type: 'date', autoFocus: true, onBlur: handleSubmit})}
    <button>aaaaa</button>
  </form>
)

export const ScheduleReduxFormText = reduxForm<s.updateText>({form: 'scheduleTextForm'})(ScheduleFormText)
export const ScheduleReduxFormDate = reduxForm<s.updateDate>({form: 'scheduleDateForm'})(ScheduleFormDate)
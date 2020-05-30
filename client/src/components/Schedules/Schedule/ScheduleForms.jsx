import { required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import { reduxForm } from 'redux-form'
import React from 'react'

const ScheduleFormText = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {createField(
      'text', 'What you\'ll to do?',
      [required], Input,
      { autoFocus: true, onBlur: handleSubmit })}
    <button>aaaaa</button>
  </form>
)
const ScheduleFormDate = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>    {createField(
    'date', null,
    [required], Input,
    { autoFocus: true, onBlur: handleSubmit })}
    <button>aaaaa</button>
  </form>
)

export const ScheduleReduxFormText = reduxForm({ form: 'scheduleTextForm' })(ScheduleFormText)
export const ScheduleReduxFormDate = reduxForm({ form: 'scheduleDateForm' })(ScheduleFormDate)
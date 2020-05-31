import React, { FC } from 'react'
import { InjectedFormProps } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import { BaseFormItem } from '../../../types'

const maxLengthField = maxLength(150)

const ScheduleAddForm: FC<InjectedFormProps<BaseFormItem>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField(
      'text', 'What you\'ll to do?',
      [required, maxLengthField], Input,
      {autoFocus: true, onBlur: handleSubmit})}
    {createField('date', undefined, [required], Input, {type: 'date', autoFocus: true, onBlur: handleSubmit})}
    <button>Send</button>
  </form>
)
export default ScheduleAddForm
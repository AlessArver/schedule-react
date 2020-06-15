import { InjectedFormProps, reduxForm } from 'redux-form'
import React, { FC } from 'react'
import { createField, Input } from '../../common/Forms/Forms'
import { required } from '../../../utils/validators'

const SettingsFormName: FC<InjectedFormProps<string>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField(
      'name', undefined,
      [required], Input,
      {autoFocus: true, onBlur: handleSubmit})}
    <button className='btn btn-secondary'>update</button>
  </form>
)
export const SettingsReduxFormName = reduxForm<string>({form: 'settingsFormName'})(SettingsFormName)
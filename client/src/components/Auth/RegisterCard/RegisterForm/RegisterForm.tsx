import React, { FC } from 'react'
import { InjectedFormProps } from 'redux-form'
import { createField, Input } from '../../../common/Forms/Forms'
import { maxLength, minLength, required } from '../../../../utils/validators'
import { RegisterFormKeys, RegisterFormType } from '../../../../types/auth'

const minLengthEmail = minLength(3)
const minLengthPassword = minLength(8)
const maxLengthField = maxLength(255)

const RegisterForm: FC<InjectedFormProps<RegisterFormType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<RegisterFormKeys>('name', 'name', [required], Input, {})}
      {createField<RegisterFormKeys>('surname', 'surname', [required], Input, {})}
      {createField<RegisterFormKeys>('email', 'email',
        [required, minLengthEmail, maxLengthField], Input, {type: 'email'})}
      {createField<RegisterFormKeys>('password', 'password',
        [required, minLengthPassword, maxLengthField], Input, {type: 'password'})}
      <button className='btn btn-secondary' type='submit'>Login</button>
    </form>
  )
}
export default RegisterForm
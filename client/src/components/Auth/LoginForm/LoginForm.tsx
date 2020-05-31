import React, { FC } from 'react'
import { InjectedFormProps } from 'redux-form'
import { createField, Input } from '../../common/Forms/Forms'
import { maxLength, minLength, required } from '../../../utils/validators'
import { LoginFormKeys, BaseAuthForm } from '../../../types/auth'

const minLengthEmail = minLength(3)
const minLengthPassword = minLength(8)
const maxLengthField = maxLength(255)

const LoginForm: FC<InjectedFormProps<BaseAuthForm>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormKeys>('email', 'email',
        [required, minLengthEmail, maxLengthField], Input, {type: 'email'})}
      {createField<LoginFormKeys>('password', 'password',
        [required, minLengthPassword, maxLengthField], Input, {type: 'password'})}
      <button type='submit'>Login</button>
    </form>
  )
}
export default LoginForm
import React, { FC } from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import { Input } from '../../common/Forms/Forms'
import { maxLength, minLength, required } from '../../../utils/validators'
import { LoginFormType } from '../../../types/form'

const minLengthEmail = minLength(3)

const minLengthPassword = minLength(8)
const maxLengthEP = maxLength(255)

const LoginForm: FC<LoginFormType & InjectedFormProps<{}, LoginFormType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type='email'
        name='email'
        placeholder='email'
        validate={[required, minLengthEmail, maxLengthEP]}
        component={Input}
      />
      <Field
        type='password'
        name='password'
        placeholder='password'
        validate={[required, minLengthPassword, maxLengthEP]}
        component={Input}
      />
      <button type='submit'>Login</button>
    </form>
  )
}
export default LoginForm
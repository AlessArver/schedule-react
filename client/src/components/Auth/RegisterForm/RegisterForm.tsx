import React, { FC } from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import { Input } from '../../common/Forms/Forms'
import { maxLength, minLength, required } from '../../../utils/validators'
import { RegisterFormType } from '../../../types/form'

const minLengthEmail = minLength(3)

const minLengthPassword = minLength(8)
const maxLengthEP = maxLength(255)

const RegisterForm: FC<RegisterFormType & InjectedFormProps<{}, RegisterFormType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type='text'
        name='name'
        placeholder='name'
        validate={[required]}
        component={Input}
      />
      <Field
        type='text'
        name='surname'
        placeholder='surname'
        validate={[required]}
        component={Input}
      />

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
      <button type='submit'>Register</button>
    </form>
  )
}
export default RegisterForm
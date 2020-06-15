import React, { FC } from 'react'
import { InjectedFormProps } from 'redux-form'
import { createField, Input } from '../../../pages/common/Forms/Forms'
import { maxLength, minLength, required } from '../../../utils/validators'
import { RegisterFormKeys, IRegisterForm } from '../../../types/auth'
import { Button } from '../../../components'

const minLengthEmail = minLength(3)
const minLengthPassword = minLength(8)
const maxLengthField = maxLength(255)

const RegisterForm: FC<InjectedFormProps<IRegisterForm>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<RegisterFormKeys>('name', 'name', [required], Input, {})}
      {createField<RegisterFormKeys>('surname', 'surname', [required], Input, {})}
      {createField<RegisterFormKeys>('email', 'email',
        [required, minLengthEmail, maxLengthField], Input, {type: 'email'})}
      {createField<RegisterFormKeys>('password', 'password',
        [required, minLengthPassword, maxLengthField], Input, {type: 'password'})}
      <Button className='btn-secondary mt-3' type='submit'>Отправить</Button>
    </form>
  )
}
export default RegisterForm
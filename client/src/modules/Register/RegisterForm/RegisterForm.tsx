import React, { FC } from 'react'
import { InjectedFormProps } from 'redux-form'
import { createField, Input } from '../../../pages/common/Forms/Forms'
import { maxLength, minLength, required } from '../../../utils/validators'
import { RegisterFormKeys, IRegisterForm } from '../../../types/auth'
import { Button } from '../../../components'
import { useTranslation } from 'react-i18next'

const minLengthEmail = minLength(3)
const minLengthPassword = minLength(8)
const maxLengthField = maxLength(255)

const RegisterForm: FC<InjectedFormProps<IRegisterForm>> = ({handleSubmit}) => {
  const {t, i18n} = useTranslation()

  return <form onSubmit={handleSubmit}>
    {createField<RegisterFormKeys>('name', t('auth.name'), [required], Input, {})}
    {createField<RegisterFormKeys>('surname', t('auth.surname'), [required], Input, {})}
    {createField<RegisterFormKeys>('email', t('auth.email'),
      [required, minLengthEmail, maxLengthField], Input, {type: 'email'})}
    {createField<RegisterFormKeys>('password', t('auth.password'),
      [required, minLengthPassword, maxLengthField], Input, {type: 'password'})}
    <Button className='btn-secondary mt-3' type='submit'>{t('auth.button')}</Button>
  </form>
}
export default RegisterForm
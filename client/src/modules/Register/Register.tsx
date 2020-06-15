import React, { FC } from 'react'
import { reduxForm } from 'redux-form'

import { IRegisterForm } from '../../types/auth'
import './Register.sass'
import { Button, Card } from '../../components'
import RegisterForm from './RegisterForm/RegisterForm'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const RegisterReduxForm = reduxForm<IRegisterForm>({form: 'register'})(RegisterForm)

type RegisterCardProps = {
  register: (name: string, surname: string, email: string, password: string) => void
}

const Register: FC<RegisterCardProps> = ({register}) => {
  const {t, i18n} = useTranslation()

  const registerOnSubmit = (formData: IRegisterForm) =>
    register(formData.name, formData.surname, formData.email, formData.password)

  return <div className={`text-center justify-content-center align-content-center`}>
    <Card className='mb-4'>
      <div className='card-body'>
        <h5 className='card-title text-center mb-5 my-card-title'>{t('auth.register')}</h5>
        <RegisterReduxForm onSubmit={registerOnSubmit}/>
      </div>
    </Card>
    <NavLink to='/login' className='btn-link'>{t('auth.login')}</NavLink>
  </div>
}
export default Register
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { reduxForm } from 'redux-form'

import { ILoginForm } from '../../types/auth'
import { Button, Card } from '../../components'
import LoginForm from './LoginForm/LoginForm'

const LoginReduxForm = reduxForm<ILoginForm>({form: 'login'})(LoginForm)

type LoginCardProps = {
  login: (email: string, password: string) => void
}

const Login: FC<LoginCardProps> = ({login}) => {
  const loginOnSubmit = (formData: ILoginForm) => login(formData.email, formData.password)

  return <div className='text-center'>
    <Card className='mb-4'>
      <div className='card-body'>
        <h5 className='card-title text-center mb-5 my-card-title'>Войти</h5>
        <LoginReduxForm onSubmit={loginOnSubmit}/>
      </div>
    </Card>
    <NavLink to='/register' className='btn-link'>Зарегистрироваться</NavLink>
  </div>
}
export default Login
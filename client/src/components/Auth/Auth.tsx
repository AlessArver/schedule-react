import React, { FC } from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import { AuthMapDispatchToProps, BaseAuthForm, RegisterFormType } from '../../types/auth'

const LoginReduxForm = reduxForm<BaseAuthForm>({form: 'login'})(LoginForm)
const RegisterReduxForm = reduxForm<RegisterFormType>({form: 'register'})(RegisterForm)

const Auth: FC<AuthMapDispatchToProps> = props => {
  const loginOnSubmit = (formData: BaseAuthForm) => props.login(formData.email, formData.password)

  const registerOnSubmit = (formData: RegisterFormType) =>
    props.register(formData.name, formData.surname, formData.email, formData.password)

  return (
    <>
      <LoginReduxForm onSubmit={loginOnSubmit}/>
      <RegisterReduxForm onSubmit={registerOnSubmit}/>
    </>
  )
}
export default Auth
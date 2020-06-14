import React, { FC } from 'react'
import { reduxForm } from 'redux-form'
import { BaseAuthForm } from '../../../types/auth'
import LoginForm from '../LoginForm/LoginForm'

const LoginReduxForm = reduxForm<BaseAuthForm>({form: 'login'})(LoginForm)

type LoginCardProps = {
  login: (email: string, password: string) => void
  setRegister: (register: boolean) => void
}

const LoginCard: FC<LoginCardProps> = ({login, setRegister}) => {
  const loginOnSubmit = (formData: BaseAuthForm) => login(formData.email, formData.password)

  return <div className='text-center'>
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title text-center mb-3'>Login</h5>
        <LoginReduxForm onSubmit={loginOnSubmit}/>
      </div>
    </div>
    <button onClick={() => setRegister(true)} className='btn btn-link'>Register</button>
  </div>
}
export default LoginCard
import React, { FC } from 'react'
import { reduxForm } from 'redux-form'
import { RegisterFormType } from '../../../types/auth'
import RegisterForm from './RegisterForm/RegisterForm'
import s from './RegisterCard.module.css'

const RegisterReduxForm = reduxForm<RegisterFormType>({form: 'register'})(RegisterForm)

type RegisterCardProps = {
  register: (name: string, surname: string, email: string, password: string) => void
  setRegister: (register: boolean) => void
}

const RegisterCard: FC<RegisterCardProps> = ({register,setRegister}) => {
  const registerOnSubmit = (formData: RegisterFormType) =>
    register(formData.name, formData.surname, formData.email, formData.password)

  return <div className={`text-center justify-content-center align-content-center`}>
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title text-center mb-3'>Register</h5>
        <RegisterReduxForm onSubmit={registerOnSubmit}/>
      </div>
    </div>
    <button onClick={() => setRegister(false)} className='btn btn-link'>Login</button>
  </div>
}
export default RegisterCard
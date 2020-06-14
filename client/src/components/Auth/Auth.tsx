import React, { FC, useState } from 'react'
import { AuthMapDispatchToProps } from '../../types/auth'
import RegisterCard from './RegisterCard/RegisterCard'
import LoginCard from './LoginCard/LoginCard'

const Auth: FC<AuthMapDispatchToProps> = props => {
  const [register, setRegister] = useState<boolean>(false)

  return register
    ? <RegisterCard register={props.register} setRegister={setRegister}/>
    : <LoginCard login={props.login} setRegister={setRegister}/>
}
export default Auth
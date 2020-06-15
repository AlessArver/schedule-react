import React, { FC, useState } from 'react'
import { AuthMapDispatchToProps } from '../../types/auth'

import './Auth.sass'

import Register from '../../modules/Register/Register'
import Login from '../../modules/Login/Login'

const Auth: FC<AuthMapDispatchToProps> = props => {
  const [register, setRegister] = useState<boolean>(false)

  return <div className='auth-wrapper'>
    {register
      ? <Register register={props.register} setRegister={setRegister}/>
      : <Login login={props.login} setRegister={setRegister}/>}
  </div>
}
export default Auth
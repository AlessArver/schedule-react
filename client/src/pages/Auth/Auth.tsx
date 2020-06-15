import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import './Auth.sass'
import { AuthMapDispatchToProps } from '../../types/auth'
import { Login, Register } from '../../modules'

const Auth: FC<AuthMapDispatchToProps> = props => {
  return <div className='auth-wrapper'>
    <Route path='/login' render={() => <Login login={props.login}/>}/>
    <Route path='/register' render={() => <Register register={props.register}/>}/>
  </div>
}
export default Auth
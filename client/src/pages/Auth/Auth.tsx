import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import { AuthMapDispatchToProps } from '../../types/auth'

import './Auth.sass'

import Register from '../../modules/Register/Register'
import Login from '../../modules/Login/Login'

const Auth: FC<AuthMapDispatchToProps> = props => {
  return <div className='auth-wrapper'>
    <Route path='/login' render={() => <Login login={props.login}/>}/>
    <Route path='/register' render={() => <Register register={props.register}/>}/>
  </div>
}
export default Auth
import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from './Auth'
import {
  register,
  login
} from '../../flux/thunks/auth'
import { RootState } from '../../flux'
import { getLoggedIn, getToken } from '../../selectors/auth'
import { FC } from 'react'
import { AuthMapDispatchToProps, AuthMapStateToProps } from '../../types/auth'

const AuthContainer: FC<AuthMapStateToProps & AuthMapDispatchToProps> = props => {
  const register = (name: string, surname: string, email: string, password: string) =>
    props.register(name, surname, email, password)

  const login = (email: string, password: string) => props.login(email, password)

  if (props.loggedIn) return <Redirect to='/schedules'/>

  return <Auth
    login={login}
    register={register}
  />
}

const mapStateToProps = (state: RootState): AuthMapStateToProps => ({
  loggedIn: getLoggedIn(state),
  token: getToken(state)
})

export default connect(mapStateToProps, {register, login})(AuthContainer)
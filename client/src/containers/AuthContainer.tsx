import * as React from 'react'
import { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../components/Auth/Auth'
import { RootState } from '../flux'
import { getLoggedIn, getToken } from '../selectors/auth'
import { AuthMapDispatchToProps, AuthMapStateToProps } from '../types/auth'
import { login, register } from '../flux/reducers/auth'

const AuthContainer: FC<AuthMapStateToProps & AuthMapDispatchToProps> = props => {
  const register = (name: string, surname: string, email: string, password: string) =>
    props.register(name, surname, email, password)

  const login = (email: string, password: string) => props.login(email, password)

  if (props.loggedIn) return <Redirect to='/schedules'/>

  return <Auth login={login} register={register}/>
}

const mapStateToProps = (state: RootState) => ({
  loggedIn: getLoggedIn(state),
  token: getToken(state)
})

export default connect<AuthMapStateToProps, AuthMapDispatchToProps, {}, RootState>
(mapStateToProps, {register, login})(AuthContainer)
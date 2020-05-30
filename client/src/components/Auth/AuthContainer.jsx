import * as React from 'react'
import { connect } from 'react-redux'
import Auth from './Auth'
import {
  register,
  login
} from '../../flux/thunks/auth'

class AuthContainer extends React.Component {
  register = user => this.props.register(user)
  login = user => this.props.login(user)

  render() {
    return <Auth
      user={this.props.user}
      loggedIn={this.props.loggedIn}
      cookies={this.props.cookies}
      login={this.login}
      register={this.register}
    />
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  loggedIn: state.auth.loggedIn,
  token: state.auth.token
})

export default connect(mapStateToProps, {
  register,
  login
})(AuthContainer)
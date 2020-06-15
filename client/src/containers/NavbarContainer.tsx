import React, { ComponentType, FC } from 'react'
import { NavBar } from '../components/'
import { connect } from 'react-redux'
import { getLoggedIn } from '../selectors/auth'
import { RootState } from '../flux'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRouter'
import { logout } from '../flux/reducers/auth'

type StateType= {
  loggedIn: boolean
}
type DispatchType = {
  logout: () => void
}


const NavBarContainer: FC<StateType & DispatchType> = ({loggedIn, logout}) => {
  return <NavBar loggedIn={loggedIn} logout={logout}/>
}

const mapStateToProps = (state: RootState): StateType => ({
  loggedIn: getLoggedIn(state)
})

export default compose<ComponentType>(
  connect(mapStateToProps, {logout}), withAuthRedirect)(NavBarContainer)
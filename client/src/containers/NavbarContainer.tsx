import React, { ComponentType, FC } from 'react'
import { NavBar } from '../components/'
import { connect } from 'react-redux'
import { getLoggedIn } from '../selectors/auth'
import { RootState } from '../flux'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRouter'

type PropsType = {
  loggedIn: boolean
}

const NavBarContainer: FC<PropsType> = ({loggedIn}) => {
  return <NavBar loggedIn={loggedIn}/>
}

const mapStateToProps = (state: RootState): PropsType => ({
  loggedIn: getLoggedIn(state)
})

export default compose<ComponentType>(
  connect(mapStateToProps), withAuthRedirect)(NavBarContainer)
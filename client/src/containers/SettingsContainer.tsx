import React, { FC } from 'react'
import Settings from '../pages/Settings/Settings'
import { RootState } from '../flux'
import { connect } from 'react-redux'
import { getUser } from '../selectors/auth'
import { IsAuth } from '../types/isAuth'

const SettingsContainer: FC<IsAuth> = props => {
  return <Settings user={props.user}/>
}

const maStateToProps = (state: RootState): IsAuth => ({
  user: getUser(state)
})

export default connect(maStateToProps)(SettingsContainer)
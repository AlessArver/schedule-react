import React, { FC } from 'react'
import { connect } from 'react-redux'

import { Settings } from '../pages/'
import { RootState } from '../flux'
import { getUser } from '../selectors/auth'
import { UserType } from '../types'

type SettingsMapType = {
  user: UserType | null
}

const SettingsContainer: FC<SettingsMapType> = props => {
  return <Settings user={props.user}/>
}

const maStateToProps = (state: RootState): SettingsMapType => ({
  user: getUser(state)
})

export default connect(maStateToProps)
(SettingsContainer)
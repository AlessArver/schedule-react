import React, { FC, useState } from 'react'
import { IsAuth } from '../../types/isAuth'
import { SettingsReduxFormName } from './SettingsForms'

const Settings: FC<IsAuth> = ({user}) => {
  const [editName, setEditName] = useState(false)
  const [editSurname, setEditSurname] = useState(false)
  const [editEmail, setEditEmail] = useState(false)

  const nameActivateEdit = () => setEditName(true)
  const surnameActivateEdit = () => setEditSurname(true)
  const emailActivateEdit = () => setEditEmail(true)

  return <div className='card'>
    <div className='card-body'>
      <div className='mb-2'><b>Name:</b> {user?.name}</div>
      <div className='mb-2'><b>Surname:</b> {user?.surname}</div>
      <div className='mb-2'><b>Email:</b> {user?.email}</div>
    </div>
  </div>
}
export default Settings
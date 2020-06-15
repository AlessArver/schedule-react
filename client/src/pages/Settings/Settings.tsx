import React, { FC, useState } from 'react'
import { IsAuth } from '../../types/isAuth'
import { SettingsReduxFormName } from './SettingsForms'
import { Card } from '../../components'

const Settings: FC<IsAuth> = ({user}) => {
  const [editName, setEditName] = useState(false)
  const [editSurname, setEditSurname] = useState(false)
  const [editEmail, setEditEmail] = useState(false)

  const nameActivateEdit = () => setEditName(true)
  const surnameActivateEdit = () => setEditSurname(true)
  const emailActivateEdit = () => setEditEmail(true)

  return <Card>
    <div className='card-body'>
      <div className='mb-2'><b>Имя:</b> {user?.name}</div>
      <div className='mb-2'><b>Фамилия:</b> {user?.surname}</div>
      <div className='mb-2'><b>Почта:</b> {user?.email}</div>
    </div>
  </Card>
}
export default Settings
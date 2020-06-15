import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Settings.sass'
import { IsAuth } from '../../types/isAuth'
import { Card } from '../../components'

const Settings: FC<IsAuth> = ({user}) => {
  const {t, i18n} = useTranslation()

  const [editName, setEditName] = useState(false)
  const [editSurname, setEditSurname] = useState(false)
  const [editEmail, setEditEmail] = useState(false)

  const nameActivateEdit = () => setEditName(true)
  const surnameActivateEdit = () => setEditSurname(true)
  const emailActivateEdit = () => setEditEmail(true)

  return <div className='settings-wrapper'>
    <Card>
      <div className='card-body'>
        <div className='mb-2'><b>{t('settings.name')}:</b> {user?.name}</div>
        <div className='mb-2'><b>{t('settings.surname')}:</b> {user?.surname}</div>
        <div className='mb-2'><b>{t('settings.email')}:</b> {user?.email}</div>
      </div>
    </Card>
  </div>
}
export default Settings
import React, { FC, useState } from 'react'
import DocumentTitle from 'react-document-title'
import { useTranslation } from 'react-i18next'

import './Settings.sass'
import { IsAuth } from '../../types/isAuth'
import { Button, Card } from '../../components'

type SettingsType = {
  theme: string
  toggleTheme: () => void
}

const Settings: FC<IsAuth & SettingsType> = ({user, theme, toggleTheme}) => {
  const {t, i18n} = useTranslation()

  const [editName, setEditName] = useState(false)
  const [editSurname, setEditSurname] = useState(false)
  const [editEmail, setEditEmail] = useState(false)

  const nameActivateEdit = () => setEditName(true)
  const surnameActivateEdit = () => setEditSurname(true)
  const emailActivateEdit = () => setEditEmail(true)

  return <DocumentTitle title='Settings'>
    <div className='settings-wrapper'>
      <Card>
        <div className='card-body'>
          <div className='mb-2'><b>{t('settings.name')}:</b> {user?.name}</div>
          <div className='mb-2'><b>{t('settings.surname')}:</b> {user?.surname}</div>
          <div className='mb-2'><b>{t('settings.email')}:</b> {user?.email}</div>
          <div className='mb-2 d-flex justify-content-between'>
            <b>{t('settings.theme')}:</b>
            <Button onClick={toggleTheme}>{theme}</Button>
          </div>
        </div>
      </Card>
    </div>
  </DocumentTitle>
}
export default Settings
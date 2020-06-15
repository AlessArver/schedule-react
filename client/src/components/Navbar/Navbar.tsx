import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import './Navbar.sass'
import { NavLink } from 'react-router-dom'
import { Button } from '../index'

type PropsType = {
  loggedIn: boolean
  logout: () => void
}

const NavBar: FC<PropsType> = ({loggedIn, logout}) => {
  const {t, i18n} = useTranslation()

  const changeLang = (lang: string) => i18n.changeLanguage(lang)

  return <nav>
    <ul className='nav justify-content-center mb-5'>
      {loggedIn
       && <>
         <li className='nav-item'>
           <NavLink to='/todos' className='nav-link' activeClassName='nav-link_active'>{t('navbar.todo')}</NavLink>
         </li>
         <li className='nav-item'>
           <NavLink to='/settings' className='nav-link' activeClassName='nav-link_active'>{t('navbar.settings')}</NavLink>
         </li>
         <li>
           <Button onClick={logout} className='btn-nav'>{t('navbar.logout')}</Button>
         </li>
       </>}
      <li className='nav-item dropdown'>
        <Button className='btn-nav dropdown-toggle'>{t('navbar.lang')}</Button>
        <div className='dropdown-content'>
          <Button onClick={() => changeLang('ru')} className='dropdown-item'>ru</Button>
          <Button onClick={() => changeLang('en')} className='dropdown-item'>en</Button>
        </div>
      </li>
    </ul>
  </nav>
}
export default React.memo(NavBar)
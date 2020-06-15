import React, { FC } from 'react'

import './Navbar.sass'
import { NavLink } from 'react-router-dom'

type l = {
  loggedIn: boolean
}

const NavBar: FC<l> = ({loggedIn}) => (
  <nav>
    <ul className='nav justify-content-center mb-5'>
      {loggedIn
       && <>
         <li className='nav-item'>
           <NavLink to='/todos' className='nav-link' activeClassName='nav-link_active'>Тодо</NavLink>
         </li>
         <li className='nav-item'>
           <NavLink to='/settings' className='nav-link' activeClassName='nav-link_active'>Настройки</NavLink>
         </li>
        <li>
          <a className='nav-link'>Выйти</a>
        </li>
       </>}
    </ul>
  </nav>
)
export default React.memo(NavBar)
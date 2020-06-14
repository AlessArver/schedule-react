import React, { FC } from 'react'
import s from './Navbar.module.css'
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
           <NavLink to='/todos' className='nav-link' activeClassName={s.active}>Todos</NavLink>
         </li>
         <li className='nav-item'>
           <NavLink to='/settings' className='nav-link' activeClassName={s.active}>Settings</NavLink>
         </li>
       </>}
    </ul>
  </nav>
)
export default React.memo(NavBar)
import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

export default  () => (
    <nav className={s.nav}>
        <NavLink to='/schedules' className={s.navItem} activeClassName={s.active}>Schedule</NavLink>
        <NavLink to='/todos' className={s.navItem} activeClassName={s.active}>Todos</NavLink>
        <NavLink to='/settings' className={s.navItem} activeClassName={s.active}>Settings</NavLink>
        <NavLink to='/auth' className={s.navItem} activeClassName={s.active}>Auth</NavLink>
    </nav>
)
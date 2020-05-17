import React from "react"
import * as s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav>
        <NavLink to="/schedules" activeClassName={s.active}>Schedule</NavLink>
        <NavLink to="/todos" activeClassName={s.active}>Todos</NavLink>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        <NavLink to="/auth" activeClassName={s.active}>Auth</NavLink>
    </nav>
)
export default Navbar
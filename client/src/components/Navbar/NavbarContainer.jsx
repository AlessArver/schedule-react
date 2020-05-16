import React from "react"
import * as s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
    render() {
        return <Navbar />
    }
}
export default connect()(NavbarContainer)
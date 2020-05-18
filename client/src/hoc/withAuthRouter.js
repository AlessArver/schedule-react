import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = state => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = Component => {
    const RedirectComponent = props => {
        if (!props.loggedIn) return <Redirect to="/auth"/>
        return <Component {...props} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
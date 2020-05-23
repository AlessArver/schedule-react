import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = state => ({
    token: state.auth.token
})

export const withAuthRedirect = Component => {
    const RedirectComponent = props => {
        if (!props.token) return <Redirect to="/auth"/>
        return <Component {...props} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
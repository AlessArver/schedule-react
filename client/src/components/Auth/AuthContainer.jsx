import * as React from "react";
import {connect} from "react-redux";
import Auth from "./Auth";
import {registerUser, loadingUser, loadedUser, updateNewUserEmail, updateNewUserPassword} from "../../redux/authReducer";
import userApi from "../../api/user";

class AuthContainer extends React.Component {
    register = user => {
        let {name, surname, email, password} = user
        userApi.register(name, surname, email, password)
            .then(res => {
                // this.props.register(token, user)
            })
    }

    login = (user) => {
        this.props.loadingUser()
        userApi.login(user.email, user.password)
            .then(res => {
                debugger
                // this.props.loadedUser(token, user)
            })
    }

    render() {
        return <Auth
            user={this.props.user}
            newUserEmail={this.props.newUserEmail}
            newUserPassword={this.props.newUserPassword}
            loggedIn={this.props.loggedIn}
            cookies={this.props.cookies}
            updateNewUserEmail={this.props.updateNewUserEmail}
            updateNewUserPassword={this.props.updateNewUserPassword}
            login={this.login}
        />
    }
}

const mapStateToProps = state => ({
    user: state.authPage.user,
    loggedIn: state.authPage.loggedIn,
    cookies: state.authPage.cookies,
    newUserEmail: state.authPage.newUserEmail,
    newUserPassword: state.authPage.newUserPassword
})

export default connect(mapStateToProps, {
    registerUser,
    loadingUser,
    loadedUser,
    updateNewUserEmail,
    updateNewUserPassword
})(AuthContainer)
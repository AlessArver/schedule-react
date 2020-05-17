import * as React from "react";
import {connect} from "react-redux";
import Auth from "./Auth";
import {
    register,
    login,
    updateNewUserEmail,
    updateNewUserPassword,
    updateNewUserName,
    updateNewUserSurname
} from "../../redux/authReducer";

class AuthContainer extends React.Component {
    register = user => {
        this.props.register(user)
    }

    login = user => {
        this.props.login(user)
    }

    render() {
        return <Auth
            user={this.props.user}
            newUserName={this.props.newUserName}
            newUserSurname={this.props.newUserSurname}
            newUserEmail={this.props.newUserEmail}
            newUserPassword={this.props.newUserPassword}
            loggedIn={this.props.loggedIn}
            cookies={this.props.cookies}
            updateNewUserName={this.props.updateNewUserName}
            updateNewUserSurname={this.props.updateNewUserSurname}
            updateNewUserEmail={this.props.updateNewUserEmail}
            updateNewUserPassword={this.props.updateNewUserPassword}
            login={this.login}
            register={this.register}
        />
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    loggedIn: state.auth.loggedIn,
    token: state.auth.token,
    newUserName: state.auth.newUserName,
    newUserSurname: state.auth.newUserSurname,
    newUserEmail: state.auth.newUserEmail,
    newUserPassword: state.auth.newUserPassword
})

export default connect(mapStateToProps, {
    register,
    login,
    updateNewUserName,
    updateNewUserSurname,
    updateNewUserEmail,
    updateNewUserPassword
})(AuthContainer)
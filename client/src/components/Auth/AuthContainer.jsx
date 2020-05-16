import * as React from "react";
import {connect} from "react-redux";
import Cookies from 'universal-cookie';
import Auth from "./Auth";
import {
    registerUser,
    loadingUser,
    loadedUser,
    updateNewUserEmail,
    updateNewUserPassword
} from "../../redux/authReducer";
import userApi from "../../api/user";

const cookies = new Cookies();

class AuthContainer extends React.Component {
    register = user => {
        let {name, surname, email, password} = user
        userApi.register(name, surname, email, password)
            .then(res => {
                // this.props.register(token, user)
            })
    }

    login = (user) => {
        this.props.loadingUser(true)
        userApi.login(user.email, user.password)
            .then(data => {
                debugger
                this.props.loadingUser(false)
                cookies.set("token", data.token, {path: "/"});
                let token = cookies.get("token")
                this.props.loadedUser(token, {user: data.user})
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
    user: state.auth.user,
    loggedIn: state.auth.loggedIn,
    token: state.auth.token,
    newUserEmail: state.auth.newUserEmail,
    newUserPassword: state.auth.newUserPassword
})

export default connect(mapStateToProps, {
    registerUser,
    loadingUser,
    loadedUser,
    updateNewUserEmail,
    updateNewUserPassword
})(AuthContainer)
import * as React from "react";
import {connect} from "react-redux";
import Cookies from 'universal-cookie';
import Auth from "./Auth";
import {
    registerUser,
    loadingUser,
    loadedUser,
    updateNewUserEmail,
    updateNewUserPassword,
    updateNewUserName,
    updateNewUserSurname
} from "../../redux/authReducer";
import userApi from "../../api/user";

const cookies = new Cookies();

class AuthContainer extends React.Component {
    register = user => {
        this.props.loadingUser(true)
        let {name, surname, email, password} = user
        userApi.register(name, surname, email, password)
            .then(data => {
                alert(data.message)
                this.props.registerUser()
            })
    }

    login = (user) => {
        this.props.loadingUser(true)
        userApi.login(user.email, user.password)
            .then(data => {
                this.props.loadingUser(false)
                cookies.set("token", data.token, {path: "/"});
                let token = cookies.get("token")
                alert(data.message)
                this.props.loadedUser(token, {user: data.user})
            })
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
    registerUser,
    loadingUser,
    loadedUser,
    updateNewUserName,
    updateNewUserSurname,
    updateNewUserEmail,
    updateNewUserPassword
})(AuthContainer)
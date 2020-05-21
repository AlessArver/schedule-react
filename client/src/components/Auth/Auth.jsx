import React from "react";
import {reduxForm} from "redux-form"
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
const RegisterReduxForm = reduxForm({form: "register"})(RegisterForm)

const Auth = () => {
    const loginOnSubmit = formData => {
        console.log(formData)
    }

    const registerOnSubmit = formData => {
        console.log(formData)
    }

    const login = (e) => {
        e.preventDefault()
        // const user = {
        //     email: newUserEmail.current.value,
        //     password: newUserPassword.current.value
        // }
        // props.login(user)
    }
    const register = (e) => {
        e.preventDefault()
        // const user = {
        //     name: newUserName.current.value,
        //     surname: newUserSurname.current.value,
        //     email: newUserEmail.current.value,
        //     password: newUserPassword.current.value
        // }
        // props.register(user)
    }

    return (
        <>
            <LoginReduxForm onSubmit={loginOnSubmit} />
            <RegisterReduxForm onSubmit={registerOnSubmit} />
        </>
    )
}
export default Auth
import React from "react";
import {reduxForm} from "redux-form"
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
const RegisterReduxForm = reduxForm({form: "register"})(RegisterForm)

const Auth = props => {
    const loginOnSubmit = formData => props.login(formData)
    const registerOnSubmit = formData => props.register(formData)

    return (
        <>
            <LoginReduxForm onSubmit={loginOnSubmit} />
            <RegisterReduxForm onSubmit={registerOnSubmit} />
        </>
    )
}
export default Auth
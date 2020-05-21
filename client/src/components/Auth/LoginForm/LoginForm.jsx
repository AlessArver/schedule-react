import React from "react";
import {Field} from "redux-form"

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="email"
                placeholder="email"
                component="input"
            />
            <Field
                type="password"
                name="password"
                placeholder="password"
                component="input"
            />
            <button type="submit">Login</button>
        </form>
    )
}
export default LoginForm
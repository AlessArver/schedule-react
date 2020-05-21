import React from "react";
import {Field} from "redux-form"

const RegisterForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                type="text"
                name="name"
                placeholder="name"
                component="input"
            />
            <Field
                type="text"
                name="surname"
                placeholder="surname"
                component="input"
            />

            <Field
                type="email"
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
            <button type="submit">Register</button>
        </form>
    )
}
export default RegisterForm
import React, {useState} from "react";

const Auth = props => {
    let newUserEmail = React.createRef()
    let newUserPassword = React.createRef()

    const onEmailChange = () => props.updateNewUserEmail(newUserEmail.current.value)
    const onPasswordChange = () => props.updateNewUserPassword(newUserPassword.current.value)

    const login = (e) => {
        e.preventDefault()
        const user = {email: newUserEmail.current.value, password: newUserPassword.current.value}
        props.login(user)
    }

    return (
        <>
            <form>
                <input
                    ref={newUserEmail}
                    value={props.newUserEmail}
                    onChange={onEmailChange}
                    type="email"
                    name="email"
                    placeholder="email"
                />
                <input
                    ref={newUserPassword}
                    value={props.newUserPassword}
                    onChange={onPasswordChange}
                    type="password"
                    name="password"
                    placeholder="password"
                />
                <button onClick={login}>Login</button>
            </form>
        </>
    )
}
export default Auth
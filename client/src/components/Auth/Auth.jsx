import React, {useState} from "react";

const Auth = props => {
    let newUserName = React.createRef()
    let newUserSurname = React.createRef()
    let newUserEmail = React.createRef()
    let newUserPassword = React.createRef()

    const onNameChange = () => props.updateNewUserName(newUserName.current.value)
    const onSurnameChange = () => props.updateNewUserSurname(newUserSurname.current.value)
    const onEmailChange = () => props.updateNewUserEmail(newUserEmail.current.value)
    const onPasswordChange = () => props.updateNewUserPassword(newUserPassword.current.value)

    const register = (e) => {
        e.preventDefault()
        const user = {
            name: newUserName.current.value,
            surname: newUserSurname.current.value,
            email: newUserEmail.current.value,
            password: newUserPassword.current.value
        }
        props.register(user)
    }

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
            <form>
                <input
                    ref={newUserName}
                    value={props.newUserName}
                    onChange={onNameChange}
                    type="text"
                    name="name"
                    placeholder="name"
                />
                <input
                    ref={newUserSurname}
                    value={props.newUserSurname}
                    onChange={onSurnameChange}
                    type="text"
                    name="surname"
                    placeholder="surname"
                />

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
                <button onClick={register}>Register</button>
            </form>
        </>
    )
}
export default Auth
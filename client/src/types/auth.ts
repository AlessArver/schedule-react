export type AuthMapStateToProps = {
  loggedIn: boolean
  token: string | null
}

export type AuthMapDispatchToProps = {
  register: (name: string, surname: string, email: string, password: string) => void
  login: (email: string, password: string) => void
}

export interface ILoginForm {
  email: string
  password: string
}

export interface IRegisterForm extends ILoginForm {
  name: string
  surname: string
}

export type LoginFormKeys = Extract<keyof ILoginForm, string>
export type RegisterFormKeys = Extract<keyof IRegisterForm, string>
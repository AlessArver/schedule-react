export type AuthMapStateToProps = {
  loggedIn: boolean
  token: string | null
}

export type AuthMapDispatchToProps = {
  register: (name: string, surname: string, email: string, password: string) => void
  login: (email: string, password: string) => void
}

export interface BaseAuthForm {
  email: string
  password: string
}
export interface RegisterFormType extends BaseAuthForm {
  name: string
  surname: string
}

export type LoginFormKeys = Extract<keyof BaseAuthForm, string>
export type RegisterFormKeys = Extract<keyof RegisterFormType, string>
import { lazy } from 'react'

export const TodosContainer = lazy(() => import('./TodosContainer'))
export const SettingsContainer = lazy(() => import('./SettingsContainer'))
export const AuthContainer = lazy(() => import('./AuthContainer'))

export { default as NavbarContainer } from './NavbarContainer'
export { default as ToastContainer } from './ToastContainer'
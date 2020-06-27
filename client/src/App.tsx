import React, { ComponentType, FC, lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'

import './App.css'
import store, { RootState } from './flux'
import { initializeApp } from './flux/reducers/app'
import * as A from './types/app'
import { Footer, Preloader } from './components'
import {
  AuthContainer,
  SettingsContainer,
  TodosContainer,
  NavbarContainer,
  ToastContainer
} from './containers'

const App: FC<A.storeProps & A.Props> = props => {
  useEffect(() => props.initializeApp(), [props.initialized])

  if (props.initialized)
    return (
      <>
        <NavbarContainer/>
        <div className='container'>
          <Suspense fallback={<Preloader/>}>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/todos'/>}/>
              <Route path='/todos' render={() => <TodosContainer/>}/>
              <Route path='/settings' render={() => <SettingsContainer/>}/>
              <AuthContainer/>
              <Route path='*' render={() => <>404 Not Found</>}/>
            </Switch>
          </Suspense>
        </div>
        <ToastContainer/>
        <Footer/>
      </>
    )
  else return <Preloader/>
}

const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
  connect<A.mapStateToProps, A.mapDispatchToProps, {}, RootState>
  (mapStateToProps, {initializeApp}), withRouter)(App)

const MainApp: FC = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
            <AppContainer/>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}
export default MainApp
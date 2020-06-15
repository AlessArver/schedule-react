import React, { ComponentType, FC, lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import NavbarContainer from './containers/NavbarContainer'
import { compose } from 'redux'
import store, { RootState } from './flux'
import { connect, Provider } from 'react-redux'
import Preloader from './components/Preloader/Preloder'
import { initializeApp } from './flux/reducers/app'
import * as A from './types/app'

const TodosContainer = lazy(() => import('./containers/TodosContainer'))
const SettingsContainer = lazy(() => import('./containers/SettingsContainer'))
const AuthContainer = lazy(() => import('./containers/AuthContainer'))

const App: FC<A.storeProps> = props => {
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
              <Route path='/auth' render={() => <AuthContainer/>}/>
              <Route path='*' render={() => <>404 Not Found</>}/>
            </Switch>
          </Suspense>
        </div>
      </>
    )
  else return <Preloader/>
}

const mapStateToProps = (state: RootState) =>
  ({initialized: state.app.initialized})

const AppContainer = compose<ComponentType>(
  connect<A.mapStateToProps, A.mapDispatchToProps, {}, RootState>
  (mapStateToProps, {initializeApp}), withRouter)(App)

const MainApp: FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
export default MainApp
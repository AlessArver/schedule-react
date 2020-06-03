import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import NavbarContainer from './containers/NavbarContainer'
import { compose } from 'redux'
import store from './flux'
import { connect, Provider } from 'react-redux'
import Preloader from './components/common/Preloader/Preloder'
import { initializeApp } from './flux/reducers/app'

const SchedulesContainer = lazy(() => import('./containers/SchedulesContainer'))
const TodosContainer = lazy(() => import('./containers/TodosContainer'))
const SettingsContainer = lazy(() => import('./containers/SettingsContainer'))
const AuthContainer = lazy(() => import('./containers/AuthContainer'))

const App = props => {
  useEffect(() => props.initializeApp(), [props.initialized])

  if (props.initialized)
    return (
      <div className='app-wrapper'>
        <NavbarContainer/>
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader/>}>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/schedules'/>}/>
              <Route path='/schedules' render={() => <SchedulesContainer/>}/>
              <Route path='/todos' render={() => <TodosContainer/>}/>
              <Route path='/settings' render={() => <SettingsContainer/>}/>
              <Route path='/auth' render={() => <AuthContainer/>}/>
              <Route path='*' render={() => <>404 Not Found</>}/>
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  else return <Preloader/>
}

const mapStateToProps = state => ({ initialized: state.app.initialized })

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)

const MainApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
export default MainApp
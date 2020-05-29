import React, {lazy, Suspense, useEffect} from 'react'
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import './App.css'
import NavbarContainer from './components/Navbar/NavbarContainer'
import {compose} from 'redux'
import store from './redux'
import {initializeApp} from './redux/appReducer'
import {connect, Provider} from 'react-redux'
import Preloader from './components/common/Preloader/Preloder'

const SchedulesContainer = lazy(() => import('./components/Schedules/SchedulesContainer'))
const TodosContainer = lazy(() => import('./components/Todos/TodosContainer'))
const SettingsContainer = lazy(() => import('./components/Settings/SettingsContainer'))
const AuthContainer = lazy(() => import('./components/Auth/AuthContainer'))

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

const mapStateToProps = state => ({initialized: state.app.initialized})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
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
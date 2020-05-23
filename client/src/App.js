import React from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import SchedulesComponent from "./components/Schedules/SchedulesComponent";
import TodosComponent from "./components/Todo/TodosComponent";
import Settings from "./components/SettingsContainer/Settings/Settings";
import AuthContainer from "./components/Auth/AuthContainer";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloder";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.initialized)
            return (
                <div className="app-wrapper">
                    <NavbarContainer/>
                    <Route path="/schedules" render={() => <SchedulesComponent store={this.props.store}/>}/>
                    <Route path="/todos" render={() => <TodosComponent store={this.props.store}/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/auth" render={() => <AuthContainer/>}/>
                </div>
            );
        else return <Preloader />
    }
}

const mapStateToProps = state => ({initialized: state.app.initialized})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)

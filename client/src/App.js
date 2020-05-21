import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import SchedulesComponent from "./components/Schedules/SchedulesComponent";
import TodosComponent from "./components/Todo/TodosComponent";
import Settings from "./components/SettingsContainer/Settings/Settings";
import Auth from "./components/Auth/Auth";

function App(props) {
  return (
    <div className="app-wrapper">
        <NavbarContainer />
        <Route path="/schedules" render={() => <SchedulesComponent store={props.store} />} />
        <Route path="/todos" render={() => <TodosComponent store={props.store} />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/auth" render={() => <Auth />} />
    </div>
  );
}

export default App

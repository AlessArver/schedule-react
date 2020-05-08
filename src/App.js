import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {SchedulesComponent} from "./components/Schedules/SchedulesComponent";
import {TodosComponent} from "./components/Todo/TodosComponent";
import Settings from "./components/SettingsContainer/Settings/Settings";

function App(props) {
  return (
    <div className="app-wrapper">
        <Navbar />
        <Route path="/schedules" render={() => <SchedulesComponent store={props.store} />} />
        <Route path="/todos" render={() => <TodosComponent store={props.store} />} />
        <Route path="/settings" render={() => <Settings />} />
    </div>
  );
}

export default App;

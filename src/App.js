import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Schedules from "./components/SchedulesComponent/Schedules/Schedules";
import Todos from "./components/TodoComponent/Todos/Todos";
import Settings from "./components/SettingsContainer/Settings/Settings";

function App(props) {
  return (
    <div className="app-wrapper">
        <Navbar />
        <Route path="/schedules" render={() => <Schedules schedulesPage={props.state.schedulesPage} addSchedule={props.addSchedule} />} />
        <Route path="/todos" render={() => <Todos todosPage={props.state.todosPage} addTodo={props.addTodo} />} />
        <Route path="/settings" render={() => <Settings />} />
    </div>
  );
}

export default App;

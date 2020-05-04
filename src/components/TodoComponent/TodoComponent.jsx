import React from "react";
import * as s from "./TodoComponent.module.css"
import Todos from "./Todos/Todos";

class TodoComponent extends React.Component {
    render() {
        return (<Todos />);
    }
}

export default TodoComponent
import React from "react";
import todo, {addTodo, setTodoText} from "../../flux/reducers/todo";

const state = {
    todos: [
        {id: 1, text: "Buy Amazon company", completed: true},
        {id: 2, text: "Sing very cool song", completed: true},
        {id: 3, text: "Run 5km", completed: false}
    ],
    completedInProgress: []
}

it("todo should be added in todos", () => {
    const text = "Eat sushi"
    const action = addTodo(text)
    const newState = todo(state, action)
    expect(newState.todos.length).toBe(4)
    expect(newState.todos[3].text).toBe(text)
})

it("text in todo should be updated", () => {
    const text = "To rent an apartment"
    const action = setTodoText(1, text)
    const newState = todo(state, action)
    expect(newState.todos[0].text).toBe(text)
})
export const state = {
    schedulesPage: {
        schedules: [
            {id: 1, text: "Go to party", date: "01.05.2021"},
            {id: 2, text: "Go to Museum", date: "01.05.2021"},
            {id: 3, text: "Go to party", date: "01.05.2021"}
        ]
    },
    todosPage: {
        todos: [
            {id: 1, text: "Buy Amazon company", isComplete: true},
            {id: 2, text: "Sing very cool song", isComplete: true},
            {id: 3, text: "Run 5km", isComplete: false}
        ]
    }
}

export const addSchedule = (text, date) => {
    let newSchedule = {id: 4, text, date}

    state.schedulesPage.schedules.push(newSchedule)
}

export const addTodo = (text) => {
    debugger
    let newTodo = {id: 4, text, isComplete: false}

    state.todosPage.todos.push(newTodo)
}

export const completeTodo = complete => {}
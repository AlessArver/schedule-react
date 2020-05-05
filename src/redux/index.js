let renderEntireTree = () => {
    console.log("update")
}

export const state = {
    schedulesPage: {
        schedules: [
            {id: 1, text: "Go to party", date: "01.05.2021"},
            {id: 2, text: "Go to Museum", date: "01.05.2021"},
            {id: 3, text: "Go to party", date: "01.05.2021"}
        ],
        newScheduleText: "",
        newScheduleDate: ""
    },
    todosPage: {
        todos: [
            {id: 1, text: "Buy Amazon company", isComplete: true},
            {id: 2, text: "Sing very cool song", isComplete: true},
            {id: 3, text: "Run 5km", isComplete: false}
        ],
        newTodoText: "",
        newTodoIsComplete: false
    }
}
window.state = state

export const addSchedule = () => {
    let newSchedule = {
        id: 4,
        text: state.schedulesPage.newScheduleText,
        date: state.schedulesPage.newScheduleDate
    }

    state.schedulesPage.schedules.push(newSchedule)
    state.schedulesPage.newScheduleText = ""
    renderEntireTree(state)
}

export const addTodo = () => {
    let newTodo = {id: 4, text: state.todosPage.newTodoText, isComplete: false}

    state.todosPage.todos.push(newTodo)
    state.todosPage.newTodoText = ""
    renderEntireTree(state)
}

export const updateNewSchedule = (newText, newDate) => {
    state.schedulesPage.newScheduleText = newText
    state.schedulesPage.newScheduleDate = newDate
    renderEntireTree(state)
}

export const updateNewTodoText = (newText) => {
    state.todosPage.newTodoText = newText

    renderEntireTree(state)
}

export const completeTodo = (newIsComplete) => {
    state.todosPage.newTodoIsComplete = newIsComplete
    renderEntireTree(state)
}

export const subscribe = (observer) => renderEntireTree = observer
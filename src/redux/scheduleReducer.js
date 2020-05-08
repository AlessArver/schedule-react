const ADD_SCHEDULE = "ADD-SCHEDULE"
const UPDATE_NEW_SCHEDULE = "UPDATE-NEW-SCHEDULE"

const initialState = {
    schedules: [
        {id: 1, text: "Go to party", date: "01.05.2021"},
        {id: 2, text: "Go to Museum", date: "01.05.2021"},
        {id: 3, text: "Go to party", date: "01.05.2021"}
    ],
    newScheduleText: "",
    newScheduleDate: ""
}

export const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SCHEDULE: {
            let newSchedule = {
                id: 4,
                text: state.newScheduleText,
                date: state.newScheduleDate
            }
            let stateCopy = {...state}
            stateCopy.schedules = [...state.schedules]
            stateCopy.schedules.push(newSchedule)
            stateCopy.newScheduleText = ""
            return stateCopy
        }
        case UPDATE_NEW_SCHEDULE: {
            let stateCopy = {...state}
            stateCopy.newScheduleText = action.text
            stateCopy.newScheduleDate = action.date
            return stateCopy
        }
        default:
            return state

    }
}

export const addScheduleAC = () => ({type: "ADD-SCHEDULE"})
export const updateNewScheduleAC = (text, date) => ({
    type: "UPDATE-NEW-SCHEDULE",
    text,
    date
})
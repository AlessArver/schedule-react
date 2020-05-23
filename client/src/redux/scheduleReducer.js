const ADD_SCHEDULE = "ADD-SCHEDULE"
const UPDATE_NEW_SCHEDULE = "UPDATE-NEW-SCHEDULE"

const initialState = {
    schedules: [
        {id: 1, text: "Go to party", date: "01.05.2021"},
        {id: 2, text: "Go to Museum", date: "01.05.2021"},
        {id: 3, text: "Go to party", date: "01.05.2021"}
    ]
}

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SCHEDULE:
            return {
                ...state,
                schedules: [
                    ...state.schedules,
                    {
                        id: 4,
                        text: action.text,
                        date: action.date
                    }
                ]
            }
        case UPDATE_NEW_SCHEDULE:
            return {
                ...state,
                newScheduleText: action.text,
                newScheduleDate: action.date
            }
        default:
            return state
    }
}
export default scheduleReducer

export const addSchedule = (text, date) => ({type: "ADD-SCHEDULE", text, date})
export const updateNewSchedule = (text, date) => ({
    type: "UPDATE-NEW-SCHEDULE",
    text,
    date
})
const ADD_SCHEDULE = "ADD-SCHEDULE"
const UPDATE_SCHEDULE_TEXT = "UPDATE-SCHEDULE-TEXT"
const UPDATE_SCHEDULE_DATE = "UPDATE-SCHEDULE-DATE"

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
                    {id: 4, text: action.text, date: action.date}
                ]
            }
        case UPDATE_SCHEDULE_TEXT:
            return {...state, text: action.text}
        case UPDATE_SCHEDULE_DATE:
            return {...state, date: action.date}
        default:
            return state
    }
}
export default scheduleReducer

export const addSchedule = (text, date) => ({type: ADD_SCHEDULE, text, date})
export const updateScheduleText = text => ({type: UPDATE_SCHEDULE_TEXT, text})
export const updateScheduleDate = date => ({type: UPDATE_SCHEDULE_DATE, date})
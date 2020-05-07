const ADD_SCHEDULE = "ADD-SCHEDULE"
const UPDATE_NEW_SCHEDULE = "UPDATE-NEW-SCHEDULE"

export const scheduleReducer = (state, action) => {
    switch (action.type) {
        case ADD_SCHEDULE:
            let newSchedule = {
                id: 4,
                text: state.newScheduleText,
                date: state.newScheduleDate
            }

            state.schedules.push(newSchedule)
            state.newScheduleText = ""
            return state
        case UPDATE_NEW_SCHEDULE:
            state.newScheduleText = action.text
            state.newScheduleDate = action.date
            return state
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
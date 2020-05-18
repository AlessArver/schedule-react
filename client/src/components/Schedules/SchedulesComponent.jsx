import React from "react";
import {connect} from "react-redux";
import {addScheduleAC, updateNewScheduleAC} from "../../redux/scheduleReducer";
import Schedules from "./Schedules";
import {withAuthRedirect} from "../../hoc/withAuthRouter";

const maStateToProps = state => ({
    schedules: state.schedulesPage.schedules,
    newScheduleText: state.schedulesPage.newScheduleText,
    newScheduleDate: state.schedulesPage.newScheduleDate
})
const mapDispatchToProps = dispatch => ({
    updateNewScheduleText: (text, date) => dispatch(updateNewScheduleAC(text, date)),
    addSchedule: () => dispatch(addScheduleAC())
})

const AuthRedirectComponent = withAuthRedirect(Schedules)

export default connect(maStateToProps, mapDispatchToProps)(AuthRedirectComponent)
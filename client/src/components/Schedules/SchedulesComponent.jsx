import React from "react";
import {connect} from "react-redux";
import {addSchedule, updateScheduleDate, updateScheduleText} from "../../redux/scheduleReducer";
import Schedules from "./Schedules";
import {withAuthRedirect} from "../../hoc/withAuthRouter";
import {compose} from "redux";
import {getSchedules} from "../../redux/scheduleSelector";

const maStateToProps = state => ({
    schedules: getSchedules(state)
})

export default compose(
    connect(maStateToProps, {addSchedule, updateScheduleText, updateScheduleDate}),
    withAuthRedirect
)(Schedules)
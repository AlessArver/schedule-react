import React from "react";
import {connect} from "react-redux";
import {addSchedule, updateNewSchedule} from "../../redux/scheduleReducer";
import Schedules from "./Schedules";
import {withAuthRedirect} from "../../hoc/withAuthRouter";
import {compose} from "redux";

const maStateToProps = state => ({
    schedules: state.schedulesPage.schedules
})

export default compose(
    connect(maStateToProps, {
        addSchedule,
        updateNewSchedule
    }),
    withAuthRedirect
)(Schedules)
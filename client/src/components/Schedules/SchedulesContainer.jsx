import React from 'react'
import {connect} from 'react-redux'
import {
    addSchedule,
    deleteSchedule,
    requestSchedules, updateScheduleDate,
    updateScheduleText
} from '../../flux/thunks/schedule'
import Schedules from './Schedules'
import {withAuthRedirect} from '../../hoc/withAuthRouter'
import {compose} from 'redux'
import {getIsLoading, getSchedules, getSchedulesIsLoading} from '../../selectors/schedule'

class SchedulesAPIContainer extends React.Component {
    componentWillMount() {
        this.props.requestSchedules()
    }

    render() {
        return <Schedules schedules={this.props.schedules}
                          schedulesIsLoading={this.props.schedulesIsLoading}
                          addSchedule={this.props.addSchedule}
                          deleteSchedule={this.props.deleteSchedule}
                          updateScheduleText={this.props.updateScheduleText}
                          updateScheduleDate={this.props.updateScheduleDate}/>
    }
}

const maStateToProps = state => ({
    schedules: getSchedules(state),
    isLoading: getIsLoading(state),
    schedulesIsLoading: getSchedulesIsLoading(state)
})

export default compose(
    connect(maStateToProps, {
        requestSchedules,
        addSchedule, deleteSchedule,
        updateScheduleText, updateScheduleDate
    }),
    withAuthRedirect
)(SchedulesAPIContainer)
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
    addSchedule,
    deleteSchedule,
    requestSchedules, updateScheduleDate,
    updateScheduleText
} from '../../redux/scheduleReducer'
import Schedules from './Schedules'
import {withAuthRedirect} from '../../hoc/withAuthRouter'
import {compose} from 'redux'
import {getSchedules} from '../../redux/scheduleSelector'
import Preloader from '../common/Preloader/Preloder'

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
    isLoading: state.schedulesPage.isLoading,
    schedulesIsLoading: state.schedulesPage.schedulesIsLoading
})

export default compose(
    connect(maStateToProps, {
        requestSchedules,
        addSchedule, deleteSchedule,
        updateScheduleText, updateScheduleDate
    }),
    withAuthRedirect
)(SchedulesAPIContainer)
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  addSchedule,
  deleteSchedule,
  requestSchedules,
  updateScheduleDate,
  updateScheduleText
} from '../../flux/thunks/schedule'
import Schedules from './Schedules'
import { withAuthRedirect } from '../../hoc/withAuthRouter'
import { compose } from 'redux'
import { getSchedules, getSchedulesIsLoading } from '../../selectors/schedule'
import { RootState } from '../../flux'
import { ScheduleMapStateToProps, ScheduleProps } from '../../types/schedule'

class SchedulesAPIContainer extends React.Component<ScheduleProps> {
  componentDidMount() {
    // @ts-ignore
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

const maStateToProps = (state: RootState): ScheduleMapStateToProps => ({
  schedules: getSchedules(state),
  schedulesIsLoading: getSchedulesIsLoading(state)
})

// <ScheduleMapStateToProps, ScheduleMapDispatchToProps, ScheduleOwnProps, RootState>
export default compose(
  connect(maStateToProps, {
    requestSchedules,
    addSchedule, deleteSchedule,
    updateScheduleText, updateScheduleDate
  }),
  withAuthRedirect
)(SchedulesAPIContainer)
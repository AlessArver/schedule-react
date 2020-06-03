import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import Schedules from '../components/Schedules/Schedules'
import { withAuthRedirect } from '../hoc/withAuthRouter'
import { compose } from 'redux'
import { getSchedules, getSchedulesIsLoading } from '../selectors/schedule'
import { RootState } from '../flux'
import * as s from '../types/schedule'
import {
  addSchedule, deleteSchedule, requestSchedules,
  updateScheduleDate, updateScheduleText
} from '../flux/reducers/schedule'
import { ScheduleType } from '../types'

class SchedulesAPIContainer extends React.Component<s.storeProps> {
  componentDidMount() {
    // @ts-ignore
    this.props.requestSchedules()
  }

  render(schedules: Array<ScheduleType> = this.props.schedules) {
    return <Schedules schedules={schedules}
                      schedulesIsLoading={this.props.schedulesIsLoading}
                      addSchedule={this.props.addSchedule}
                      deleteSchedule={this.props.deleteSchedule}
                      updateScheduleText={this.props.updateScheduleText}
                      updateScheduleDate={this.props.updateScheduleDate}/>
  }
}

const maStateToProps = (state: RootState) => ({
  schedules: getSchedules(state),
  schedulesIsLoading: getSchedulesIsLoading(state)
})

export default compose<ComponentType>(
  connect<s.mapStateToProps, s.mapDispatchToProps, {}, RootState>(maStateToProps, {
    requestSchedules, addSchedule, deleteSchedule,
    updateScheduleText, updateScheduleDate
  }), withAuthRedirect)(SchedulesAPIContainer)
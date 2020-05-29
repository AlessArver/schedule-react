import React from 'react'
import {Field} from 'redux-form'
import {maxLength, required} from '../../../utils/validators'
import {Input} from '../../common/Forms/Forms'

const maxLengthSchedule = maxLength(100)

const ScheduleForm = props => (
    <form onSubmit={props.handleSubmit}>
        <Field
            name="text"
            placeholder="What you'll to do?"
            validate={[required, maxLengthSchedule]}
            component={Input}
        />
        <Field
            name="date"
            type="date"
            validate={[required]}
            component={Input}
        />
        <button>Send</button>
    </form>
)
export default ScheduleForm
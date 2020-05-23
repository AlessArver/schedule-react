import React from "react";
import * as style from "./Schedules.module.css"
import Schedule from "./Schedule/Schedule";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/Forms";
import {maxLength, required} from "../../utils/validators";

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

const ScheduleReduxForm = reduxForm({form: "scheduleForm"})(ScheduleForm)

const Schedules = props => {
    const onSubmit = data => props.addSchedule(data.text, data.date)

    let schedules = props.schedules.map(s => <Schedule text={s.text} date={s.date} key={s.id}/>)

    return (
        <>
            <div className={style.schedules}>{schedules}</div>
            <ScheduleReduxForm onSubmit={onSubmit} />
        </>
    )
}

export default Schedules
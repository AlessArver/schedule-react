const Schedule = require('../models/schedule')

exports.getSchedules = (req, res) => {
    try {
        Schedule.find({owner: req.user.userId}, (err, schedules) => {
            res.json({resultCode: 0, schedules, message: 'Schedule is received'})
        })
    } catch (e) {
        res.json({resultCode: 1, message: `Error: ${e}`})
    }
}

exports.getSchedule = (req, res) => {
    try {
        Schedule.findOne({_id: req.params.id}, (err, schedule) => {
            res.send(schedule)
        })
    } catch (e) {
        res.json({message: `Error: ${e}`})
    }
}

exports.createSchedule = async (req, res) => {
    try {
        const schedule = await new Schedule({
            owner: req.user.userId,
            text: req.body.text,
            date: req.body.date
        })
        schedule.save()
        res.json({resultCode: 0, id: schedule.id, message: 'Schedule is created'})
    } catch (e) {
        res.json({resultCode: 1, message: `Error: ${e}`})
    }
}

exports.updateScheduleText = async (req, res) => {
    try {
        Schedule.findByIdAndUpdate(
            req.params.id,
            {text: req.body.text},
            {useFindAndModify: true},
            (e, schedule) => {
                if (e) res.json({resultCode: 1, message: `Error: ${e}`})
                else res.json({resultCode: 0, message: 'schedule text is updated'})
            }
        )
    } catch (e) {
        res.json({resultCode: 1, message: `Error: ${e}`})
    }
}
exports.updateScheduleDate = async (req, res) => {
    try {
        Schedule.findByIdAndUpdate(
            req.params.id,
            {date: req.body.date},
            {useFindAndModify: true},
            (e, schedule) => {
                if (e) res.json({resultCode: 1, message: `Error: ${e}`})
                else res.json({resultCode: 0, message: 'schedule date is updated'})
            }
        )
    } catch (e) {
        res.json({resultCode: 0, message: `Error: ${e}`})
    }
}

exports.deleteSchedule = (req, res) => {
    try {
        Schedule.findByIdAndDelete(req.params.id, e => {
            if (e) res.json({message: `Error: ${e}`})
            else res.json({message: 'schedule deleted'})
        })
    } catch (e) {
        res.json({message: `Error: ${e}`})
    }
}
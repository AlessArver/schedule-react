const Schedule = require("../models/schedule")

exports.getSchedules = async (req, res) => {
    const schedules = await Schedule.find({})

    res.send(schedules)
}

exports.getSchedule = (req, res) => {}

exports.createSchedule = async (req, res) => {
    const schedule = await new Schedule({
        text: req.body.text
    })

    schedule.save()
}

exports.updateSchedule = (req, res) => {}

exports.deleteSchedule = (req, res) => {}
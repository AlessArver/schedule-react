const Schedule = require("../models/schedule")

exports.getSchedules =  (req, res) => {
    console.log(req.user)
    // Schedule.find({owner: req.user.userId}, (err, schedules) => {
    //     res.send(schedules)
    // })
}

exports.getSchedule = (req, res) => {
    Schedule.findOne({_id: req.params.id}, (err, schedule) => {
        res.send(schedule)
    })
}

exports.createSchedule = async (req, res) => {
    const schedule = await new Schedule({
        owner: req.user.userId,
        text: req.body.text
    })
    schedule.save()
}

exports.updateSchedule = async (req, res) => {
    Schedule.findByIdAndUpdate(
        req.params.id,
        {text: req.body.text},
        {useFindAndModify: true},
        (err, schedule) => {
            if (err) throw err
            else res.json({message: "schedule is updated"})
        }
    )
}

exports.deleteSchedule = (req, res) => {
    Schedule.findByIdAndDelete(req.params.id, err => {
        if (err) throw err
        else res.json({message: "schedule deleted"})
    })
}
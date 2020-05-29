const router = require('express').Router()
const controller = require('../controllers/schedule')

router.get('/', controller.getSchedules)

router.get("/:id", controller.getSchedule)

router.post("/create", controller.createSchedule)

router.put("/update-text/:id", controller.updateScheduleText)
router.put("/update-date/:id", controller.updateScheduleDate)

router.delete("/delete/:id", controller.deleteSchedule)

module.exports = router
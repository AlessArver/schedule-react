const router = require('express').Router()
const controller = require('../controllers/schedule')

router.get('/', controller.getSchedules)

router.get("/:id", controller.getSchedule)

router.post("/create", controller.createSchedule)

router.put("/update", controller.updateSchedule)

router.delete("/delete", controller.deleteSchedule)

module.exports = router
import express from 'express'
import * as controller from '../controllers/schedule'

const router = express.Router()

router.get('/', controller.getSchedules)

router.get('/:id', controller.getSchedule)

router.post('/create', controller.createSchedule)

router.put('/update-text/:id', controller.updateScheduleText)
router.put('/update-date/:id', controller.updateScheduleDate)

router.delete('/delete/:id', controller.deleteSchedule)

export default router
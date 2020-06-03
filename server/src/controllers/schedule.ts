import { Request, Response } from 'express'
import Schedule from '../models/Schedule'

export const getSchedules = (req: any, res: Response) => {
  try {
    Schedule.find({owner: req.user.userId}, (err: any, schedules: any) => {
      res.json({resultCode: 0, schedules, message: 'Schedules is received'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: `Error: ${e}`})
  }
}

export const getSchedule = (req: Request, res: Response) => {
  try {
    Schedule.findOne({_id: req.params.id}, (err: any, schedule: any) => {
      res.json({resultCode: 0, schedule, message: 'Schedule is received'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: `Error: ${e}`})
  }
}

export const createSchedule = async (req: any, res: Response) => {
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

export const updateScheduleText = async (req: Request, res: Response) => {
  try {
    Schedule.findByIdAndUpdate(
      req.params.id,
      {text: req.body.text},
      // {useFindAndModify: true},
      (e: any) => {
        if (e) res.json({resultCode: 1, message: `Error: ${e}`})
        else res.json({resultCode: 0, message: 'schedule text is updated'})
      }
    )
  } catch (e) {
    res.json({resultCode: 1, message: `Error: ${e}`})
  }
}
export const updateScheduleDate = async (req: Request, res: Response) => {
  try {
    Schedule.findByIdAndUpdate(
      req.params.id,
      {date: req.body.date},
      // {useFindAndModify: true},
      (e: any) => {
        if (e) res.json({resultCode: 1, message: `Error: ${e}`})
        else res.json({resultCode: 0, message: 'schedule date is updated'})
      }
    )
  } catch (e) {
    res.json({resultCode: 1, message: `Error: ${e}`})
  }
}
export const deleteSchedule = (req: Request, res: Response) => {
  try {
    Schedule.findByIdAndDelete(req.params.id, (e: any) => {
      if (e) res.json({resultCode: 1, message: `Error: ${e}`})
      else res.json({resultCode: 0, message: 'schedule deleted'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: `Error: ${e}`})
  }
}
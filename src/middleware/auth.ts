import { Request, Response, NextFunction } from 'express'

const jwt = require('jsonwebtoken')

export const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies['userToken']
    if (!token)
      return res.status(401).json({message: 'Нет авторизации'})

    const decoded = jwt.verify(token, 'jhkl4ew990GK93hjGHJ')
    req.user = decoded
    req.token = token
    next()
  } catch (e) {
    res.status(401).json({message: 'Нет авторизации'})
  }
}
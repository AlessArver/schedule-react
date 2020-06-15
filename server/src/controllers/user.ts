import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'

import { UserModel } from '../models'
import { UserDocument } from '../models/User'

export const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res
        .json({
          resultCode: 1,
          errors: errors.array(),
          message: 'Введите корректную почту и пароль.'
        })

    const {name, surname, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new UserModel({name, surname, email, password: hashedPassword})
    await user.save()

    res.status(201).json({resultCode: 0, message: 'Регистрация прошла успешно'})
  } catch (e) {
    res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const user = await UserModel.findOne({email})

    const isMatch = await bcrypt.compare(password, user.password)
    if (!email || !isMatch)
      return res.json({resultCode: 1, message: 'Введите почту и пароль для входа'})

    const token = jwt.sign(
      {userId: user.id},
      'jhkl4ew990GK93hjGHJ',
      {expiresIn: 10080}
    )
    res
      .cookie('userToken', token)
      .json({resultCode: 0, token, user, message: 'U a logged in'})
  } catch (e) {
    res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
  }
}

export const getUser = (req: Request, res: Response) => {
  try {
    UserModel.findById(req.params.id, (e, user: UserDocument) => {
      e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
        : res.json({resultCode: 0, user, message: 'User received'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
  }
}

export const getAuthUser = async (req: any, res: Response) => {
  try {
    const token = req.cookies['userToken']
    const decoded = jwt.verify(token, 'jhkl4ew990GK93hjGHJ')
    let user: any = decoded

    UserModel.findById(user.userId, (e, user: UserDocument) => {
      e ? res.json({resultCode: 1, message: 'Нет авторизации'})
        : res.json({resultCode: 0, token: req.token, user, message: 'Received your data'})
    })
  } catch (e) {
    res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
  }
}

export const updateUser = (req: Request, res: Response) => {
  let user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password
  }

  UserModel.findByIdAndUpdate(
    req.params.id,
    user,
    (e, user) => {
      e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
        : res.json({resultCode: 0, message: 'user is updated'})
    }
  )
}

export const logout = async (req: Request, res: Response) => {
  UserModel.findByIdAndDelete(req.params.id, e => {
    e ? res.json({resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e})
      : res.json({resultCode: 0, message: 'user is deleted'})
  })
}
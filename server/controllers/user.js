const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const User = require('../models/user')

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res
        //.status(400)
        .json({
          resultCode: 1,
          errors: errors.array(),
          message: 'Введите корректную почту и пароль.'
        })

    const { name, surname, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({ name, surname, email, password: hashedPassword })
    await user.save()

    res.status(201).json({ resultCode: 0, message: 'Регистрация прошла успешно' })
  } catch (e) {
    res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!email || !isMatch)
      return res.json({ resultCode: 1, message: 'Введите почту и пароль для входа' })

    const token = await jwt.sign(
      { userId: user.id },
      'secret',
      { expiresIn: '1h' }
    )
    res
      .cookie('userToken', token)
      .json({ resultCode: 0, token, user, message: 'U a logged in' })
  } catch (e) {
    res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
  }
}

exports.getUser = (req, res) => {
  try {
    User.findById(req.params.id, (e, user) => {
      e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
        : res.json({ resultCode: 0, user, message: 'User received' })
    })
  } catch (e) {
    res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
  }
}

exports.getAuthUser = async (req, res) => {
  try {
    const token = req.cookies['userToken']
    const decoded = jwt.verify(token, 'secret')
    let user = decoded

    User.findById(user.userId, (e, user) => {
      e ? res.json({ resultCode: 1, message: 'Нет авторизации' })
        : res.json({ resultCode: 0, token: req.token, user, message: 'Received your data' })
    })
  } catch (e) {
    res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
  }
}

exports.updateUser = (req, res) => {
  let user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password
  }

  User.findByIdAndUpdate(
    req.params.id,
    user,
    (e, user) => {
      e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
        : res.json({ resultCode: 0, message: 'user is updated' })
    }
  )
}

exports.logout = (req, res) => {
  User.findByIdAndDelete(req.params.id, e => {
    e ? res.json({ resultCode: 1, message: 'Что-то пошло не так. Попробуйте снова.', e: e })
      : res.json({ resultCode: 0, message: 'user is deleted' })
  })
}
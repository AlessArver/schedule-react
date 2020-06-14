import express, { Request, Response } from 'express'
import { check } from 'express-validator'
import * as controller from '../controllers/user'

const router = express.Router()

router.get('/a', (req: any, res: Response) => {
  res.json({message: 'awdefde'})
  console.log('adsads')
})

router.post('/register',
  [
    check('email', 'Введите корректный email').isEmail(),
    check('password', 'Пароль не может быть короче 6 символов')
      .isLength({min: 6})
  ],
  controller.register)

router.post('/login', controller.login)

router.get('/:id', controller.getUser)

router.get('/', controller.getAuthUser)

router.put('/update/:id', controller.updateUser)
router.delete('/delete/:id', controller.logout)

export default router
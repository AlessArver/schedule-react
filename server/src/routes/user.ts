import express, { Request, Response } from 'express'
import { check } from 'express-validator'
import * as controller from '../controllers/user'

const router = express.Router()

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

router.get('/logout',  (req: Request, res: Response) => {
  console.log('log out')
  // if (req.cookies['userToken'])
  //   res
  //     .cookie('userToken', '', {maxAge: 0})
  //     .json({message: 'logged out'})
})

router.delete('/delete/:id', controller.deleteUser)

// router.get('/auth/google',
//   passport.authenticate('google', {scope: ''}))
// router.get('/auth/google/callback',
//   passport.authenticate('google', {failureRedirect: '/login'}),
//   (req: Request, res: Response) => res.redirect('/api/todos'))

export default router
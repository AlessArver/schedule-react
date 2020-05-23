const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const User = require("../models/user")

exports.register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res
                //.status(400)
                .json({
                    resultCode: 1,
                    errors: errors.array(),
                    message: "Введите корректную почту и пароль."
                })

        const {name, surname, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({name, surname, email, password: hashedPassword})
        await user.save()

        res
            .status(201)
            .json({resultCode: 0, message: "Регистрация прошла успешно"})
    } catch (e) {
        res
            .status(500)
            .json({resultCode: 0, message: "Что-то пошло не так. Попробуйте снова."})
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})

        const isMatch = await bcrypt.compare(password, user.password)
        if (!email || !isMatch)
            return res
                // .status(400)
                .json({resultCode: 1, message: "Введите почту и пароль для входа"})

        const token = await jwt.sign(
            {userId: user.id},
            "secret",
            {expiresIn: "1h"}
        )
        res
            .cookie("userToken", token)
            .json({resultCode: 0, token, user, message: "U a logged in"})
    } catch (e) {
        throw e
        // res
        //     .status(500)
        //     .json({resultCode: 1, message: "Что-то пошло не так. Попробуйте снова.", e: e})
    }
}

exports.getUser = (req, res) => {
    try {
        User.findById(req.params.id, (err, user) => {
            if (err) throw err
            else res.json({resultCode: 0, user})
        })
    } catch (e) {
        res.json({resultCode: 1, message: e})
    }
}

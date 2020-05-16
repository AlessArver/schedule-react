const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const User = require("../models/user")

exports.register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({
                errors: errors.array(),
                message: "Введите корректную почту и пароль."
            })

        const {name, surname, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({name, surname, email, password: hashedPassword})
        await user.save()

        res
            .status(201)
            .json({message: "Регистрация прошла успешно"})
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так. Попробуйте снова."})
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user)
            return res.status(400).json({message: "Пользователя с такими данными не существует"})

        const isMatch = await bcrypt.compare(password, user.password)
        if (!email || !isMatch)
            return res.status(400).json({message: "Введите почту и пароль для входа"})

        const token = jwt.sign(
            {userId: user.id},
            "secret",
            {expiresIn: "1h"}
        )
        console.log(user)
        res
            .json({token, user, message: "U a logged in"})
            .cookie("userToken", token)
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так. Попробуйте снова."})
    }
}

exports.getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err
        else res.send(user)
    })
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
        (err, user) => {
            if (err) throw err
            else res.json({message: "user is updated"})
        }
    )
}

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, err => {
        if (err) throw err
        else res.json({message: "user is deleted"})
    })
}
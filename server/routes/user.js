const router = require("express").Router()
const {check} = require('express-validator')
const controller = require("../controllers/user")

router.post("/register",
    [
        check('email', 'Введите корректный email').isEmail(),
        check('password', 'Пароль не может быть короче 6 символов')
            .isLength({min: 6})
    ],
    controller.register)

router.post("/login", controller.login)

router.get("/:id", controller.getUser)

router.get("/", controller.getAuthUser)

router.put("/update/:id", controller.updateUser)
router.delete("/delete/:id", controller.logout)

module.exports = router
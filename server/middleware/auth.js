const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies['userToken'];
        if (!token)
            return res.status(401).json({message: 'Нет авторизации'})

        const decoded = jwt.verify(token, "secret")
        req.user = decoded
        req.token = token
        next()
    } catch (e) {
        res.status(401).json({message: 'Нет авторизации'})
    }
}
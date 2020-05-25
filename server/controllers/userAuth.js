const User = require("../models/user")

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

exports.logout = (req, res) => {
    User.findByIdAndDelete(req.params.id, err => {
        if (err) throw err
        else res.json({message: "user is deleted"})
    })
}
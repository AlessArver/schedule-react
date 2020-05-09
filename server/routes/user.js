const router = require("express").Router()
const controller = require("../controllers/user")

router.get("/:id", controller.getUser)

router.put("/update", controller.updateUser)

router.delete("/delete", controller.deleteUser)

module.exports = router
const router = require("express").Router()
const controller = require("../controllers/userAuth")

router.get("/", controller.getAuthUser)

router.put("/update/:id", controller.updateUser)
router.delete("/delete/:id", controller.logout)

module.exports = router
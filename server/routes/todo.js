const router = require("express").Router()
const controller = require("../controllers/todo")

router.get("/", controller.getTodos)

router.get("/:id", controller.getTodo)

router.post("/create", controller.createTodo)

router.put("/update", controller.updateTodo)

router.delete("/delete", controller.deleteTodo)

module.exports = router
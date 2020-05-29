const router = require("express").Router()
const controller = require("../controllers/todo")

router.get("/", controller.getTodos)

router.get("/:id", controller.getTodo)

router.post("/create", controller.createTodo)

router.put("/isCompleted/:id", controller.completeTodo)

router.put("/update-text/:id", controller.updateTodo)

router.delete("/delete/:id", controller.deleteTodo)

module.exports = router
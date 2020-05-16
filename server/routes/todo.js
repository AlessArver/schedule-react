const router = require("express").Router()
const controller = require("../controllers/todo")

router.get("/", controller.getTodos)

router.get("/:id", controller.getTodo)

router.post("/create", controller.createTodo)

router.post("/complete", controller.completeTodo)

router.put("/update/:id", controller.updateTodo)

router.delete("/delete/:id", controller.deleteTodo)

module.exports = router
const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// routes
const scheduleRoutes = require("./routes/schedule")
const todoRoutes = require("./routes/todo")
const userRoutes = require("./routes/user")

const PORT = 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/schedules", scheduleRoutes)
app.use("/todos", todoRoutes)
app.use("/user", userRoutes)

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://username:password@cluster0-7s2go.mongodb.net/schedules",
            {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        )
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()
const express = require("express")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const auth = require("./middleware/auth")

const PORT = 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser())

app.use("/api/schedules", auth, require("./routes/schedule"))
app.use("/api/todos", auth, require("./routes/todo"))
app.use("/api/user", require("./routes/user"))

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://admin:12345@cluster0-7s2go.mongodb.net/schedules",
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
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import userRouters from './routes/user'
import scheduleRouters from './routes/schedule'
import todoRouters from './routes/todo'

const PORT = 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cookieParser())

app.use('/api/users', userRouters)
app.use('/api/todos', scheduleRouters)
app.use('/api/users', todoRouters)

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:12345@cluster0-7s2go.mongodb.net/schedules',
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

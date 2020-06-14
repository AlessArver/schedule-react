require('dotenv').config()
import { createServer } from 'http'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { TodoRouters, UserRouters } from './routes'
import { auth } from './middleware/auth'

const PORT = process.env.PORT || 5000

import createSocket from './core/socket'

const app = express()
const server = createServer(app)
const io = createSocket(server)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser())

app.use('/api/user', UserRouters)
//app.use('/api/todos', auth, () => todoRouters(app, io))
TodoRouters(app, io)
//

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONN,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
    server.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
start()

import socket from 'socket.io'
import http from 'http'

export default (http: http.Server) => {
  const io = socket(http)

  io.on('connection', function (socket: any) {
    console.log('user is connected')

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })

  return io
}

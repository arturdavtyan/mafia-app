const socketIo = require('socket.io')

const rooms = [
  { id: 1, number: '125548' },
  { id: 2, number: '226699' },
  { id: 3, number: '325478' },
  { id: 4, number: '991452' },
]

const listen = server => {
  const io = socketIo(server, { cors: 'http://localhost:5000' })
  const roomId = '123456'

  io.on('connection', socket => {
    console.log('- - - Connected - - -')

    socket.emit('rooms', rooms)

    socket.on('click', () => {
      console.log('clicked')
    })

    socket.on('join', user => {
      console.log('User joined')

      socket.join(roomId)
      socket.to(roomId).emit('userJoined', user)
    })

    // socket.on('')
  })
}

module.exports.listen = listen
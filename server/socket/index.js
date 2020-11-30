const socketIo = require('socket.io')

const listen = server => {
  const io = socketIo(server)
  const roomId = '123456'
  io.on('connect', socket => {
    console.log('- - - Connected - - -')

    socket.on('join', user => {
      console.log('User joined')

      socket.join(roomId)
      socket.to(roomId).emit('userJoined', user)
    })

    // socket.on('')
  })
}

module.exports.listen = listen
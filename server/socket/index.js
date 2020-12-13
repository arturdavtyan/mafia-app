const socketIo = require('socket.io')
const { generator } = require('../utils/')

const rooms = [
  // {
  //   uuid: 's45asds5kuDkO541', // server
  //   number: '125548',         // server
  //   password: '',             // client
  //   maxPlayer: 10,            // client
  //   isReady: false,           // server
  //   admin: {},                // client
  //   players: [                // server
  //     {
  //       uuid: 'asdadhj',
  //       nickname: 'John',
  //       type: 'don',
  //       reprimand: 0
  //     }
  //   ]
  // },
]

const listen = server => {
  const io = socketIo(server, { cors: { origin: '*' } })
  const roomId = '123456'

  io.on('connection', socket => {
    console.log('- - - Connected - - -')

    
    // User connected
    socket.emit('rooms', rooms)

    // Creating new room
    socket.on('newRoom', room => {
      const newRoom = {
        ...room,
        uuid: generator(20),
        isReady: false,
        number: generator(6, true),
        players: []
      }

      rooms.push(newRoom)
      io.emit('rooms', rooms)
      console.log('added')
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
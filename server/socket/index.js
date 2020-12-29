const socketIo = require('socket.io')
const { generator } = require('../utils/')
const { JoinPlayer, GetCurrentPlayer, PlayerLeave, GetRoomPlayers } = require('../utils/players')
const { CreateRoom, GetRooms, CheckPassword } = require('../utils/rooms')

// const rooms = [
//   // {
//   //   uuid: 's45asds5kuDkO541', // server
//   //   number: '125548',         // server
//   //   password: '',             // client
//   //   maxPlayer: 10,            // client
//   //   isReady: false,           // server
//   //   admin: {},                // client
//   //   players: [                // server
//   //     {
//   //       uuid: 'asdadhj',
//   //       nickname: 'John',
//   //       type: 'don',
//   //       reprimand: 0
//   //     }
//   //   ]
//   // },
// ]

const listen = server => {
  const io = socketIo(server, { cors: { origin: '*' } })

  io.on('connection', socket => {
    console.log('- - - Connected - - -')
    
    // Player connected
    io.emit('rooms', GetRooms())
    
    // Player join the room
    socket.on('joinRoom', ({ nickname, room, password }) => {
      const isValid = CheckPassword(room, password)
      
      if (!isValid) {
        socket.emit('wrongPassword')
        return
      }
      const player = JoinPlayer(socket.id, nickname, room)

      socket.join(room)

      socket.emit('sendPlayer', player)

      const playersCount = GetRoomPlayers(room).length

      io.to(room).emit('playersCount', playersCount)
    })

    // Creating new room
    socket.on('newRoom', ({ password, maxPlayer }) => {
      const { rooms, room } = CreateRoom(socket.id, password, maxPlayer)

      io.emit('rooms', rooms)
      socket.emit('createdRoom', room)
      console.log('Room is created')
    })

    // socket.on('join', user => {
    //   console.log('User joined')

    //   socket.join(roomId)
    //   socket.to(roomId).emit('userJoined', user)
    // })

    socket.on('disconnect', () => {
      const leftPlayer = PlayerLeave(socket.id)

      if (!leftPlayer) { return }

      const { player, total } = leftPlayer
      io.to(player.room).emit('playersCount', total)
    })
  })
}

module.exports.listen = listen
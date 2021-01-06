const socketIo = require('socket.io')
const { playerCardGenerator } = require('../utils/')
const { JoinPlayer, GetCurrentPlayer, PlayerLeave, GetRoomPlayers } = require('../utils/players')
const { CreateRoom, GetRooms, CheckPassword, GetRoomByNumber, ChangeStatus } = require('../utils/rooms')

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
    console.log(`- - ${socket.id} connected - -`)
    
    // Player connected
    io.emit('rooms', GetRooms())

    // Creating new room
    socket.on('newRoom', ({ password, maxPlayer }) => {
      const room = CreateRoom(socket.id, password, maxPlayer)
      
      socket.join(room.number)
      io.emit('rooms', GetRooms())
      socket.emit('createdRoom', room)
      console.log('Room is created')
    })
    
    // Player join the room
    socket.on('joinRoom', ({ nickname, room, password }) => {
      // Checking password
      const isValid = CheckPassword(room, password)
      
      if (!isValid) {
        socket.emit('wrongPassword')
        return
      }

      // If valid password
      const player = JoinPlayer(socket.id, nickname, room)
      const roomData = GetRoomByNumber(room)
      const playersCount = GetRoomPlayers(room).length

      // Player join the room
      socket.join(room)
      socket.emit('sendData', { player, roomData })
      io.to(room).emit('playersCount', playersCount)
    })

    // Room is ready
    socket.on('roomReady', ({ roomNumber }) => {
      // Status change
      const isChanged = ChangeStatus(roomNumber)

      if (!isChanged) return

      // Players count
      const playersCount = GetRoomPlayers(roomNumber).length

      const playerCards = playerCardGenerator(playersCount)

      io.emit('rooms', GetRooms())
      io.to(roomNumber).emit('roomReadyClient')
    })

    // Player leave the room
    socket.on('leaveRoom', () => {
      PlayerLeaveHendler(socket.id)
    })

    socket.on('disconnect', () => {
      console.log(`- - ${socket.id} disconnected - -`)

      PlayerLeaveHendler(socket.id)
    })


    // Functions
    const PlayerLeaveHendler = id => {
      const leftPlayer = PlayerLeave(id)

      if (!leftPlayer) return

      const { player, total } = leftPlayer
      
      io.to(player.room).emit('playersCount', total)
      socket.leave(leftPlayer.room)
    }
  })
}

module.exports.listen = listen
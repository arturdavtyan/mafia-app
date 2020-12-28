const socketIo = require('socket.io')
const { generator } = require('../utils/')
const { JoinPlayer, GetCurrentPlayer, PlayerLeave, GetRoomPlayers } = require('../utils/players')
const { CreateRoom, GetRooms, CheckPassword } = require('../utils/rooms')

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

let i = 0;

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
        console.log(++i)
        return
      }
      const player = JoinPlayer(socket.id, nickname, room)

      // console.log(player)

      socket.join(room)

      const playersCount = GetRoomPlayers(room).length

      io.to(room).emit('playersCount', playersCount)
    })

    // Creating new room
    socket.on('newRoom', ({ password, maxPlayer }) => {
      const { rooms, room } = CreateRoom(socket.id, password, maxPlayer)
      // const newRoom = {
      //   ...room,
      //   uuid: generator(20),
      //   isReady: false,
      //   number: generator(6, true),
      //   players: []
      // }

      // rooms.push(newRoom)
      io.emit('rooms', rooms)
      socket.emit('createdRoom', room)
      console.log('added')
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
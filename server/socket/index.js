const socketIo = require('socket.io')
const { playerCardGenerator } = require('../utils/')
const { JoinPlayer, SetPlayerRole, PlayerLeave, GetRoomPlayers, InkrementWarning } = require('../utils/players')
const { CreateRoom, GetRooms, CheckPassword, GetRoomByNumber, ChangeStatus } = require('../utils/rooms')

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
      
      GetRoomPlayers(roomNumber).forEach(({ id }, index) => SetPlayerRole(id, playerCards[index]))
      console.log(GetRoomPlayers(roomNumber))

      GetRoomPlayers(roomNumber).forEach(({ id, role }) => socket.broadcast.to(id).emit('card', role))
      socket.emit('playerList', GetRoomPlayers(roomNumber))

      io.emit('rooms', GetRooms())
      io.to(roomNumber).emit('roomReadyClient')
    })

    // Inkrement warning
    socket.on('inkrementWarning', id => {
      const { count, roomNumber } = InkrementWarning(id)

      if (!count || !roomNumber) return

      socket.to(id).emit('inkrementWarning', count)
      socket.emit('playerList', GetRoomPlayers(roomNumber))
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
      const room = GetRoomByNumber(player.room)

      if (!room) return

      const players = GetRoomPlayers(player.room)
      const gameState = GameStateHendler(players)

      socket.to(room.admin).emit('playerList', players)
      io.to(player.room).emit('playersCount', total)
      socket.leave(leftPlayer.room)
      console.log(gameState)

      if (gameState) socket.to(player.room).emit('gameState', gameState)
    }
    const GameStateHendler = list => {
      if (!list.length) return false
  
      const blackPlayersCount = list.filter(p => p.role === 'black' || p.role === 'don').length
      const redPlayersCount = list.length - blackPlayersCount
      const dRed = redPlayersCount - blackPlayersCount
  
      if (blackPlayersCount === 0) return 'red'
  
      return dRed <= 0 ? 'black' : false
    }
  })
}

module.exports.listen = listen
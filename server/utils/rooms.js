const { generator } = require('./index')

const rooms = []

// Create room
const CreateRoom = (playerId, password, maxPlayer) => {
  const room = {
    uuid: generator(25),
    number: generator(6, true),
    password,
    maxPlayer,
    admin: playerId,
    isReady: false
  }

  rooms.push(room)

  return { rooms, room }
}

// Get rooms
const GetRooms = () => rooms

module.exports = {
  CreateRoom,
  GetRooms
}
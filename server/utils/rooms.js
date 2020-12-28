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
const GetRooms = () => rooms.map(room => {
  return {
    ...room,
    password: null
  }
})

// Get room by number
const GetRoomByNumber = number => rooms.find(room => room.number === number)

// Check password for room
const CheckPassword = (number, password) => {
  const findedRoom = GetRoomByNumber(number)
  
  return findedRoom && password === findedRoom.password

}

module.exports = {
  CreateRoom,
  GetRooms,
  CheckPassword
}
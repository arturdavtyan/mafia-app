const players = []

// Join player to room
const JoinPlayer = (id, nickname, room) => {
  const player = {
    id,
    nickname,
    room,
    role: null,
    reprimand: 0
  }

  players.push(player)

  return player
}

// Inkrement warning
const InkrementWarning = id => {
  const findedIndex = players.findIndex(player => player.id === id)

  if (findedIndex === -1) return {}

  players[findedIndex].reprimand += 1
  return { count: players[findedIndex].reprimand, roomNumber: players[findedIndex].room }
}

// Get current player
const GetCurrentPlayer = id => players.find(player => player.id === id)

// Player leaves room
const PlayerLeave = id => {
  const index = players.findIndex(player => player.id === id)

  if (index === -1) return false

  const { room } = players[index]
  const roomLength = players.filter(ply => ply.room === room).length - 1

  return { player: players.splice(index, 1)[0], total: roomLength }
}

// Get room players
const GetRoomPlayers = room => players.filter(player => player.room === room)

const SetPlayerRole = (id, role) => {
  GetCurrentPlayer(id).role = role
}

module.exports = {
  JoinPlayer,
  GetCurrentPlayer,
  PlayerLeave,
  GetRoomPlayers,
  SetPlayerRole,
  InkrementWarning
}
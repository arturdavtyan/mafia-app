const players = []

// Join player to room
const JoinPlayer = (id, nickname, room) => {
  const player = { id, nickname, room }

  players.push(player)

  return player
}

// Get current player
const GetCurrentPlayer = id => players.find(player => player.id === id)

// Player leaves room
const PlayerLeave = id => {
  const index = players.findIndex(player => player.id === id)

  if (index !== -1) {
    return { player: players.splice(index, 1)[0], total: players.length }
  }
}

// Get room players
const GetRoomPlayers = room => players.filter(player => player.room === room)

module.exports = {
  JoinPlayer,
  GetCurrentPlayer,
  PlayerLeave,
  GetRoomPlayers
}
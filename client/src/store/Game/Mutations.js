// Mutations

export default {
  ResetGame (state) {
    state.Room = null
    state.PlayerUuid = null
    state.Role = null
    state.MaxPlayers = 0
    state.CurrentPlayerCount = 0
    state.IsReadyRoom = false
    state.PlayerList = [],
    state.GameState = null
  },
  SetNickName (state, payload) { state.NickName = payload },
  SetBackRoute (state, payload) { state.BackRoute = payload },
  SetSocket (state, payload) { state.Socket = payload },
  SetRooms (state, payload) { state.Rooms = payload },
  SetRoom (state, payload) { state.Room = payload },
  SetPlayer (state, payload) { state.PlayerUuid = payload },
  SetRole (state, payload) { state.Role = payload },
  SetMaxPlayer (state, payload) { state.MaxPlayers = payload },
  SetCurrentPlayerCount (state, payload) { state.CurrentPlayerCount = payload },
  RoomReady (state) { state.IsReadyRoom = true },
  SetList (state, payload) { state.PlayerList = payload },
  SetWarningCount (state, payload) { state.WarningCount = payload },
  SetGameState (state, payload) { state.GameState = payload }
}
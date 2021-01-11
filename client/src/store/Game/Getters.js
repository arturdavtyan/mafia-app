// Getters

export default {
  GetNickName (state) { return state.NickName },
  GetBackRoute (state) { return state.BackRoute },
  GetSocket (state) { return state.Socket },
  GetRooms (state) { return state.Rooms },

  // IsAdmin (state) { return !!state.Room.admin },
  GetMaxPlayer (state) { return state.MaxPlayers },
  GetCurrentPlayerCount (state) { return state.CurrentPlayerCount },
  GetPlayer (state) { return state.PlayerUuid },
  GetRole (state) { return state.Role },
  GetRoomNumber (state) { return state.Room.number },
  IsReadyRoom (state) { return state.IsReadyRoom },
  GetList (state) { return state.PlayerList },
  GetWarningCount (state) { return state.WarningCount }
}
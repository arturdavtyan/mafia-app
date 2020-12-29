// Getters

export default {
  GetNickName (state) { return state.NickName },
  GetBackRoute (state) { return state.BackRoute },
  GetSocket (state) { return state.Socket },
  GetRooms (state) { return state.Rooms },

  IsAdmin (state) { return !!state.Room.admin },
  GetPlayer (state) { return state.PlayerUuid }
}
// Mutations

export default {
  SetNickName (state, payload) { state.NickName = payload },
  SetBackRoute (state, payload) { state.BackRoute = payload },
  SetSocket (state, payload) { state.Socket = payload },
  SetRooms (state, payload) { state.Rooms = payload },
  SetRoom (state, payload) { state.Room = payload }
}
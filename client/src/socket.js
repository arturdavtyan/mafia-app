
import io from 'socket.io-client'
import store from './store/'
import router from './router'

// const socket = io('http://192.168.5.5:80')     // my notebook
// const socket = io('http://192.168.5.24:80')       // PC
// const socket = io('http://192.168.1.204:80')   // Home PC
const socket = io(window.location.origin)        // production

store.commit('Game/SetSocket', socket)

// Set rooms
socket.on('rooms', data => {
  store.commit('Game/SetRooms', data || [])
})

// Room is created
socket.on('createdRoom', ({ uuid, number, admin, maxPlayer, isReady }) => {
  store.commit('Game/SetRoom', { uuid, number, admin, maxPlayer, isReady })
  store.commit('Game/SetMaxPlayer', maxPlayer)
  store.commit('Game/SetRole', 'admin')
  store.commit('Game/SetPlayer', socket.id)
  router.push({ name: 'room', params: { uuid } }).catch(() => {})
})

socket.on('sendData', ({ player, roomData }) => {
  const { room, id } = player
  const { maxPlayer } = roomData

  store.commit('Game/SetMaxPlayer', maxPlayer)
  store.commit('Game/SetRoom', room)
  store.commit('Game/SetPlayer', id)
  router.push({ name: 'room', params: { uuid: room } }).catch(() => {})
})

socket.on('playersCount', count => {
  store.commit('Game/SetCurrentPlayerCount', count)
})

socket.on('card', role => {
  store.commit('Game/SetRole', role)
})

socket.on('playerList', data => {
  store.commit('Game/SetList', data)
})

socket.on('inkrementWarning', data => store.commit('Game/SetWarningCount', data))

// Game state
socket.on('gameState', data => {
  const isReadyRoom = store.getters['Game/IsReadyRoom']

  
  if (!isReadyRoom || !data) return

  store.commit('Game/SetGameState', data)
})

socket.on('roomReadyClient', () => store.commit('Game/RoomReady'))
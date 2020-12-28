
import io from 'socket.io-client'
import store from './store/'
import router from './router'

// const socket = io('http://192.168.5.5:5000') // my notebook
const socket = io('http://192.168.2.140:5000')    // PC
// const socket = io(window.location.origin)    // production

console.log('socket: ', socket)
store.commit('Game/SetSocket', socket)

// Set rooms
socket.on('rooms', data => store.commit('Game/SetRooms', data || []))
// socket.on('rooms', data => console.log(data))

socket.on('createdRoom', ({ uuid, number, admin, maxPlayer, isReady }) => {
  store.commit('Game/SetRoom', { uuid, number, admin, maxPlayer, isReady })
  router.push({ name: 'room', params: { uuid } }).catch(() => {})
})

// setTimeout(() => {
//   console.log('emit')
//   socket.emit('joinRoom', { nickname: store.getters['Game/GetNickName'], room: 1233 })
// }, 6000);

socket.on('playersCount', count => console.log('Count -> ', count))
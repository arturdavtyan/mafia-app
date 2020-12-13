
import io from 'socket.io-client'
import store from './store/'

const socket = io('http://192.168.5.5:5000')
// const socket = io(window.location.origin)
store.commit('Game/SetSocket', socket)

// Set rooms
socket.on('rooms', data => store.commit('Game/SetRooms', data || []))
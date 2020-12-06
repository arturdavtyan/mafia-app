<template>
  <!-- Rooms -->
  <m-rooms
    :rooms="rooms"
  ></m-rooms>
</template>

<script>
import mRooms from '@/components/rooms'

export default {
  components: {
    mRooms
  },
  data () {
    return {
      socket: this.$store.getters['Game/GetSocket'],
      rooms: [
        // { id: 1, number: '125548' },
        // { id: 2, number: '226699' },
        // { id: 3, number: '325478' },
        // { id: 4, number: '991452' },
        // { id: 5, number: 'Third' },
        // { id: 0, number: '' },
        // { id: 7, number: '' },
        // { id: 8, number: '' },
        // { id: 9, number: '' },
      ]
    }
  },
  created () {
    this.$store.commit('Game/SetBackRoute', { name: 'main' })
    setTimeout(() => {
      this.sett()
    }, 6000);
  },
  methods: {
    sett () {
      this.socket.emit('click', {})
    }
  }
}
</script>
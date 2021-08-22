<template>
  <!-- Rooms -->
  <m-rooms
    :rooms="rooms"
  ></m-rooms>
</template>

<script>
export default {
  components: {
    mRooms: () => import('@/components/rooms')
  },
  computed: {
    rooms () {
      const rooms = this.$store.getters['Game/GetRooms'] || []
      return rooms.filter(room => room.isReady === false)
    }
  },
  created () {
    this.$store.commit('Game/SetBackRoute', { name: 'main' })
  }
}
</script>
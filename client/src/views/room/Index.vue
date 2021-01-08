<template>
  <div class="new-room">
    <template v-if="!isReady">
      <waiting-bar />
    </template>
    <template v-else>
      <template v-if="role !== 'admin'">
        <card :role="role" />
      </template>
      <template v-else>
        <!-- L -->
      </template>
      <!-- <div @click="Start">
        <primary-button>Open</primary-button>
      </div> -->
    </template>
  </div>
</template>

<script>
export default {
  components: {
    waitingBar: () => import('@/components/waitingBar'),
    card: () => import('@/components/card')
  },
  data () {
    return {
      socket: this.$store.getters['Game/GetSocket'],
    }
  },
  computed: {
    isReady () {
      return this.$store.getters['Game/IsReadyRoom']
    },
    role () {
      return this.$store.getters['Game/GetRole']
    },

  },
  created () {
    this.$store.commit('Game/SetBackRoute', { name: 'main' })
  },
  beforeRouteLeave (to, from, next) {
    this.$dialog.confirm({ text: 'Ցանկանու՞մ եք դուրս գալ խաղից' })
    .then(res => {
      if (res) {
        this.socket.emit('leaveRoom')
        this.$store.commit('Game/ResetGame')
        next()
      }
    })
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
.new-room {
  padding: 10px 0;
  
  & > div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
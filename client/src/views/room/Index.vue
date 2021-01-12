<template>
  <div class="new-room">
    <!-- <player-list :players="players" /> -->
    <template v-if="!isReady">
      <waiting-bar />
    </template>
    <template v-else>
      <template v-if="role === 'admin'">
        <!-- Admin -->
        <player-list :players="players" />
      </template>
      <template v-else>
        <div class="warning-count">
          <warning-count-icon
            class="warning-coun__icon"
            :warningCount="warningCount" />
        </div>
        <card :role="role" />
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
    card: () => import('@/components/card'),
    playerList: () => import('@/components/playerList/Index'),
    warningCountIcon: () => import('@/components/warningCount')
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
    players () {
      return this.$store.getters['Game/GetList']
    },
    warningCount () {
      return this.$store.getters['Game/GetWarningCount']
    },
    // gameState () {
    //   return this.$store.getters['Game/GetGameState']
    // }
  },
  watch: {
    '$store.state.Game.WarningCount': function() {
      this.$dialog.alert({ text: 'Դուք ստանում եք նկատողություն' })
    },
    '$store.state.Game.GameState': function(gameState) {
      if (!gameState) return
      
      const winner = gameState === 'red' ? 'կարմիրները' : 'սևերը'
      const textMessage = `Խաղում հաղթեցին ${winner}`
      this.$dialog.alert({ text: textMessage })
    }
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
}
</script>

<style lang="scss" scoped>
.new-room {
  padding: 10px 0;
  
  .warning-count {
    height: 40px;
    display: flex;
    justify-content: flex-end;

    .warning-coun__icon {
      width: 100px;
      height: 100%;
      margin-right: -20px;
    }
  }
  & > div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
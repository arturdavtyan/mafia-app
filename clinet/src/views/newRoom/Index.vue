<template>
  <div class="new-room">
    <!-- <button @click="newRoom">Add</button> -->
    <primary-input
      label="Գաղտնաբառ"
      v-model="payload.password"
    />
    <primary-input
      label="Խաղացողների քանակ"
      v-model="payload.maxPlayer"
      type="number"
    />
    <div @click="NewRoom">
      <primary-button>Ստեղծել</primary-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socket: this.$store.getters['Game/GetSocket'],
      payload: {
        password: '',
        maxPlayer: '',
        admin: {}
      }
    }
  },
  created () {
    this.$store.commit('Game/SetBackRoute', { name: 'main' })
  },
  methods: {
    NewRoom () {
      this.socket.emit('newRoom', this.payload)
    }
  }
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
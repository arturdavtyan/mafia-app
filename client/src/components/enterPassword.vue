<template>
  <div class="password">
    <div class="password__box">
      <input
        ref="password_input"
        class="password__input"
        :class="{ danger: is_error }"
        type="text"
        placeholder="Գաղտնաբառ"
        v-model="password"
        @input="Typing"
        @keypress.enter="Enter" />
    </div>
    <div
      class="password__box"
       @click="Enter">
      <primary-button>Մուտք</primary-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      is_error: false,
      password: '',

      socket: this.$store.getters['Game/GetSocket']
    }
  },
  created () {
    this.socket.on('wrongPassword', () => this.is_error = true)
  },
  beforeDestroy () {
    this.socket.off('wrongPassword')
  },
  methods: {
    Enter () {
      this.$refs.password_input.blur()

      this.password = this.password.trim()

      if (!this.password) {
        this.is_error = true
        return
      }

      // if (this.$store.getters['Game/GetNickName'] === this.password) {
      //   this.$parent.$emit('close')
      //   return
      // }

      // console.log({ ...this.data, password: this.password })
      this.socket.emit('joinRoom', { ...this.data, password: this.password })
    },

    Typing () {
      if (this.is_error) this.is_error = false
    }
  }
}
</script>

<style lang="scss" scoped>
.password {
  width: 100%;

  .password__box {
    width: 100%;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
    .password__input {
      width: 100%;
      padding: 8px 12px;
      border-radius: $radius;
      border-width: 1px;
      border-style: solid;
      border-color: $black;
      color: $black;
      outline: 0;

      &:focus {
        border-color: $green !important;
        box-shadow: 0 0 6px 0 $green+44 !important;
      }
      &.danger {
        border-color: $red;
        box-shadow: 0 0 6px 0 $red+99;
      }
    }
  }
}
</style>
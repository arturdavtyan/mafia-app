<template>
  <div class="nickname">
    <div class="nickname__box">
      <input
        ref="nickname_input"
        class="nickname__input"
        :class="{ danger: is_error }"
        type="text"
        placeholder="Անուն"
        v-model="nick_name"
        @input="Typing"
        @keypress.enter="Save" />
    </div>
    <div
      class="nickname__box"
       @click="Save">
      <primary-button>Պահպանել</primary-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_error: false,
      nick_name: this.$store.getters['Game/GetNickName'] || ''
    }
  },
  methods: {
    Save () {
      this.$refs.nickname_input.blur()

      this.nick_name = this.nick_name.trim()

      if (!this.nick_name) {
        this.is_error = true
        return
      }

      if (this.$store.getters['Game/GetNickName'] === this.nick_name) {
        this.$parent.$emit('close')
        return
      }

      // Set nickname in vuex store and local storage
      this.$store.commit('Game/SetNickName', this.nick_name)
      localStorage.setItem('nick_name', this.nick_name)
      this.$parent.$emit('close')
    },

    Typing () {
      if (this.is_error) this.is_error = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nickname {
  width: 100%;

  .nickname__box {
    width: 100%;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
    .nickname__input {
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
<template>
  <div id="app" :style="`min-height: ${bodyHeight}px`">
    <!-- Loading -->
    <m-loading v-if="loading"/>

    <!-- Modal -->
    <m-modal
      v-if="isOpenModal || !Boolean(NickName)"
      :hide-close-btn="!Boolean(NickName)"
      @close="isOpenModal = false"
    >
      <m-change-nickname/>
    </m-modal>

    <!-- Header -->
    <m-header
      v-if="NickName"
      :nickname="NickName"
      @open="isOpenModal = true" />

    <!-- Content -->
    <div
      v-if="NickName"
      class="content">
      <div class="content__inner">
        <router-view />
      </div>
    </div>
      
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'App',
  components: {
    mHeader: () => import('@/components/header'),
    mChangeNickname: () => import('@/components/changeNickName'),
    mLoading: () => import('@/components/loading')
  },
  data () {
    return {
      isOpenModal: null,
      loading: true,
      bodyHeight: 0,

      // socket: io('http://localhost:5000')
    }
  },
  computed: {
    NickName () {
      return this.$store.getters['Game/GetNickName']
    }
  },
  created() {
    this.$store.commit('Game/SetSocket', io('http://localhost:5000'))
    this.RedirectToMain()
    this.ChangeWindowSize()
    window.addEventListener('resize', this.ChangeWindowSize)
  },
  mounted () {
    // this.ClearLoading()
  },
  destroyed() {
    window.removeEventListener('resize', this.ChangeWindowSize)
  },
  methods: {
    ChangeWindowSize() {
      this.$store.commit('General/SetWindowWidth', window.innerWidth)
      this.bodyHeight = window.innerHeight
    },
    ClearLoading () {
      setTimeout(() => this.loading = false, 4000)
    },
    RedirectToMain () {
      if (!this.NickName) this.$router.push({ name: 'main' }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  max-width: 680px;
  margin: 0 auto;

  .content {
    width: 100%;
    margin-top: 50px;
    padding: $padding;

    .content__inner {
      background: #000;
      // padding: $padding;
      padding: 10px;
      border-radius: $radius;
      // background-color: #1d0303;
      background-color: #f3f3f3;
      box-shadow: 0px 0 16px -2px #b2c265;
    }
  }
}
</style>

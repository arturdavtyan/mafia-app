<template>
  <div id="app" :style="`min-height: ${bodyHeight}px`">
    <!-- Loading -->
    <m-loading v-if="loading"/>

    <template v-else>
      <!-- Confirm dialog -->
      <m-confirm />
      
      <!-- Alert dialog -->
      <m-alert />

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
        <!-- <div class="transparent top"></div>
        <div class="transparent bottom"></div> -->
        <div class="content__inner">
          <router-view />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    mHeader: () => import('@/components/header'),
    mChangeNickname: () => import('@/components/changeNickName'),
    mLoading: () => import('@/components/loading'),
    mConfirm: () => import('@/components/dialog/confirm'),
    mAlert: () => import('@/components/dialog/alert')
  },
  data () {
    return {
      isOpenModal: null,
      loading: true,
      bodyHeight: 0,
    }
  },
  computed: {
    NickName () {
      return this.$store.getters['Game/GetNickName']
    }
  },
  created() {
    this.RedirectToMain()
    this.ChangeWindowSize()
    window.addEventListener('resize', this.ChangeWindowSize)
  },
  mounted () {
    this.ClearLoading()
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
      // setTimeout(() => this.loading = false, 4400)
      setTimeout(() => this.loading = false, 800)
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
    // position: relative;
    width: 100%;
    height: calc(100vh - 120px);
    margin-top: 50px;
    padding: $padding;
    overflow: hidden;

    // .transparent {
    //   position: absolute;
    //   left: 0;
    //   z-index: 50;
    //   width: 100%;
    //   height: 20px;

    //   &.top {
    //     top: 20px;
    //     background: linear-gradient(0deg, transparent 0%, #f3f3f320 40%, #f3f3f355 70%, #f3f3f3 100%);
    //   }
    //   &.bottom {
    //     bottom: 20px;
    //     background: linear-gradient(transparent 0%, #f3f3f320 40%, #f3f3f355 70%, #f3f3f3 100%);
    //   }
    // }
    .content__inner {
      height: auto;
      max-height: 100%;
      background: #000;
      padding: 10px;
      border-radius: $radius;
      background-color: #f3f3f3;
      box-shadow: 0px 0 16px -2px #b2c265;
      overflow: auto;
    }
  }
}
</style>

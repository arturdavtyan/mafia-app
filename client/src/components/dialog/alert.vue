<template>
  <div
    v-if="isShow"
    class="alert-box">
    <div class="alert-box__wrapper">
      <div class="alert-box__container">
        <p class="alert-box__text">{{ text }}</p>
        <div class="alert-box__btns">
          <div class="alert-box__btn">
            <button
              @click="CloseDialog"
              class="alert-box__b ok">Փակել</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      text: ''
    }
  },
  created () {
    this.$eventHub.$on('alert', this.ShowDialog)
  },
  methods: {
    ShowDialog ({ text }) {
      this.text = text
      this.isShow = true
    },
    CloseDialog () {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12000;
  width: 100%;
  height: 100%;
  background: #00000099;

  .alert-box__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 12001;
    transform: translate(-50%, -50%);
    max-width: 360px;
    width: 100%;
    padding: 20px;

    .alert-box__container {
      width: 100%;
      padding: 5px;
      border-radius: 4px;
      background-color: #fff;

      .alert-box__text {
        margin-bottom: 30px;
        padding: 10px;
      }
      .alert-box__btns {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .alert-box__btn {
          // max-width: 160px;
          min-width: 90px;
          width: 100%;
          padding: 10px;
          
          .alert-box__b {
            width: 100%;
            padding: 7px;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            outline: none;

            &.cancel {
              background-color: #dfdfdf;
              color: $black;
            }
            &.ok {
              background-color: $green;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
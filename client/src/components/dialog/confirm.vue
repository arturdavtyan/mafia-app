<template>
  <div
    v-if="isShow"
    class="confirm-box">
    <div class="confirm-box__wrapper">
      <div class="confirm-box__container">
        <p class="confirm-box__text">{{ text }}</p>
        <div class="confirm-box__btns">
          <div class="confirm-box__btn">
            <button
              @click="SendResponce(false)"
              class="confirm-box__b cancel">Ոչ</button>
          </div>
          <div class="confirm-box__btn">
            <button
              @click="SendResponce(true)"
              class="confirm-box__b ok">Այո</button>
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
    this.$eventHub.$on('confirm', this.ShowDialog)
  },
  methods: {
    ShowDialog ({ text }) {
      this.text = text
      this.isShow = true
    },
    SendResponce (state) {
      this.$eventHub.$emit('confirmResponce', state)
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12000;
  width: 100%;
  height: 100%;
  background: #00000099;

  .confirm-box__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 12001;
    transform: translate(-50%, -50%);
    max-width: 360px;
    width: 100%;
    padding: 20px;

    .confirm-box__container {
      width: 100%;
      padding: 5px;
      border-radius: 4px;
      background-color: #fff;

      .confirm-box__text {
        margin-bottom: 30px;
        padding: 10px;
      }
      .confirm-box__btns {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .confirm-box__btn {
          max-width: 160px;
          min-width: 90px;
          width: 100%;
          padding: 10px;
          
          .confirm-box__b {
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
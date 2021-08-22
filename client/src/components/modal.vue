<template>
  <div class="modal">
    <div class="modal-container">
      <!-- Close btn -->
      <span
        v-if="!hideCloseBtn"
        class="close"
        @click="$emit('close')">&times;</span>

      <!-- Content -->
      <div class="modal-container__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-modal',
  props: {
    hideCloseBtn: {
      type: Boolean,
      default: false
    }
  },
  created () {
    document.querySelector('body').style.overflow = 'hidden'
  },
  beforeDestroy () {
    document.querySelector('body').style.overflow = 'auto'
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background: #000000dd;
  // overflow: hidden;

  .modal-container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 340px;
    margin: 0 auto;
    padding: 40px 20px;
    border-radius: $radius;
    background-color: $white;
    box-shadow: 0 0 6px 2px #f2f2f290;

    .close {
      position: absolute;
      top: 0;
      right: 6px;
      line-height: 36px;
      color: $black;
      font-size: 32px;
      cursor: default;

      &::selection { background: transparent; }
    }
    .modal-container__content {
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>
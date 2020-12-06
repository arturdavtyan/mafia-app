<template>
  <div class="primary-button">
    <button
      class="btn"
      @click="$router.push(to).catch(() => {})">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'primary-button',
  props: ['to']
}
</script>

<style lang="scss" scoped>
.primary-button {
  width: 100%;
  height: 36px;

  .btn {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: $radius;
    outline: none;
    background: linear-gradient($green 0%, #357735 70%, #639b52 100%);
    color: $white;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    line-height: 40px;
  }
}
</style>
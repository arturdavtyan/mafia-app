<template>
  <nav v-if="hasNickname">
    <primary-button
      class="nav-btn"
      v-for="(item, index) in items"
      :key="`nav-item-${index}`"
      :to="item.to"
    >{{ item.name }}</primary-button>
  </nav>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    hasNickname () {
      return this.$store.getters['Game/GetNickName'] ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  // padding: 0 $padding;

  .nav-btn {
    width: 100%;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
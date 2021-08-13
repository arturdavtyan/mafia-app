<template>
  <div class="banner rounded-xl bg-primary p-6">
    <div class="w-full h-full flex items-center flex-col sm:flex-row justify-between">
      <div class="pr-0 sm:pr-6 mb-4 sm:mb-0">
        <div class="mb-2 text-center sm:text-left">
          <span class="text-white font-bold text-xl">{{ title }}</span>
        </div>
        <div class="text-center sm:text-left">
          <span class="text-white">{{ text }}</span>
        </div>
      </div>
      <div>
        <div class="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-white">
          <img :src="arrowSrc" alt="Arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  },

  data () {
    return {
      arrowSrc: require('@/assets/svgs/Arrow.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    box-shadow: inset 0px -6px 8px rgba(12, 65, 109, 0.08), inset 0px 4px 8px rgba(8, 46, 78, 0.25);
  }
</style>

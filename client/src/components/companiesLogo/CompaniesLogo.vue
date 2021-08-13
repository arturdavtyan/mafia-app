<template>
  <div class="companies-logo absolute top-0 left-0 right-0">
    <div class="scrollable bg-white rounded-xl w-full h-full flex items-center justify-between py-5 overflow-x-auto">
      <img
        v-for="(logo, index) in logos"
        :key="`logo-${index}`"
        :src="logo" :alt="`logo-${index}`"
        class="px-5">
    </div>
  </div>
</template>

<script>
const getImage = fileName => require(`@/assets/images/${fileName}`)

export default {
  data () {
    return {
      logos: [getImage('cl-1.png'), getImage('cl-2.png'), getImage('cl-3.png'), getImage('cl-4.png'), getImage('cl-5.png')]
    }
  }
}
</script>

<style lang="scss" scoped>
  .companies-logo {
    height: 123px;
    transform: translateY(-50%);
  }
  .scrollable {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #adb8c0;
      border-radius: 4px;
    }
  }
</style>

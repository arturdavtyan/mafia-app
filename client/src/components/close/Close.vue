<template>
  <div
    class="inline-block w-6 cursor-pointer"
    @click="$emit('close')">
    <img :src="closeSrc" alt="burger">
  </div>
</template>

<script>
export default {
  data () {
    return {
      closeSrc: require('@/assets/svgs/times-solid.svg')
    }
  }
}
</script>

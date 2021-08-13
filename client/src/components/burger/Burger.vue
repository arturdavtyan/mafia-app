<template>
  <div
    class="inline-block w-6 cursor-pointer"
    @click="$emit('open')">
    <img :src="burgerSrc" alt="burger">
  </div>
</template>

<script>
export default {
  data () {
    return {
      burgerSrc: require('@/assets/svgs/bars-solid.svg')
    }
  }
}
</script>

<template>
  <button
    class="flex items-center px-4 py-2 outline-none"
    v-on="$listeners">
    <div class="flex items-center justify-center mr-5 rounded-full w-11 h-11 border border-white">
      <img class="ml-1" :src="playSrc" alt="Play" />
    </div>
    <span class="text-white"><slot /></span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      playSrc: require('@/assets/svgs/Vector.svg')
    }
  }
}
</script>

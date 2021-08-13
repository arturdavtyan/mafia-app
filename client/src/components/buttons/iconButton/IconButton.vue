<template>
  <button class="bg-blue-900 h-10 px-5 rounded-full outline-none">
    <img :src="imgPath" alt="Button">
  </button>
</template>

<script>
export default {
  props: {
    imgPath: {}
  }
}
</script>

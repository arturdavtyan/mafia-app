<template>
  <div class="card rounded-lg border border-gray-100 px-4">
    <div class="py-4 border-b border-gray-100">
      <h5 class="text-lg text-black font-normal">{{ data.title }}</h5>
    </div>
    <div class="py-4">
      <div class="flex items-center mb-4">
        <img class="w-6 h-6 object-cover mr-3" :src="data.img" :alt="data.text">
        <span class="text-black">{{ data.text }}</span>
      </div>
      <div class="flex items-center">
        <img class="w-5 object-cover ml-0.5 mr-3" :src="data.countryFlag" :alt="data.countryName">
        <span class="text-blue-200 text-sm">{{ data.countryName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
  .card {
    box-shadow: 32px 49px 80px rgba(125, 149, 169, 0.12);
  }
</style>

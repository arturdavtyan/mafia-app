<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-dark">
    <div class="container flex justify-end py-10">
      <Close @close="$emit('close')" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  components: {
    Close: () => import('@/components/close/Close.vue')
  }
}
</script>

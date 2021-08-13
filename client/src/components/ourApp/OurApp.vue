<template>
  <div>
    <div class="text-xl text-blue-900 font-medium mb-6 text-center lg:text-left">
      <span>Discover Our App</span>
    </div>
    <div class="text-center lg:text-left mb-9">
      <IconButton class="mr-2.5" :img-path="require('@/assets/images/google.png')" />
      <IconButton :img-path="require('@/assets/images/apple.png')" />
    </div>
    <div class="flex items-center justify-center lg:justify-start">
      <FacebookIcon class="mr-6" />
      <InstagramIcon class="mr-6" />
      <TwitterIcon />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IconButton: () => import('@/components/buttons/iconButton/IconButton.vue'),
    FacebookIcon: () => import('@/components/svgComponents/Facebook.vue'),
    InstagramIcon: () => import('@/components/svgComponents/Instagram.vue'),
    TwitterIcon: () => import('@/components/svgComponents/Twitter.vue')
  }
}
</script>

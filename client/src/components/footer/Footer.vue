<template>
  <footer>
    <div class="container">
      <div class="flex justify-between flex-col lg:flex-row pb-6 lg:pb-20">
        <div class="flex flex-col">
          <div class="text-center lg:text-left mb-8">
            <img class="inline-block" :src="require('@/assets/images/logo-small.png')" alt="Logo small">
          </div>
          <div class="text-center lg:text-left">
            <span class="inline-block text-sm text-blue-400 max-w-2xs">Open an account in minutes, get full Control for much longer.</span>
          </div>
        </div>

        <div class="flex-1 lg:mx-20 my-10 lg:my-0">
          <FooterMap />
        </div>

        <div>
          <OurApp />
        </div>
      </div>
      <div class="text-center py-5 border-t border-gray-400">
        <span class="text-blue-400">All rights reserved Hitmarker</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {
    FooterMap: () => import('@/components/footerMap/FooterMap.vue'),
    OurApp: () => import('@/components/ourApp/OurApp.vue')
  }
}
</script>

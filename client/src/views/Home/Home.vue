<template>
  <div>
    <Header />
    <main>
      <FirstScreen />
      <PromotedJobs />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/header/Header.vue'),
    FirstScreen: () => import('@/components/firstScreen/FirstScreen.vue'),
    PromotedJobs: () => import('@/components/promotedJobs/PromotedJobs.vue'),
    Footer: () => import('@/components/footer/Footer.vue')
  }
}
</script>

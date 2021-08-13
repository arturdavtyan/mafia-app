<template>
  <div class="pb-20 lg:pb-80">
    <div class="container">
      <div class="pt-24 lg:pt-32 relative">
        <CompaniesLogo />
        <div class="text-center mb-4">
          <Title>Promoted Jobs</Title>
        </div>
        <div class="text-center mb-20">
          <SubTitle>These opportunities are shown on every page of our site and shared daily on our Twitter account.</SubTitle>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card
            v-for="(item, index) in data"
            :key="`item-${index}`"
            :data="item" />
        </div>
        <Banner
          title="Promote Your job"
          text="Listings that are promoted average over 200% more views and 150% more applications."
          class="mt-20 mb-32" />
        <Feedback />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    CompaniesLogo: () => import('@/components/companiesLogo/CompaniesLogo.vue'),
    Title: () => import('@/components/title/Title.vue'),
    SubTitle: () => import('@/components/subTitle/SubTitle.vue'),
    Card: () => import('@/components/card/Card.vue'),
    Banner: () => import('@/components/banner/Banner.vue'),
    Feedback: () => import('@/components/feedback/Feedback.vue')
  },

  data () {
    return {
      data: require('./data').data
    }
  }
}
</script>

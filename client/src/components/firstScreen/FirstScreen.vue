<template>
  <div class="bg-dark pt-32 pb-24 lg:py-40">
    <div class="container">
      <div class="flex items-center flex-col lg:flex-row">
        <div class="flex-1">
          <div class="w-full">
            <h1 class="text-white text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold">The home of gaming and esports jobs</h1>
            <p class="text-white text-center lg:text-left lg:pr-20 pt-10 pb-14">With over 8,000 active listings from more than 50 countries, Hitmarker is the largest gaming and esports jobs platform in the world. Find your dream career. Hire top talent. Make your mark.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <PrimaryButton big class="mr-0 mb-6 sm:mr-6 sm:mb-0">View Jobs</PrimaryButton>
              <PlayButton>Watch our video</PlayButton>
            </div>
          </div>
        </div>
        <div class="flex-1 mt-16 max-w-lg lg:max-w-none lg:mt-0">
          <figcaption class="w-100">
            <img src="../../assets/images/first page.png" alt="First page image">
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PlayButton: () => import('@/components/buttons/playButton/PlayButton.vue')
  }
}
</script>

<template>
  <div class="relative flex flex-col lg:flex-row items-center lg:items-start">
    <div class="relative flex-grow flex-shrink-0 max-w-4xs">
      <div class="absolute right-7 w-22 h-22 bg-primary flex justify-center items-center">
        <img :src="require('@/assets/images/apostroph.png')" alt="Apos">
      </div>
      <div class="absolute top-12 left-0 bottom-0 right-0 -z-1 bg-dark"></div>
      <img class="" :src="require('@/assets/images/image 49.png')" alt="Feedback">
    </div>
    <div class="flex w-full flex-col lg:flex-row lg:w-auto flex-auto justify-between pt-16 lg:pt-37 pl-0 lg:pl-11 pb-6 relative">
      <div class="text-3xl text-blue-900 font-medium text-center lg:text-left">
        <span>What pepole say</span>
      </div>
      <div class="flex justify-center lg:justify-start my-6 lg:my-0">
        <div class="flex justify-center items-center bg-primary-100 rounded-full w-12 h-12 mr-6 cursor-pointer">
          <img :src="require('@/assets/images/Left.png')" alt="Left">
        </div>
        <div class="flex justify-center items-center w-12 h-12 bg-primary rounded-full cursor-pointer">
          <img :src="require('@/assets/images/Right.png')" alt="Right">
        </div>
      </div>

      <div class="box relative lg:absolute top-full left-0 lg:-left-7 right-0 border border-gray-200 bg-white">
        <div class="relative py-11 px-10">
          <div class="flex flex-col md:flex-row justify-between items-center relative mb-7">
            <div>
              <div class="mb-2 text-2xl text-blue-900 font-medium text-center md:text-left">
                <span>Darrell Steward</span>
              </div>
              <div class="text-xl text-blue-900 text-center md:text-left">
                <span>CEO, ESport.</span>
              </div>
            </div>
            <Stars class="mr-3" v-model="rate" />
          </div>
          <div class="text-sm text-gray-300 pr-0 md:pr-6 tracking-wider">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          </div>
          <img class="absolute" style="bottom: -76px; left: -86px; z-index: -3;" :src="require('@/assets/images/Dots.png')" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Stars: () => import('@/components/stars/Stars.vue')
  },

  data () {
    return {
      rate: 4
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    box-shadow: 4px 20px 100px rgba(8, 21, 38, 0.06);

    &::after {
      content: '';
      position: absolute;
      top: -1px;
      bottom: -1px;
      left: -1px;
      width: 12px;
      background-color: #FF6810;
    }
  }
</style>

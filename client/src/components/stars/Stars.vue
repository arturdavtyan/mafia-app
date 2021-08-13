<template>
  <div class="rating flex" :style="{ 'font-size': `${size}px` }">
      <div class="rating__body relative">
        <div class="rating__active absolute w-0 h-full top-0 left-0 overflow-hidden" :style="{ width: `${rateProcent}%` }"></div>
        <div class="absolute flex w-full h-full top-0 left-0">
          <input
            v-for="star in stars"
            :key="star"
            type="radio"
            class="rating__item h-full opacity-0 cursor-pointer"
            :value="star"
            name="rating"
            @click="$emit('input', star)" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: {},
    size: {
      type: Number,
      default: 30
    }
  },

  data () {
    return {
      stars: Array.from({ length: 5 }).map((e, i) => i + 1)
    }
  },

  computed: {
    rateProcent () {
      return this.value / 0.05
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {

  &__body {

    &::before {
      content: "★★★★★";
      display: block;
      color: rgba(112, 117, 143, 0.3);;
    }
  }
  &__active {

    &::before {
      content: "★★★★★";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      color: #FAAF38;
    }
  }
  &__item {
    flex: 0 0 20%;
  }
}
</style>

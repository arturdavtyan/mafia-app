<template>
  <div class="mb-8 sm:mb-0">
    <div class="text-xl text-blue-900 font-medium mb-2 sm:mb-8 text-center sm:text-left">
      <span>{{ item.title }}</span>
    </div>
    <div v-if="hasChild">
      <div
        v-for="({ title, path }, index) in item.children"
        :key="`child-${index}`"
        class="mb-4 last:mb-0 text-center sm:text-left">
        <RouterLink class="text-lg text-gray-800 font-sec" :to="path">{{ title }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },

  computed: {
    hasChild () {
      return this.item.children.length > 0
    }
  }
}
</script>

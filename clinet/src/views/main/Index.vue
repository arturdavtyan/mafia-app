<template>
  <!-- Navigation -->
    <m-navigation
      :items="navItems"
    />
</template>

<script>
export default {
  components: {
    mNavigation: () => import('@/components/navigation')
  },
  data () {
    return {
      navItems: [
        { name: 'Նոր Սենյակ', to: { name: 'new-room' } },
        { name: 'Սենյակներ', to: { name: 'rooms' } },
      ],
    }
  }
}
</script>
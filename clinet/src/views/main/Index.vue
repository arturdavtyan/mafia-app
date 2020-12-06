<template>
  <!-- Navigation -->
    <m-navigation
      :items="navItems"
    />
</template>

<script>
import mNavigation from '@/components/navigation'

export default {
  components: {
    mNavigation
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
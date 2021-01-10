<template>
  <div class="player-list">
    <player-list-item
      v-for="player in players"
      :key="player.id"
      :player="player" />
  </div>
</template>

<script>
export default {
  components: {
    playerListItem: () => import('./playerListItem')
  },
  props: ['players'],
}
</script>
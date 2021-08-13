<template>
  <header class="fixed top-0 left-0 right-0 py-10 bg-dark z-40">
    <div class="container">
      <div class="flex items-center justify-between">
        <Logo to="/" />
        <Links class="lg:block hidden" :links="links" />
        <div class="flex items-center">
          <Link to="" class="mr-6 lg:block hidden">Login</Link>
          <PrimaryButton class="lg:block hidden">Create Account</PrimaryButton>
        </div>
        <Burger
          class="lg:hidden"
          @open="isOpenMenu = true" />
        <Transition name="fade">
          <Menu
            v-if="isOpenMenu"
            class="lg:hidden text-center"
            @close="isOpenMenu = false">
            <Links
              big
              vertical
              :links="links" />
            <Link big class="block" to="">Login</Link>
            <PrimaryButton class="mt-12">Create Account</PrimaryButton>
          </Menu>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script>
import { Links } from './data.js'

export default {
  components: {
    Logo: () => import('@/components/logo/Logo.vue'),
    Links: () => import('@/components/links/Links.vue'),
    Burger: () => import('@/components/burger/Burger.vue'),
    Menu: () => import('@/components/menu/Menu.vue')
  },

  data () {
    return {
      links: Links,
      isOpenMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: .3s;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
}
</style>

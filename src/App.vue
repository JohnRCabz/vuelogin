<!-- filepath: /C:/Users/frost/Downloads/miniapp/Vue/viptutors/src/App.vue -->
<template>
  <div id="app" :style="backgroundStyle">
    <Navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import backgroundImage from './assets/background.jpg';

export default {
  components: {
    Navbar
  },
  setup() {
    const route = useRoute();
    const showNavbar = computed(() => route.path !== '/login');
    const backgroundStyle = computed(() => ({
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }));

    return {
      showNavbar,
      backgroundStyle
    };
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
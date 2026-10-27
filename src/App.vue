<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from './pages/index.vue'

export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style lang="scss">
// Reset CSS dasar
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  overflow-x: hidden; // Penting untuk animasi GSAP agar tidak ada scroll horizontal liar
}
</style>
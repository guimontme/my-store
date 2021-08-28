<template>
  <div id="app">
    <Header />
    <main>
      <router-view class="container"></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Includes/Header.vue";
import Footer from "./components/Includes/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>

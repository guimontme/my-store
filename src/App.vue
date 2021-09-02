<template>
  <div id="app">
    <Header />
    <main>
      <transition mode="out-in">
        <router-view class="container"></router-view>
      </transition>
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
    padding: 20px 0;
    margin-bottom: -80px;
  }
}
</style>

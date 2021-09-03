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
import { api } from "@/services";
import Header from "./components/Includes/Header.vue";
import Footer from "./components/Includes/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
    if (localStorage.user_token) {
      api
        .validateToken()
        .then(() => {
          this.$store.dispatch("getUser");
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("user_token");
        });
    }
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
    padding-bottom: 20px;
    margin-bottom: -60px;
  }
}
</style>

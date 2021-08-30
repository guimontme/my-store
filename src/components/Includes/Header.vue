<template>
  <header id="header">
    <nav class="container">
      <router-link to="/" id="logo" custom v-slot="{ navigate }">
        <h1 @click="navigate" @keypress.enter="navigate" role="link">
          My Store
        </h1>
      </router-link>
      <router-link
        v-if="this.$store.state.login"
        class="btn"
        to="/my-account"
        >{{ name }}</router-link
      >
      <router-link v-else to="/login" class="btn">
        Login
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    name() {
      return this.$store.state.user.name.replace(/ .*/, "");
    },
  },
};
</script>

<style lang="scss">
header#header {
  box-shadow: 0 2px 4px rgba($primary, 0.3);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    #logo {
      text-decoration: none;
      color: $primary;
      font-size: 2.5rem;
      font-weight: 600;
      margin: 0;
      text-shadow: 2px 2px 0 $light_tertiary;
      cursor: pointer;
    }
  }
}
</style>

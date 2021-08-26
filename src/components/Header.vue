<template>
  <header id="header">
    <nav class="container">
      <router-link to="/" id="logo">
        My Store
      </router-link>
      <router-link to="/login" class="btn">
        Login
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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
    a#logo {
      text-decoration: none;
      color: $primary;
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
}
</style>

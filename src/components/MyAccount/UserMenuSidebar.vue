<template>
  <nav class="user_menu">
    <ul>
      <li>
        <router-link :to="{ name: 'Profile' }">Products</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Purchases' }">Purchases</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Sales' }">Sales</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'EditUser' }">Edit User</router-link>
      </li>
      <li>
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "UserMenuSidebar",
  methods: {
    logout() {
      this.$router.push({ name: "Login" });
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
.user_menu {
  display: block;
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    li {
      margin-right: 10px;
      margin-bottom: 10px;
      @include break-sm {
        display: block;
        margin-right: 0;
        margin-bottom: 1rem;
        width: 100%;
      }
      a,
      button {
        display: block;
        width: 100%;
        text-align: center;
        padding: 4px 10px;
        @include border_radius;
        background: lighten($lightgray, 25);
        font-size: 1rem;
        color: $secondary;

        &:hover,
        &.router-link-exact-active {
          color: #fff;
          background: $light_tertiary;
        }
      }
      button {
        font-family: $font_sans;
        padding: 5px 10px;
        /* height: 36px; */
        border: none;
      }
    }
  }
}
</style>

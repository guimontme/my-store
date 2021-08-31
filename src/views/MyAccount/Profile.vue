<template>
  <section class="my_account">
    <UserMenuSidebar />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import UserMenuSidebar from "@/components/MyAccount/UserMenuSidebar.vue";
export default {
  name: "Profile",
  components: {
    UserMenuSidebar,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    verifyUser() {
      if (this.$store.state.login === false) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  created() {
    this.verifyUser();
  },
};
</script>

<style lang="scss">
section.my_account {
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @include break-sm {
    grid-template-columns: 100px 1fr;
  }
}
</style>

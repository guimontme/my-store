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
  title: "My Account - My Store",
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
  padding: 40px 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @include break-sm {
    grid-template-columns: minmax(140px, 200px) 1fr;
  }
  margin-bottom: -80px;
  h1 {
    line-height: 1;
    margin-top: -2px;
  }
}
</style>

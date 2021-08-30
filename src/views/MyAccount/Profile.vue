<template>
  <section class="">
    <h1>Profile</h1>
    <p>User: {{ user }}</p>
  </section>
</template>

<script>
export default {
  name: "Profile",
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

<style></style>

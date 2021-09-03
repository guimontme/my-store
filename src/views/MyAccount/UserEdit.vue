<template>
  <section class="user_edit">
    <h2>Edit you user</h2>
    <UserForm>
      <button class="btn" @click.prevent="updateUser">Update user</button>
    </UserForm>
  </section>
</template>

<script>
import { api } from "@/services";
import UserForm from "@/components/User/UserForm.vue";
export default {
  name: "UserEdit",
  title: "Edit User - My Store",
  components: {
    UserForm,
  },
  methods: {
    updateUser() {
      api
        .put(`/user`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUser");
          this.$router.push({ name: "Profile" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.user_edit {
  h1 {
    margin-bottom: 40px;
  }
  .btn {
    width: 80%;
    margin: 20px auto;
    font-size: 1rem;
  }
}
</style>

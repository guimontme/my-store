<template>
  <section class="login_create">
    <h2>Create your account</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Create</button>
      <UserForm class="create_form" v-else>
        <button class="btn" @click.prevent="createUser">Create user</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from "@/components/MyAccount/UserForm.vue";
export default {
  name: "LoginCreate",
  components: {
    UserForm,
  },
  data() {
    return {
      create: false,
    };
  },
  methods: {
    async createUser() {
      try {
        const user = this.$store.state.user;
        if (user.email) {
          for (let property in user) {
            if (property != "id" && user[property] === "") return;
          }
          await this.$store.dispatch("createUser", user);
          await this.$store.dispatch("getUser", {
            id: user.email,
            password: user.password,
          });
          await this.$router.push({ name: "Profile" });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
section.login_create {
  margin-top: 20px;
  width: 100%;
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  .btn {
    width: 80%;
    margin: 0 auto;
    text-transform: none;
    margin-top: 20px !important;
  }
  .create_form {
    .btn {
      width: 100%;
    }
  }
}
</style>

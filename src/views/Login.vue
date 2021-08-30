<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      />
      <button class="btn" @click.prevent="handleLogin">Enter</button>
    </form>
    <p class="lost">
      <a href="/" target="_blank">Lost your password? Click here.</a>
    </p>
    <LoginCreate />
  </section>
</template>

<script>
import LoginCreate from "@/components/Login/LoginCreate.vue";
export default {
  name: "Login",
  components: {
    LoginCreate,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      console.log(this.login.email, this.login.password);
    },
  },
};
</script>

<style lang="scss">
section.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
  max-width: 80vw;
  @include desktop-only {
    max-width: 500px;
  }
  margin: auto;
  h1,
  p.lost {
    text-align: center;
    a:hover {
      color: $tertiary;
      text-decoration: underline;
    }
  }
  form {
    display: grid;
    margin: 0 auto;
    width: 100%;
    w input {
      width: 100%;
      font-style: 1.5rem !important;
    }
    .btn {
      margin: 2rem auto;
      width: 80%;
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }
}
</style>

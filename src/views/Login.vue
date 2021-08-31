<template>
  <section class="login">
    <h1>Login</h1>
    <form class="login_form">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="login.email"
        required
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
        required
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
  title: "Login - My Store",
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
    async handleLogin() {
      try {
        if (this.login.email && this.login.password) {
          const getUser = await this.$store.dispatch("getUser", {
            id: this.login.email,
            password: this.login.password,
          });
          if (getUser) await this.$router.push({ name: "Profile" });
        }
      } catch (err) {
        console.log(err);
      }
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
  /* min-height: 75vh; */
  max-width: 80vw;
  @include break-sm {
    max-width: 500px;
    margin-bottom: -60px;
  }
  margin-bottom: -80px;
  margin: auto;
  h1,
  p.lost {
    text-align: center;
    a:hover {
      color: $tertiary;
      text-decoration: underline;
    }
  }
  form.login_form {
    display: grid;
    margin: 0 auto;
    width: 100%;
    input {
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

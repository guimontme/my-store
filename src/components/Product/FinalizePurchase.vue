<template>
  <section class="finalize">
    <h2>Billing Address</h2>
    <UserForm>
      <button class="btn" @click.prevent="finalizePurchase">
        Finalize Purchase
      </button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/User/UserForm.vue";
import { api } from "@/services";
import { mapState } from "vuex";

export default {
  name: "FinalizePurchase",
  props: ["product"],
  components: {
    UserForm,
  },
  computed: {
    ...mapState(["user"]),
    buy() {
      return {
        shopper_id: this.user.email,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          zip_code: this.user.zip_code,
          street: this.user.street,
          number: this.user.number,
          neighbour: this.user.neighbour,
          city: this.user.city,
          state: this.user.state,
          country: this.user.country,
        },
      };
    },
  },
  methods: {
    async createTransation() {
      this.product.sold = "true";
      await api.put(`/products/${this.product.id}`, this.product);
      return api.post("/transations", this.buy).then(() => {
        this.$router.push({ name: "Purchases" });
      });
    },
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
          await this.createTransation();
        }
      } catch (err) {
        console.log(err);
      }
    },
    finalizePurchase() {
      if (this.$store.state.login) {
        this.createTransation();
      } else {
        this.createUser();
      }
    },
  },
};
</script>

<style lang="scss">
/* @use "sass:color"; */
section.finalize {
  .btn {
    font-size: 1.2rem;
    margin: 0 auto;
    width: 80%;
    background: $orange;
    &:hover {
      background: $dark_orange;
    }
  }
}
</style>

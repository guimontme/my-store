<template>
  <form class="user_form">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name" />

    <label for="user_email">Email</label>
    <input type="email" name="user_email" id="user_email" v-model="email" />

    <label for="user_password">Password</label>
    <input
      type="password"
      name="user_password"
      id="user_password"
      v-model="password"
    />

    <label for="zip_code">Zip Code</label>
    <input
      type="text"
      name="zip_code"
      id="zip_code"
      v-model="zip_code"
      @keyup="fillCep"
    />

    <label for="street">Street</label>
    <input type="text" name="street" id="street" v-model="street" />

    <label for="number">Number</label>
    <input type="text" name="number" id="number" v-model="number" />

    <label for="neighbour">Neighbour</label>
    <input type="text" name="neighbour" id="neighbour" v-model="neighbour" />

    <label for="city">City</label>
    <input type="text" name="city" id="city" v-model="city" />

    <label for="state">State</label>
    <input type="text" name="state" id="state" v-model="state" />

    <label for="country">Country</label>
    <input type="text" name="country" id="country" v-model="country" />

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers";
import { getCep } from "@/services";

export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "password",
        "zip_code",
        "street",
        "number",
        "neighbour",
        "city",
        "state",
        "country",
      ],
      base: "user",
      mutations: "UPDATE_USER",
    }),
  },
  methods: {
    fillCep() {
      const zipcode = this.zip_code.replace(/\D/g, "");
      if (zipcode.length === 8) {
        getCep(zipcode).then((res) => {
          this.street = res.data.logradouro;
          this.city = res.data.localidade;
          this.neighbour = res.data.bairro;
          this.state = res.data.uf;
        });
      }
    },
  },
};
</script>

<style lang="scss">
form.user_form {
  display: grid;
  grid-template-columns: 100%;
  @include desktop-only {
    grid-template-columns: 80px 1fr;
    grid-gap: 10px;
    align-items: center;
    label {
      margin-top: 0;
    }
  }
  margin: 0 auto;
  width: 100%;
  input {
    width: 100%;
  }
  .button {
    text-transform: none;
    @include desktop-only {
      width: 100%;
      grid-column: 2;
    }
  }
}
</style>

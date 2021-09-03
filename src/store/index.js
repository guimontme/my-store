import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      zip_code: "",
      street: "",
      number: "",
      city: "",
      state: "",
      country: "",
    },
    user_products: null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USER_PRRODUCTS(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.user_products.unshift(payload);
    },
  },
  actions: {
    getUser(context) {
      return api.get(`/user`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post("/user", payload);
    },
    loginUser(context, payload) {
      return api
        .login({
          username: payload.email,
          password: payload.password,
        })
        .then((response) => {
          window.localStorage.user_token = `Bearer ${response.data.token}`;
        });
    },
    logout(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        zip_code: "",
        street: "",
        number: "",
        neighbour: "",
        city: "",
        state: "",
        country: "",
      });
      context.commit("UPDATE_LOGIN", false);
      localStorage.removeItem("user_token");
    },
    getUserProducts(context) {
      api.get(`/products?user_id=${context.state.user.id}`).then((response) => {
        context.commit("UPDATE_USER_PRRODUCTS", response.data);
      });
    },
  },
  modules: {},
});

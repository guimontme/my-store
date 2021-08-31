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
      neighbour: "",
      city: "",
      state: "",
      country: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    getUser(context, payload) {
      return api
        .get(`/users/${payload.id}`)
        .then((response) => {
          if (response.data.password === payload.password) {
            context.commit("UPDATE_USER", response.data);
            context.commit("UPDATE_LOGIN", true);
          }
          return true;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post("/users", payload);
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
    },
  },
  modules: {},
});

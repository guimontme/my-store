import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PageLoading from "@/components/PageLoading.vue";
import { numberPrice } from "./filters";
import titleMixin from "./mixins/titleMixin";

Vue.config.productionTip = false;

Vue.component("PageLoading", PageLoading);

Vue.filter("numberPrice", numberPrice);

Vue.mixin(titleMixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

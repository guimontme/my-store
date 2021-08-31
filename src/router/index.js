import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Profile from "../views/MyAccount/Profile.vue";
import UserProducts from "../views/MyAccount/UserProducts.vue";
import UserPurchases from "../views/MyAccount/UserPurchases.vue";
import UserSales from "../views/MyAccount/UserSales.vue";
import UserEdit from "../views/MyAccount/UserEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/my-account",
    component: Profile,
    children: [
      {
        path: "",
        name: "Profile",
        component: UserProducts,
      },
      {
        path: "purchases",
        name: "Purchases",
        component: UserPurchases,
      },
      {
        path: "sales",
        name: "Sales",
        component: UserSales,
      },
      {
        path: "edit-user",
        name: "EditUser",
        component: UserEdit,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;

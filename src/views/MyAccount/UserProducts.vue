<template>
  <section class="user_products">
    <h2>Products</h2>
    <AddProductForm />
    <h3>Your Products in Display</h3>
    <transition-group
      v-if="user_products"
      name="list"
      tag="ul"
      class="products_list"
    >
      <li v-for="product in user_products" :key="product.id">
        <ProductItem :product="product">
          <p>{{ product.description }}</p>
          <button
            class="delete"
            @click="deleteProduct(product.id)"
            v-if="product.sold === 'false'"
          >
            delete
          </button>
          <span v-else class="sold">Sold product</span>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProductForm from "@/components/MyAccount/AddProductForm.vue";
import ProductItem from "@/components/MyAccount/ProductItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services";
export default {
  name: "UserProducts",
  title: "My Account - My Store",
  components: {
    AddProductForm,
    ProductItem,
  },
  computed: {
    ...mapState(["login", "user", "user_products"]),
  },
  methods: {
    ...mapActions(["getUserProducts"]),
    deleteProduct(id) {
      const confirmDetele = window.confirm("Are you sure to delete this item?");
      if (confirmDetele)
        api
          .delete(`/products/${id}`)
          .then(() => {
            this.getUserProducts();
          })
          .catch((error) => {
            console.log(error.reponse);
          });
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
  watch: {
    login() {
      this.getUserProducts();
    },
  },
};
</script>

<style lang="scss">
.sold {
  color: $green;
}
// Transition

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}

button.delete {
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-indent: 50px;
  overflow: hidden;
  background: url(~@/assets/img/remove.svg) no-repeat center center;
}
</style>

<template>
  <section class="products_list">
    <div v-for="product in products" :key="product.id" class="product_card">
      <img
        v-if="product.fotos.length"
        :src="product.fotos[0].src"
        :alt="product.fotos[0].title"
      />
      <p class="product_price">R$ {{ product.price }}</p>
      <p class="product_name">{{ product.name }}</p>
      <p class="product_description">{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ProductList",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      api.get("/products").then((response) => (this.products = response.data));
    },
  },
};
</script>

<style lang="scss">
section.products_list {
  .product_card {
    padding: 20px;
    border-radius: 4px;
    border: 1px solid $primary;
    margin-top: 10px;
  }
}
</style>

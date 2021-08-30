<template>
  <section class="product">
    <div v-if="product">
      <ul class="fotos" v-if="product.photos.length > 0">
        <li v-for="(photo, index) in photos" :key="index">
          <img :src="photo.src" :alt="photo.title" />
        </li>
      </ul>
      <div class="info">
        <h1 class="product_name">{{ product.name }}</h1>
        <p class="product_price">{{ product.price | numberPrice }}</p>
        <p class="product_description">{{ product.description }}</p>
        <button class="btn" v-if="product.sold === 'false'">Buy</button>
        <button class="btn" disabled v-else>Product sold</button>
      </div>
    </div>
    <PageLoading v-else />
  </section>
</template>

<script>
import { api } from "@/services";
export default {
  name: "Product",
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  computed: {
    url() {
      return `/products/${this.id}`;
    },
  },
  methods: {
    getProduct() {
      setTimeout(() => {
        api.get(this.url).then((response) => {
          return (this.product = response.data);
        });
      }, 1000);
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style lang="scss">
section.product {
  @include desktop-only {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding: 3rem 30px;
  }
  .info {
    .product_name {
      font-size: 2.2rem;
      color: $dark_primary;
      margin-bottom: 0;
      line-height: 1;
    }
    .product_price {
      color: $yellow;
      font-weight: 600;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .product_description {
      font-size: 1.2rem;
    }
    .btn {
      margin-top: 3rem;
      width: 200px;
    }
  }
}
</style>

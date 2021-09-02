<template>
  <section class="products-container">
    <transition mode="out-in">
      <div v-if="products && products.length" class="products" key="produtos">
        <div
          v-for="(product, index) in products"
          :key="product.id + index"
          class="product_card"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img
              v-if="product.photos.length > 0"
              :src="product.photos[0].src"
              :alt="product.photos[0].title"
              class="product_img"
            />
            <p class="product_price">{{ product.price | numberPrice }}</p>
            <h3 class="product_name">{{ product.name }}</h3>
            <p class="product_description">{{ product.description }}</p>
          </router-link>
        </div>
        <ProductPagination :perPage="perPage" :productsTotal="productsTotal" />
      </div>
      <div
        v-else-if="products && products.length === 0"
        class="not_found"
        key="not_found"
      >
        <h2>No results are found for "{{ $route.query.q }}"</h2>
      </div>
      <PageLoading v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services";
import { serialize } from "@/helpers";
import ProductPagination from "@/components/Home/ProductPagination.vue";

export default {
  name: "ProductList",
  components: {
    ProductPagination,
  },
  data() {
    return {
      products: [],
      perPage: 9,
      productsTotal: 0,
      loading: false,
    };
  },
  computed: {
    url() {
      const queryString = serialize(this.$route.query);
      return `/products?sold=false&_limit=${this.perPage}${queryString}`;
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      window.setTimeout(() => {
        api.get(this.url).then((response) => {
          this.productsTotal = Number(response.headers["x-total-count"]);
          return (this.products = response.data);
        });
      }, 1000);
    },
  },
  created() {
    this.getProducts();
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
};
</script>

<style lang="scss">
section.products-container {
  .products {
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @include break-sm {
      margin: 30px;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }

    .product_card {
      background: #fff;
      position: relative;
      padding: 0;
      @include box-style;
      transition: all 0.3s;
      > a {
        padding: 10px;
        top: 0;
        left: 0;
        width: 100%;
      }

      &:hover {
        box-shadow: 0 6px 12px rgba($primary, 0.4);
        transform: scale(1.1);
        position: relative;
        z-index: 1;
      }
      .product_img {
        border-radius: 4px;
        margin-bottom: 1.2rem;
      }
      .product_price {
        font-weight: 600;
        color: $yellow;
        margin-bottom: 0;
      }
      .product_name {
        margin-bottom: 10px;
      }
      .product_description {
        margin-bottom: 0;
      }
    }
  }
  .not_found {
    padding: 3rem;
    text-align: center;
    h2 {
      font-size: $size-5;
      color: $carmine;
    }
  }
}
</style>

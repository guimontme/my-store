<template>
  <section class="product">
    <div class="product" v-if="product">
      <ul class="photos" v-if="product.photos">
        <li v-for="photo in product.photos" :key="photo.title">
          <img :src="photo.src" :alt="photo.title" />
        </li>
      </ul>
      <div class="info">
        <h1 class="product_name">{{ product.name }}</h1>
        <p class="product_price">{{ product.price | numberPrice }}</p>
        <p class="product_description">{{ product.description }}</p>
        <transition mode="out-in" v-if="product.sold === 'false'">
          <button class="btn btn-buy" v-if="!finalize" @click="buyProduct">
            Buy
          </button>
          <FinalizePurchase v-else :product="product" />
        </transition>
        <button class="btn" disabled v-else>Product sold</button>
      </div>
    </div>
    <PageLoading v-else />
  </section>
</template>

<script>
import { api } from "@/services";
import FinalizePurchase from "@/components/Product/FinalizePurchase.vue";
export default {
  name: "Product",
  props: ["id"],
  components: {
    FinalizePurchase,
  },
  data() {
    return {
      product: null,
      finalize: false,
    };
  },
  computed: {
    url() {
      return `/products/${this.id}`;
    },
  },
  methods: {
    async getProduct() {
      setTimeout(() => {
        api.get(this.url).then((response) => {
          this.product = response.data;
          document.title = this.product.name + " - My Store";
        });
      }, 1000);
    },
    buyProduct() {
      this.finalize = true;
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style lang="scss">
section.product {
  > div.product {
    @include break-sm {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      padding: 20px 0;
    }
  }
  .photos {
    display: flex;
    overflow: hidden;
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
    .btn.btn-buy {
      margin-top: 3rem;
      width: 200px;
      font-size: 1.2rem;
    }
  }
}
</style>

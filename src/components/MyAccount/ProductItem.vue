<template>
  <div class="product_item" v-if="product">
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <img
        v-if="product.photos"
        :src="product.photos[0].src"
        :alt="product.photos[0].title"
        class="produdct_item_img"
      />
    </router-link>
    <div class="info">
      <p class="product_item_price">{{ product.price | numberPrice }}</p>
      <p class="product_item_name">{{ product.name }}</p>
      <p class="product_item_ref"><strong>Ref:</strong> {{ product.id }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
};
</script>

<style lang="scss">
.product_item {
  padding: 1rem;
  margin-bottom: 40px;
  background: #fff;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: minmax(100px, 200px) 1fr;
  @include box-style;
  position: relative;
  a {
    right: 20px;
  }
  p {
    margin-bottom: 0;
  }
  #{&}_img {
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
  }
  .info {
    align-self: end;
  }
  #{&}_price {
    font-weight: 600;
    color: $orange;
  }
  #{&}_name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0;
    line-height: 1;
  }
  #{&}_ref {
    font-weight: 300;
    font-size: 0.8rem;
  }
}
</style>

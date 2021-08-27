<template>
  <section class="home">
    <h1>Buy or sell</h1>
    <ProductSearch />
    <ProductsList />
  </section>
</template>

<script>
import ProductSearch from "@/components/Home/ProductSearch.vue";
import ProductsList from "@/components/Home/ProductsList.vue";

export default {
  name: "Home",
  components: {
    ProductSearch,
    ProductsList,
  },
};
</script>

<style lang="scss">
section.home {
  padding: 20px;

  h1 {
    font-size: $size-6;
    font-weight: bold;
    text-align: center;
    color: $tertiary;

    @include desktop-only {
      font-size: $size-7;
    }
  }
}
</style>

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
  title: "My Store - Home",
  components: {
    ProductSearch,
    ProductsList,
  },
};
</script>

<style lang="scss">
section.home {
  h1 {
    font-size: $size-6;
    font-weight: bold;
    text-align: center;
    color: $tertiary;

    @include break-sm {
      font-size: $size-7;
    }
  }
}
</style>

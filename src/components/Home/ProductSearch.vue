<template>
  <form id="search_form">
    <input
      type="text"
      placeholder="Search your next shop..."
      name="search"
      id="search"
      v-model="search"
    />
    <input
      type="submit"
      value="search"
      id="magnifier"
      @click.prevent="searchProduct"
    />
    <span class="icon-search"></span>
  </form>
</template>

<script>
export default {
  name: "ProductSearch",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchProduct() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style lang="scss">
form#search_form {
  @include desktop-only {
    max-width: 600px;
  }
  margin: 30px auto 60px auto;
  padding: 10px;
  text-align: center;
  position: relative;
  #search {
    display: block;
    width: 100%;
    border: none;
    height: 62px;
    padding: 20px;
    &:focus,
    &:hover {
      transform: scale(1.1);
    }
  }
  #magnifier {
    width: 62px;
    height: 62px;
    text-indent: 62px;
    background: url("~@/assets/img/search.svg") no-repeat center center;
    border: none;
    cursor: pointer;
    position: absolute;
    box-shadow: none;
    right: 10px;
    top: 10px;
    /* @extend .icon-search; */
  }
}
</style>

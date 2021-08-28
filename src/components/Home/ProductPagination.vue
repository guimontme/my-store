<template>
  <ul class="pagination" v-if="pagesTotal > 1">
    <li v-if="pagesTotal > range && current != 1">
      <router-link :to="{ query: query(current - 1) }">&#5176;</router-link>
    </li>
    <li v-else-if="pagesTotal > range && current == 1" class="disabled">
      &#5176;
    </li>
    <li class="page" v-for="page in pages" :key="page">
      <router-link :to="{ query: query(page) }">{{ page }}</router-link>
    </li>
    <li v-if="pagesTotal > range && current !== pagesTotal">
      <router-link :to="{ query: query(current + 1) }">&#5171;</router-link>
    </li>
    <li
      v-else-if="pagesTotal > range && current == pagesTotal"
      class="disabled"
    >
      &#5171;
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProductPagination",
  props: {
    perPage: {
      type: Number,
      default: 1,
    },
    productsTotal: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      range: 9,
    };
  },
  computed: {
    current() {
      return Number(this.$route.query._page) || 1;
    },
    offset() {
      return Math.ceil(this.range / 2);
    },
    pages() {
      const pagesArray = [];

      for (let i = 1; i <= this.pagesTotal; i++) {
        pagesArray.push(i);
      }

      if (
        pagesArray.length > this.range &&
        this.current < pagesArray.length - Math.floor(this.range / 2)
      ) {
        pagesArray.splice(0, this.current - this.offset);
        pagesArray.splice(this.range, this.pagesTotal);
      } else {
        pagesArray.splice(0, this.pagesTotal - this.range);
      }

      return pagesArray;
    },
    pagesTotal() {
      const total = this.productsTotal / this.perPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
};
</script>

<style lang="scss">
.pagination {
  margin-top: 20px;
  text-align: center;
  grid-column: 1/-1;
  li {
    display: inline-block;
    margin-left: 10px;
  }
  .page {
    display: inline-block;
    a {
      border-radius: 2px;
      display: block;
      margin: 4px;
      border: none;
      color: $primary;
      font-size: 1rem;
      padding: 2px 8px;
      min-width: 30px;

      &.router-link-exact-active {
        background: $light_tertiary;
        color: white;
      }
    }
  }
}
</style>

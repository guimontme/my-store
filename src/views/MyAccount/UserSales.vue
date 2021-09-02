<template>
  <section class="user_products sales">
    <h2>My Sales</h2>
    <div v-if="sales">
      <div v-for="sale in sales" :key="sale.id" class="product_sale">
        <ProductItem v-if="sale" :product="sale.product">
          <div class="shopper">
            <p><span>Shopper:</span> {{ sale.shopper_id }}</p>
          </div>
          <div class="address">
            <h3>Billing Address</h3>
            <p><span>Zip code:</span> {{ sale.address.zip_code }}</p>
            <p><span>Street:</span> {{ sale.address.street }}</p>
            <p><span>Number:</span> {{ sale.address.number }}</p>
            <p><span>Neighbour:</span> {{ sale.address.neighbour }}</p>
            <p><span>City:</span> {{ sale.address.city }}</p>
            <p><span>State:</span> {{ sale.address.state }}</p>
            <p><span>Country:</span> {{ sale.address.country }}</p>
          </div>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/MyAccount/ProductItem.vue";
import { api } from "@/services";
import { mapState } from "vuex";
export default {
  name: "UserSales",
  title: "My Sales - My Store",
  components: {
    ProductItem,
  },
  data() {
    return {
      sales: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getSales() {
      api.get(`/transations/?seller_id=${this.user.id}`).then((res) => {
        this.sales = res.data;
      });
    },
  },
  created() {
    if (this.login) this.getSales();
  },
  watch: {
    login() {
      this.getSales();
    },
  },
};
</script>

<style lang="scss">
.sales {
  .shopper {
    span {
      font-weight: 600;
      color: $orange;
    }
  }
  .address {
    h3 {
      margin-top: 20px;
      margin-bottom: 0;
      font-size: 1.3rem;
    }
    p {
      padding-left: 0.2;
      margin-bottom: 0;
      span {
        font-weight: 600;
      }
    }
  }
}
</style>

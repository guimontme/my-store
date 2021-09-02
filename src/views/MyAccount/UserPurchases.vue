<template>
  <section class="user_products">
    <h2>My Purchases</h2>
    <div v-if="purchases">
      <div v-for="purchase in purchases" :key="purchase.id">
        <ProductItem v-if="purchase" :product="purchase.product">
          <p class="seller"><span>Seller:</span> {{ purchase.seller_id }}</p>
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
  name: "UserPurchases",
  title: "My Purchases - My Store",
  components: {
    ProductItem,
  },
  data() {
    return {
      purchases: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getPurchases() {
      api.get(`/transations/?shopper_id=${this.user.id}`).then((res) => {
        this.purchases = res.data;
      });
    },
  },
  created() {
    if (this.login) {
      this.getPurchases();
    }
  },
  watch: {
    login() {
      this.getPurchases();
    },
  },
};
</script>

<style lang="scss">
.seller {
  span {
    font-weight: 600;
    color: $orange;
  }
}
</style>

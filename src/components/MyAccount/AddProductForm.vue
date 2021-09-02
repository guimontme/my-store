<template>
  <section class="section_add_product">
    <transition mode="out-in">
      <button class="btn btn--add" v-if="!form_open" @click="form_open = true">
        Add new Product
      </button>
      <form class="add_product" v-else>
        <h3>Add Product</h3>

        <label for="product_name">Name</label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          v-model="product.name"
        />

        <label for="price">Price (R$)</label>
        <input type="text" id="price" name="price" v-model="priceInput" />

        <label for="photos">Photos</label>
        <input type="file" name="photos" id="photos" title="" multiple />

        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          v-model="product.description"
        />

        <button class="btn" @click.prevent="addProduct">Add Product</button>
      </form>
    </transition>
  </section>
</template>

<script>
import { api } from "@/services";

export default {
  name: "AddProductForm",
  data() {
    return {
      form_open: false,
      product: {
        name: "",
        price: 0,
        description: "",
        photos: [],
        sold: "false",
      },
      priceInput: "0",
    };
  },
  methods: {
    formatProduct() {
      this.product.user_id = this.$store.state.user.id;
    },
    addProduct() {
      this.formatProduct();
      api
        .post("/products", this.product)
        .then(() => {
          this.$store.dispatch("getUserProducts");
        })
        .then(() => {
          this.form_open = false;
        });
    },
  },
  watch: {
    priceInput(value) {
      let priceClean = value.replace(/\./g, "").replace(/,/g, ".");
      this.product.price = Number(priceClean).toString();
    },
  },
};
</script>

<style lang="scss">
.section_add_product {
  .btn--add {
    display: inline-flex;
    margin-bottom: 20px;
  }

  .add_product {
    margin-bottom: 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 100px 1fr;
    align-items: center;

    h3 {
      grid-column: 1/-1;
      margin-bottom: 0;
    }
    input,
    textarea {
      width: 100%;
    }
    textarea {
      min-height: 8rem;
      resize: vertical;
    }
    input#photos {
      background: #fff;
      &::-webkit-file-upload-button {
        visibility: hidden;
      }
      &::before {
        content: "Select some photos";
        display: inline-block;
        background: $tertiary;
        color: white;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.8rem;
        transition: all 0.3s;
      }
      &:hover::before,
      &:active::before {
        background: $secondary;
        transform: scale(1.05);
      }
    }
    .btn {
      grid-column: 2;
      font-size: 1.5rem;
      width: 80%;
      margin: 20px auto;
    }
  }
}
</style>

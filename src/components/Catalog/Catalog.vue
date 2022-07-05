<template>
  <div class="catalog">
    <card-product v-for="product in products"
                  :key="product.id"
                  :product="product"
                  @on-add-product="addProduct"
                  @on-remove-product="removeProduct"
    />
  </div>
</template>

<script>
import CardProduct from "@/components/Catalog/CardProduct/CardProduct";
import {ProductsApi} from "@/services/api/ProductsApi";

export default {
  components: {
    CardProduct
  },
  emits: ['on-add-product', 'on-remove-product'],
  data() {
    return {
      products: null
    }
  },
  methods: {
    addProduct(product) {
      this.$emit('on-add-product', product);
    },
    removeProduct(product) {
      this.$emit('on-remove-product', product);
    },
  },
  async mounted() {
    this.products = await ProductsApi.getAll();
  }
}
</script>

<style lang="scss">
.catalog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 75%;
  max-height: 100vh;
}
</style>
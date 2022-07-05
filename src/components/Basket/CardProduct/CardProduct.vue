<template>
  <li class="card-product">{{ product.name }} {{ product.count > 1 ? `(${product.count})` : '' }}</li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-product {
  padding-bottom: 10px;
}
</style>
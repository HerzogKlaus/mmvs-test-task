<template>
  <div class="products-page">
    <catalog @on-add-product="addProduct" @on-remove-product="removeProduct"/>
    <basket :added-products="addedProducts" @go-to-confirm-order="goToConfirmOrder"/>
    <modal-layout v-if="confirmOrderVisible">
      <confirm-modal @on-confirm="confirmOrder" @on-cancel="cancelOrder">
        <span>Подтвердить заказ на сумму {{ totalAmount }}?</span>
      </confirm-modal>
    </modal-layout>
  </div>
</template>

<script>

import Catalog from "@/components/Catalog/Catalog";
import Basket from "@/components/Basket/Basket";
import ModalLayout from "@/components/ModalLayout/ModalLayout";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";

export default {
  name: 'App',
  components: {
    ConfirmModal,
    ModalLayout,
    Basket,
    Catalog
  },
  data() {
    return {
      addedProducts: {},
      confirmOrderVisible: false,
      totalAmount: 0
    }
  },
  methods: {
    addProduct(product) {
      this.addedProducts[product.name] = {
        ...product
      }
    },
    removeProduct(product) {
      if (product.count) {
        this.addedProducts[product.name] = {
          ...product
        }
      } else {
        delete this.addedProducts[product.name]
      }
    },
    goToConfirmOrder(totalAmount) {
      this.confirmOrderVisible = true;
      this.totalAmount = totalAmount;
    },
    confirmOrder() {
      location.reload();
    },
    cancelOrder() {
      this.confirmOrderVisible = false;
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}

.products-page {
  display: flex;
}
</style>

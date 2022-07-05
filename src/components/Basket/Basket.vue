<template>
  <div class="basket">
    <h1 class="basket__title">Корзина</h1>
    <div class="basket__list-wrapper">
      <ul class="basket__list">
        <card-product v-for="product in addedProducts" :key="product.id" :product="product"/>
      </ul>
    </div>
    <app-button class-name="basket__order-btn" :disabled="!Object.keys(addedProducts).length"
                @on-click="$emit('go-to-confirm-order', totalAmount)">Заказать
    </app-button>
  </div>
</template>

<script>
import CardProduct from "@/components/Basket/CardProduct/CardProduct";
import AppButton from "@/components/AppButton/AppButton";

export default {
  components: {AppButton, CardProduct},
  props: {
    addedProducts: {
      type: Object,
      required: true
    }
  },
  emits: ['go-to-confirm-order'],
  computed: {
    totalAmount() {
      return Object.values(this.addedProducts).reduce((total, product) => {
        return total + product.price * product.count
      }, 0);
    }
  }
}
</script>

<style lang="scss">
.basket {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 25%;
  background-color: #ececec;
  max-height: 100vh;

  &__title {
    padding-bottom: 20px;
  }

  &__list-wrapper {
    max-height: 80%;
    overflow-y: auto;
  }

  &__list {
    list-style: none;
  }

  &__order-btn {
    position: absolute;
    bottom: 15px;
    width: 80%;
    border-radius: 20px;
    align-self: center;
  }
}
</style>
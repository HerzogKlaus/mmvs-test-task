<template>
  <div class="card-product" :class="{'card-product_active': productCount > 0}">
    <img class="card-product__image" :src="productImage" alt="Изображение товара">
    <span class="card-product__name">{{productName}}</span>
    <div class="card-product__description">{{productDescription}}</div>
    <span class="card-product__price">
      <strong>Цена: </strong> {{productPrice}}
    </span>
    <div class="card-product__footer">
      <app-button class-name="card-product__button" @on-click="productCount++" :disabled="productCount >= 99">+</app-button>
      <span>{{productCount}}</span>
      <app-button class-name="card-product__button" @on-click="productCount--" :disabled="productCount <= 0">-</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton/AppButton";

export default {
  components: {
    AppButton
  },
  props: {
    productImage: {
      type: String,
      required: true
    },
    productPrice: {
      type: Number,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productCount: 0
    }
  }
}
</script>

<style lang="scss">
.card-product {
  width: 25%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ececec;
  margin: 25px;
  padding: 15px;
  border-radius: 20px;
  
  &_active {
    border: 2px solid #43bd87;
  }
  
  &__footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__button {
    width: 40px;
    border-radius: 50%;
  }
}
</style>
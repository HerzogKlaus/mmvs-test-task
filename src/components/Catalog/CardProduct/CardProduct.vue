<template>
  <div class="card-product" :class="{'card-product_active': productCount > 0}">
    <img class="card-product__image" :src="product.image" alt="Изображение товара">
    <span class="card-product__name">{{ product.name }}</span>
    <div class="card-product__description">{{ product.description }}</div>
    <span class="card-product__price">
      <strong>Цена: </strong> {{ product.price }}
    </span>
    <div class="card-product__footer">
      <app-button class-name="card-product__button" @on-click="addProduct" :disabled="productCount >= 99">+</app-button>
      <span>{{ productCount }}</span>
      <app-button class-name="card-product__button" @on-click="removeProduct" :disabled="productCount <= 0">-
      </app-button>
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
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['on-add-product', 'on-remove-product'],
  data() {
    return {
      productCount: 0
    }
  },
  methods: {
    addProduct() {
      this.productCount++;
      this.$emit('on-add-product', {
        ...this.product,
        count: this.productCount
      });
    },
    removeProduct() {
      this.productCount--;
      this.$emit('on-remove-product', {
        ...this.product,
        count: this.productCount
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.card-product {
  width: 18%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ececec;
  margin: 25px;
  padding: 10px;
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
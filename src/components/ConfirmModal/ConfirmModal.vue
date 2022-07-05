<template>
  <div class="confirm-modal">
    <slot></slot>
    <div class="confirm-modal__btns">
      <app-button class-name="confirm-modal__btn" @on-click="$emit('on-confirm')">Подтвердить</app-button>
      <app-button class-name="confirm-modal__btn confirm-modal__btn_cancel" @on-click="$emit('on-cancel')">Отменить
      </app-button>
    </div>
  </div>

</template>
<script>
import AppButton from "@/components/AppButton/AppButton";

export default {
  components: {AppButton},
  emits: ['on-confirm', 'on-cancel']
}
</script>

<style lang="scss">
.confirm-modal {
  background-color: #fff;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__btns {
    width: 40%;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
  }

  &__btn {
    padding: 0 10px;
    border-radius: 30px;

    &_cancel {
      background-color: #c26666;
    }
  }
}
</style>
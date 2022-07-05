<template>
  <button class="button" :class="className, {'button_disabled': disabled}" :disabled="disabled"
          @click="$emit('on-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['on-click']
}
</script>

<style lang="scss">
.button {
  background-color: #43bd87;
  color: #fff;
  border: none;
  height: 40px;
  width: auto;
  cursor: pointer;

  &_disabled {
    background-color: #cccccc;
    cursor: default;
  }
}
</style>
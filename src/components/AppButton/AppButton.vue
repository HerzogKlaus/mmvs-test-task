<template>
  <button class="button" :class="className" :disabled="disabled" @click="$emit('on-click')">
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
  }
}
</script>
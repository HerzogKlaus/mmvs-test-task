<template>
  <div class="modal-layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.modal-layout {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
}
</style>
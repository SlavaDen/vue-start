<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-button",
};
</script>
<style scoped>
.btn {
  background-color: aquamarine;
  color: black;
}
</style>
